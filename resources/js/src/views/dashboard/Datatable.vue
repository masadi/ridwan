<template>
  <div>
    <b-row>
      <b-col md="4" class="mb-2">
        <b-form-select v-model="meta.per_page" :options="[10, 25, 50, 100]" @change="loadPerPage"></b-form-select>
      </b-col>
      <b-col md="4" offset-md="4">
        <b-form-input @input="search" placeholder="Cari data..."></b-form-input>
      </b-col>
    </b-row>
    <b-overlay :show="loading" rounded opacity="0.6" size="lg" spinner-variant="warning">
      <b-table responsive bordered striped :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" show-empty :busy="isBusy">
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
        <template v-slot:cell(status)="row">
          <a @click="getDetil(row.item, 'status')" id="status">
            <b-icon-shield-check variant="success" font-scale="1.5" v-if="row.item.status" />
            <b-icon-shield-x variant="danger" font-scale="1.5" v-else />
          </a>
          <b-tooltip target="status" triggers="hover">
            Check your Device Connection
          </b-tooltip>
        </template>
        <template v-slot:cell(actions)="row">
          <a @click="getDetil(row.item, 'scan')" id="scan"><b-icon-upc-scan variant="warning" font-scale="1.5" />&nbsp;&nbsp;</a>
          <a @click="getDetil(row.item, 'edit')" id="edit"><b-icon-pencil-square variant="success" font-scale="1.5" />&nbsp;&nbsp;</a>
          <!--a @click="getDetil(row.item, 'webhook')" id="webhook"><b-icon-link variant="info" font-scale="1.5" /></a-->
          <a @click="getDetil(row.item, 'delete')" id="delete"><b-icon-trash variant="danger" font-scale="1.5" /></a>
          <b-tooltip target="scan" triggers="hover">
            Scan Your Device on Whatsapp QR Code
          </b-tooltip>
          <b-tooltip target="edit" triggers="hover">
            Update Data
          </b-tooltip>
          <b-tooltip target="webhook" triggers="hover">
            Copy Webhook URL
          </b-tooltip>
          <b-tooltip target="delete" triggers="hover">
            Delete Data
          </b-tooltip>
        </template>
        <template v-slot:cell(user)="row">
          <template v-if="cekPass(row.item.user.password, row.item.user.default_password)">
            {{row.item.user.default_password}}
          </template>
          <template v-else>
            <b-badge variant="success">Custom</b-badge>
          </template>
        </template>
      </b-table>
    </b-overlay>
    <b-row class="mt-2">
      <b-col md="6">
        <p>Menampilkan {{ (meta.from) ? meta.from : 0 }} sampai {{ meta.to }} dari {{ meta.total }} entri</p>
      </b-col>
      <b-col md="6">
        <b-pagination v-model="meta.current_page" :total-rows="meta.total" :per-page="meta.per_page" align="right" @change="changePage" aria-controls="dw-datatable"></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import _ from 'lodash' //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI
import { BRow, BCol, BFormInput, BFormSelect, BFormSelectOption, BTable, BSpinner, BPagination, BButton, BOverlay, BTooltip } from 'bootstrap-vue'
import vSelect from 'vue-select'
import bcrypt from 'bcryptjs';
export default {
  components: {
    BRow,
    BCol,
    BFormInput, BFormSelect, BFormSelectOption,
    BTable,
    BSpinner,
    BPagination,
    BButton,
    BOverlay,
    BTooltip,
    vSelect,
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    meta: {
      required: true
    },
    isBusy: {
      type: Boolean,
      default: () => true,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      sortBy: null,
      sortDesc: false,
    }
  },
  watch: {
    sortBy(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      })
    },
    sortDesc(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      })
    }
  },
  methods: {
    getDetil(item, aksi){
      this.$emit('action', {
        item: item,
        aksi: aksi,
      })
    },
    loadPerPage(val) {
      this.$emit('per_page', this.meta.per_page)
    },
    changePage(val) {
      this.$emit('pagination', val)
    },
    search: _.debounce(function (e) {
      this.$emit('search', e)
    }, 500),
  },
}
</script>