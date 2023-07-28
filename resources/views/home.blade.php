@extends('layouts.app')
@section('title')
    @if ($data)
        {{ $data->title }}
    @endif
@endsection
@section('content')
    @if ($data && $data->slug != 'home')
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">
                <ol>
                    <li><a href="{{ url('/') }}">Home</a></li>
                    <li>{{ $data->title }}</li>
                </ol>
                <h2>{{ $data->title }}</h2>
            </div>
        </section><!-- End Breadcrumbs 111-->
    @else
        <section id="breadcrumbs" class="breadcrumbs">
        </section>
    @endif
    <section class="inner-page">
        <div class="container">
            <?php
            $content = '';
            if ($data) {
                if($data->type != 'mitra'){
                    $content = str_replace('<iframe', '<iframe class="me-4" style="float:left"', $data->content);
                    $content = str_replace('<img', '<img class="img-fluid"', $content);
                }
            }
            ?>
            {!! $content !!}
            @if ($data && $data->type == 'mitra')
                {{--
                <div class="row">
                    <div class="col-5">
                        <input type="text" class="form-control" placeholder="Nama Perusahaan"aria-label="Nama Perusahaan" id="nama_perusahaan">
                    </div>
                    <div class="col-5">
                        <select class="form-select" aria-label="Default select example" id="jenis_perusahaan">
                            <option selected>Jenis Perijinan</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-2 d-grid gap-2">
                        <button type="button" class="btn btn-primary" id="filter">FILTER</button>
                    </div>
                </div>
                --}}
                <div class="row mt-4">
                    <div class="col">
                        @forelse ($mitra as $item)
                            <a href="javascript:void(0)" data-href="/api/detil-mitra/{{$item->id}}" class="openPopup"><img
                                    src="{{ $item->logo ? asset('storage/images/' . $item->logo) : '/no-logo.png' }}"
                                    class="img-thumbnail" alt="{{ $item->nama_perusahaan }}" width="200"></a>
                        @empty
                            <h2 class="text-center">Tidak ada data untuk ditampilkan</h2>
                        @endforelse
                    </div>
                </div>
            @endif
        </div>
    </section>
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="myModalLabel">Detil Mitra</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
            </div>
        </div>
    </div>
@endsection
@section('footer')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
        const myModal = new bootstrap.Modal('#myModal', {
            keyboard: false
        })
        $('.openPopup').on('click',function(){
            var dataURL = $(this).attr('data-href');
            console.log(dataURL);
            $('.modal-body').load(dataURL,function(){
                //$('#myModal').modal({show:true});
                myModal.show()
            });
        });
        $('#filter').on('click',function(){
            var nama_perusahaan = $('#nama_perusahaan').val()
            var jenis_perusahaan = $('#jenis_perusahaan').val()
            $.post( "/api/filter-mitra", { nama_perusahaan: nama_perusahaan, jenis_perusahaan: jenis_perusahaan })
            .done(function( data ) {
                console.log(data);
            });
        });
    });
</script>
@endsection