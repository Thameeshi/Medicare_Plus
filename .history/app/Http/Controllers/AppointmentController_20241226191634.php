<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        // Validate incoming data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'date' => 'required|date',
            'time' => 'required',
            'message' => 'nullable|string',
        ]);

        // Create the appointment record
        Appointment::create($validatedData);

        // Return a success message
        return response()->json(['message' => 'Appointment booked successfully!'], 201);
    }
}
