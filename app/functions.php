<?php
use App\Models\Page;
function menu(){
    $data = Page::orderBy('id')->get();
    return $data;
}