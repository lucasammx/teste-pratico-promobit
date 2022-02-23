<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix("auth")->group(function () {
    Route::post('', [AuthController::class, 'authenticate'])->name('auth@authenticate');
    Route::get('/check', [AuthController::class, 'check'])->name('auth@check');
});

Route::middleware("auth:api")->group(function () {
    Route::prefix("products")->group(function () {
        Route::get('', [ProductController::class, 'index'])->name('products@index');
        Route::get('/dashboard', [ProductController::class, 'dashboard'])->name('products@dashboard');
        Route::get('/{id}', [ProductController::class, 'show'])->name('products@show');

        Route::post('', [ProductController::class, 'store'])->name('products@store');

        Route::put('/{id}', [ProductController::class, 'update'])->name('products@update');

        Route::delete('/{id}', [ProductController::class, 'destroy'])->name('products@destroy');
    });


    Route::prefix("tags")->group(function () {
        Route::get('', [TagController::class, 'index'])->name('tags@index');
        Route::get('/{id}', [TagController::class, 'show'])->name('tags@show');

        Route::post('', [TagController::class, 'store'])->name('tags@store');

        Route::put('/{id}', [TagController::class, 'update'])->name('tags@update');

        Route::delete('/{id}', [TagController::class, 'destroy'])->name('tags@destroy');
    });
});
