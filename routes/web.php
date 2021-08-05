<?php

use App\Helper\ReactiveView;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {

    $config = [
        'page' => "App",
        'title' =>  "App Title",
        'users' =>  User::all(),
    ];

    $reactiveView = new  ReactiveView($config,'_app');
    return $reactiveView->page();
});

Route::get('/about', function () {

    $config = [
        'page' => "About",
        'title' =>  "App Title",
        'users' =>  User::limit(10)->get(),
    ];

    $reactiveView = new  ReactiveView($config,'_app');
    return $reactiveView->page();
});
