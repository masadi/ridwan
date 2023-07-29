<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Cetak Dokumen</title>
    <!-- Styles -->
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/cetak.css') }}" />
    <style>
        body { 
            font-family: 'arial-mt';
            font-size: 14pt;
        }
        div.bg {
            position: absolute;
            bottom: 0px;
            right: 0px;
        }
        div.qrcode {
            position: absolute;
            bottom: 55px;
            left: 25px;
            background-color: #fff;
            padding: 5px;
        }
    </style>
</head>
<body>
	@yield('content')
</body>
</html>
