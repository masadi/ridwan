<p>Logo Perusahaan</p>
<p><img src="{{ $data->logo ? asset('storage/images/' . $data->logo) : '/no-logo.png' }}" class="img-fluid" alt="{{ $data->nama_perusahaan }}"></p>
<p>NOMOR REGISTRASI : {{$data->nomor_registrasi}}</p>
<p>NIB : {{$data->nib}}</p>
<p>NPWP : {{$data->npwp}}</p>
<p>NAMA PERUSAHAAN : {{$data->nama_perusahaan}}</p>
<p>BRAND : {{$data->brand}}</p>
<p>ALAMAT KANTOR : 	{{$data->alamat}}</p>
<p>DESA : {{($data->desa) ? $data->desa->name : ''}}</p>
<p>KEC	: {{($data->kecamatan) ? $data->kecamatan->name : ''}}</p>
<p>KAB	: {{($data->kabupaten) ? $data->kabupaten->name : ''}}</p>
<p>PROV : {{($data->provinsi) ? $data->provinsi->name : ''}}</p>
<p>NOMOR TELPON/WA : {{$data->telepon}}</p>
<p>EMAIL : {{$data->email}}</p>
<p>WEBSITE : {{$data->website}}</p>