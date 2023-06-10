<template>
  <b-card>
    <b-alert show variant="danger" v-if="!koneksi">
      <div class="alert-body">
        Koneksi ke server terputus
      </div>
    </b-alert>
    <datatable :loading="loading_modal" :isBusy="isBusy" :items="items" :fields="fields" :meta="meta" @per_page="handlePerPage" @pagination="handlePagination" @search="handleSearch" @sort="handleSort" @action="handleAction" />
    <b-modal ref="add-modal" size="lg" :title="title" @ok="handleOk" :ok-title="ok_title" cancel-title="Close">
      <b-form @submit.prevent="handleSubmit">
        <b-row>
          <b-col cols="12">
            <b-form-group label="Device Name" :invalid-feedback="feedback.name" :state="state.name">
              <b-form-input v-model="form.name" :state="state.number" />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label="Whatsapp Number" :invalid-feedback="feedback.number" :state="state.number">
              <b-form-input v-model="form.number" :state="state.number" />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
      <!--template #modal-footer="{ ok, cancel }">
        <b-overlay :show="loading_modal" rounded opacity="0.6" size="lg" spinner-variant="secondary">
          <b-button @click="cancel()">Close</b-button>
        </b-overlay>
        <b-overlay :show="loading_modal" rounded opacity="0.6" size="lg" spinner-variant="primary">
          <b-button variant="primary" @click="ok()">Save</b-button>
        </b-overlay>
      </template-->
    </b-modal>
    <b-modal ref="scan-modal" size="lg" title="Scan Device" ok-only ok-title="Close">
      <b-row>
        <b-col>
          <ul>
            <template v-for="message in messages">
              <li>{{ message.text }}</li>
            </template>
            </ul>
        </b-col>
        <b-col>
          <img :src="qr_code" alt="qr image" v-if="connected" />
        </b-col>
      </b-row>
    </b-modal>
  </b-card>
</template>

<script>
import { BCard, BButton, BRow, BCol, BForm, BFormGroup, BFormInput, BOverlay, BAlert } from 'bootstrap-vue'
import Datatable from './Datatable.vue' //IMPORT COMPONENT DATATABLENYA
//import socket from '@/services/socketService';
import eventBus from '@core/utils/eventBus';
export default {
  components: {
    BCard,
    BButton,
    BRow, 
    BCol, 
    BForm, BFormGroup, BFormInput, BOverlay, BAlert,
    Datatable
  },
  data() {
    return {
      title: 'Add New',
      ok_title: 'Save',
      loading_modal: false,
      isBusy: true,
      fields: [
        {
          key: 'name',
          label: 'Device Nama',
          sortable: true,
          thClass: 'text-center',
        },
        {
          key: 'number',
          label: 'Whatsapp Number',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'status',
          label: 'Status',
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'actions',
          label: 'Action',
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center'
        },
      ],
      items: [],
      meta: {},
      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 10, //DEFAULT LOAD PERPAGE ADALAH 10
      search: '',
      sortBy: 'name', //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false, //ASCEDING
      form: {
        id: '',
        name: '',
        number: '',
        user_id: '',
      },
      state: {
        name: null,
        number: null,
      },
      feedback: {
        name: '',
        number: '',
      },
      messages: [],
      connected: true,
      qr_code: '',
      koneksi: true,
      myInterval: '',
    }
  },
  created() {
    this.form.user_id = this.user.id
    this.loadPostsData()
    eventBus.$on('add-modal', () => {
      this.$refs['add-modal'].show()
    });
  },
  mounted_salah() {
    socket.on('init', function(data) {
      console.log(data);
    })
    /*socket.on('init', (status) => {
      this.koneksi = status
    })*/
    socket.on('message', (message) => {
      this.messages.push(message);
    });
    socket.on('qr', (data) => {
      this.connected = true
      this.qr_code = data.src
    });
    
    socket.on('ready', (data) => {
      this.connected = false
      setTimeout(this.handleClose(), 5000)
      //this.messages.push({text: 'hide qr ready'});
    });
    socket.on('authenticated', (data) => {
      this.connected = false
      setTimeout(this.handleClose(), 5000)
      //this.messages.push({text: data.text});
    });
    /*socket.on('qr-code', (data) => {
      console.log(data);
      this.connected = true
      this.qr_code = data.src
    });*/
  },
  methods: {
    loadPostsData() {
      this.isBusy = true
      //let current_page = this.search == '' ? this.current_page : this.current_page != 1 ? 1 : this.current_page
      let current_page = this.current_page//this.search == '' ? this.current_page : 1
      //LAKUKAN REQUEST KE API UNTUK MENGAMBIL DATA POSTINGAN
      this.$http.get('/whatsapp', {
        params: {
          user_id: this.user.id,
          page: current_page,
          per_page: this.per_page,
          q: this.search,
          sortby: this.sortBy,
          sortbydesc: this.sortByDesc ? 'DESC' : 'ASC'
        }
      }).then(response => {
        let getData = response.data.data
        this.isBusy = false
        this.items = getData.data
        this.meta = {
          total: getData.total,
          current_page: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to,
        }
      })
    },
    //JIKA ADA EMIT TERKAIT LOAD PERPAGE, MAKA FUNGSI INI AKAN DIJALANKAN
    handlePerPage(val) {
      this.per_page = val //SET PER_PAGE DENGAN VALUE YANG DIKIRIM DARI EMIT
      this.loadPostsData() //DAN REQUEST DATA BARU KE SERVER
    },
    //JIKA ADA EMIT PAGINATION YANG DIKIRIM, MAKA FUNGSI INI AKAN DIEKSEKUSI
    handlePagination(val) {
      this.current_page = val //SET CURRENT PAGE YANG AKTIF
      this.loadPostsData()
    },
    //JIKA ADA DATA PENCARIAN
    handleSearch(val) {
      this.search = val //SET VALUE PENCARIAN KE VARIABLE SEARCH
      this.loadPostsData() //REQUEST DATA BARU
    },
    //JIKA ADA EMIT SORT
    handleSort(val) {
      if (val.sortBy) {
        this.sortBy = val.sortBy
        this.sortByDesc = val.sortDesc
        this.loadPostsData() //DAN LOAD DATA BARU BERDASARKAN SORT
      }
    },
    handleDelete(){
      this.$swal({
        title: 'Apakah Anda yakin?',
        text: 'Tindakan ini tidak dapat dikembalikan!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yakin!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
        allowOutsideClick: false,
      }).then(result => {
        if (result.value) {
          this.$http.post('/whatsapp/destroy', this.form).then(response => {
            let getData = response.data
            this.$swal({
              icon: getData.icon,
              title: getData.title,
              text: getData.text,
              customClass: {
                confirmButton: 'btn btn-success',
              },
            }).then(result => {
              this.loadPostsData()
            })
          });
        }
      })
    },
    handleScan(){
      this.loading_modal = true
      this.$http.post('/whatsapp/scan', this.form).then(response => {
        let getData = response.data
        console.log(getData);
        this.loading_modal = false
        if(getData.success){
          this.qr_code = getData.data.qr
          this.myInterval = setInterval(this.myTimer, 10000);
        }
        this.$refs['scan-modal'].show()
      });
    },
    myTimer() {
      this.$http.post('/whatsapp/status', this.form).then(response => {
        let getData = response.data
        this.loading_modal = false
        if(getData.icon === 'success'){
          this.$swal({
            icon: getData.icon,
            title: getData.title,
            text: getData.text,
            customClass: {
              confirmButton: 'btn btn-success',
            },
          }).then(result => {
            clearInterval(this.myInterval);
            this.$refs['scan-modal'].hide()
            this.loadPostsData()
          })
        }
      });
    },
    handleClose(){
      this.$http.post('/whatsapp/update', this.form).then(response => {
        this.$refs['scan-modal'].hide()
        this.form.id = ''
        this.form.name = ''
        this.form.number = ''
        this.state.name = null
        this.state.number = null
        this.feedback.name = ''
        this.feedback.number = ''
        this.messages = []
        this.qr_code = ''
        this.connected = false
        this.loadPostsData()
      });
    },
    handleAction(data){
      console.log(data);
      this.form.id = data.item.id
      this.form.name = data.item.name
      this.form.number = data.item.number
      this.device_id = data.item.device_id
      if(data.aksi == 'edit'){
        this.title = 'Update Data'
        this.ok_title = 'Update'
        this.$refs['add-modal'].show()
      }
      if(data.aksi == 'scan'){
        this.handleScan()
      }
      if(data.aksi == 'delete'){
        this.handleDelete()
      }
      if(data.aksi == 'status'){
        this.handleStatus()
      }
    },
    handleStatus(){
      this.loading_modal = true
      this.$http.post('/whatsapp/status', this.form).then(response => {
        let getData = response.data
        this.loading_modal = false
        this.$swal({
          icon: getData.icon,
          title: getData.title,
          text: getData.text,
          customClass: {
            confirmButton: 'btn btn-success',
          },
        }).then(result => {
          this.loadPostsData()
        })
      });
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      this.loading_modal = true
      this.$http.post('/whatsapp/store', this.form).then(response => {
        let getData = response.data
        this.loading_modal = false
        if(getData.errors){
          this.state.name = (getData.errors.name) ? false : null
          this.state.number = (getData.errors.number) ? false : null
          this.feedback.name = (getData.errors.name) ? getData.errors.name.join(', ') : ''
          this.feedback.number = (getData.errors.number) ? getData.errors.number.join(', ') : ''
        } else {
          this.$swal({
            icon: getData.icon,
            title: getData.title,
            text: getData.text,
            customClass: {
              confirmButton: 'btn btn-success',
            },
          }).then(result => {
            this.$refs['add-modal'].hide()
            this.loadPostsData()
          })
        }
      })
    },
  },
}
</script>
<style lang="scss">
@import '~@resources/scss/vue/libs/vue-sweetalert.scss';
</style>