@extends('layouts.app') <!-- Assuming you're using a layout file -->

@section('content')
<div class="container mt-5">
    <div class="row">
        <div class="col-md-12 text-center">
            <h1>Welcome to Medicare Plus</h1>
            <p class="lead mt-3">
                Your one-stop solution for managing healthcare appointments efficiently and securely.
            </p>
            <a href="{{ route('book-appointment') }}" class="btn btn-primary btn-lg mt-4">Book an Appointment</a>
            <a href="{{ route('dashboard') }}" class="btn btn-secondary btn-lg mt-4">Go to Dashboard</a>
        </div>
    </div>
</div>
@endsection
