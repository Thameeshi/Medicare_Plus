<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;

// Define your API routes here

// Route for creating an appointment
Route::post('/appointment', [AppointmentController::class, 'store']);

// Add more API routes as needed

// Example: Route to fetch all appointments (GET)
Route::get('/appointments', [AppointmentController::class, 'index']);
