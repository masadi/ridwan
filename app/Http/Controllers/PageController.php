<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Page;

class PageController extends Controller
{
    public function index(){
        $data = ['data' => 'content asd'];
        return view('home', $data);
    }
    public function pages(){

    }
}
