<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});

Route::get('/register', function () {
    return view('app');
});
Route::get('/dashboard', function () {
    return view('app');
});
Route::get('/inventory', function () {
    return view('app');
    
});
Route::get('/inventory/add', function () {
    return view('app');
    
});
Route::get('/edit/{id}', function ($id) {
    logger()->info("Edit route accessed with ID: $id");
    return view('app');
    
});
Route::get('/request', function () {
    return view('app');
    
});