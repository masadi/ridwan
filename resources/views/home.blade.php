@extends('layouts.app')
@section('content')
    @if($data && $data->slug != 'home')
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
            <ol>
                <li><a href="{{url('/')}}">Home</a></li>
                <li>{{$data->title}}</li>
            </ol>
            <h2>{{$data->title}}</h2>
        </div>
    </section><!-- End Breadcrumbs 111-->
    @else
    <section id="breadcrumbs" class="breadcrumbs">
    </section>
    @endif
    <section class="inner-page">
        <div class="container">
            {!! $data ? strip_tags($data->content, '<img><iframe><div>') : '' !!}
        </div>
    </section>
@endsection
