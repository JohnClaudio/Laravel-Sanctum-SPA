<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::post('/login', [LoginController::class, 'authenticate']);
Route::get('/users', [UserController::class, 'index'])->middleware('auth:sanctum');
Route::post('/user/update', [UserController::class, 'updateUser'])->middleware('auth:sanctum');
Route::post('/cadastro', [UserController::class, 'store'])->name('signup');


Route::get( '/some_url', function () {
    return "Token is wrong";
}
)->name('login');


