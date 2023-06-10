<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\WhatsappController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('no-access', [ApiController::class, 'no_access'])->name('login');
Route::post('webhook', [ApiController::class, 'webhook']);
Route::group(['prefix' => 'auth'], function () {
  Route::get('/semester', [AuthController::class, 'semester']);
  Route::post('login', [AuthController::class, 'login']);
  Route::post('register', [AuthController::class, 'register']);
  Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'user']);
  });
});
Route::group(['middleware' => 'auth:sanctum'], function () {
  Route::group(['prefix' => 'dashboard'], function () {
    Route::get('/', [ApiController::class, 'index']);
  });
  Route::group(['prefix' => 'users'], function () {
    Route::get('/profil', [AuthController::class, 'profil']);
    Route::post('/update-profile', [AuthController::class, 'update_profile']);
  });
  Route::group(['prefix' => 'whatsapp'], function () {
    Route::get('/', [WhatsappController::class, 'index']);
    Route::post('/store', [WhatsappController::class, 'store']);
    Route::post('/destroy', [WhatsappController::class, 'destroy']);
    Route::post('/status', [WhatsappController::class, 'status']);
    Route::post('/scan', [WhatsappController::class, 'scan']);
    Route::post('/update', [WhatsappController::class, 'update']);
  });
});
