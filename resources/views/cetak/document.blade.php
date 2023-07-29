@extends('layouts.cetak')
@section('content')
<div class="text-center">
  <p><strong>SERTIFIKAT KEMITRAAN</strong><br> Nomor :</p>
  <p>Telah terdaftar sebagai Mitra/Reseler PT LINK DATA SUMBER BAROKAH (BAROKAHNET) <i>Internet Service Provider</i> (ISP) di Kab. Sumenep</p>
  <br>
  <p>PT. BLA BLA <br> Berkedudukan di : <br> alamat</p>
  <br>
  <p>Sertifikat ini berlaku sejak tanggal diterbitkan :</p>
  <p>Sumenep, {{tgl_indo()}}</p>
  <p>Direktur Utama,</p>
  <br>
  <br>
  <br>
  <p><strong>MOH. RIDWAN, M.Kom.</strong></p>
</div>
<div class="qrcode">
  <img src="{{asset('img/qr.svg')}}" alt="qrcodes" width="250">
</div>
  <div class="bg"><img src="{{asset('img/bg-sertifikat.png')}}"></div>
@endsection
