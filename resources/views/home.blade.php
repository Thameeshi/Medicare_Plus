@extends('layouts.app')

@section('content')

<!-- Welcome Section -->
<section class="bg-teal-700 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white py-20">
    <div class="container mx-auto text-center px-6 md:px-12">
        <h1 class="text-5xl font-bold leading-tight mb-6 animate-fadeIn">
            Welcome to <span class="text-yellow-300 animate-bounce">MediCare Plus</span>
        </h1>
        <p class="text-xl mb-8 max-w-3xl mx-auto animate-fadeIn delay-200">
            We are dedicated to making healthcare accessible, organized, and stress-free for everyone. Easily manage your health records, book appointments, and find the best doctors—all in one place.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4 animate-fadeIn delay-400">
            <a href="/register" class="px-6 py-3 bg-yellow-300 text-teal-800 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition">
                Get Started Now
            </a>
            <a href="/about" class="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-800 transition">
                Learn More
            </a>
        </div>
    </div>
    <div class="mt-12 flex justify-center animate-slideUp delay-600">
        <img src="{{ asset('images/illustration .png') }}" alt="Welcome Illustration" class="w-full max-w-lg">
    </div>
</section>



<!-- Main Content Section (Appointment, Records, Doctors - Larger) -->
<div class="container mx-auto px-4 py-32">
    <div class="grid md:grid-cols-3 gap-12">
        
        <!-- Appointment Card -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src="{{ asset('images/appoinment.jpg') }}" alt="Appointments" class="card-img">
            <div class="p-8 flex flex-col justify-between flex-grow">
                <div>
                    <h2 class="text-3xl font-semibold text-gray-800 mb-4">Manage Appointments</h2>
                    <p class="text-gray-600 mb-6">Book and manage your doctor appointments with ease. Receive reminders and track your medical visits effortlessly.</p>
                </div>
                <a href="/appointments" class="btn inline-block mt-auto text-center">Book Appointment</a>
            </div>
        </div>

        <!-- Health Records Card -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src="{{ asset('images/health record.jpg') }}" alt="Health Records" class="card-img">
            <div class="p-8 flex flex-col justify-between flex-grow">
                <div>
                    <h2 class="text-3xl font-semibold text-gray-800 mb-4">Health Records</h2>
                    <p class="text-gray-600 mb-6">Keep track of your health records, prescriptions, test results, and more. Access them anytime, anywhere.</p>
                </div>
                <a href="/records" class="btn inline-block mt-auto text-center">View Records</a>
            </div>
        </div>

        <!-- Doctors Card -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src="{{ asset('images/doctor.jpg') }}" alt="Doctors" class="card-img">
            <div class="p-8 flex flex-col justify-between flex-grow">
                <div>
                    <h2 class="text-3xl font-semibold text-gray-800 mb-4">Find Doctors</h2>
                    <p class="text-gray-600 mb-6">Search for doctors in your area, read reviews, and book your next consultation effortlessly.</p>
                </div>
                <a href="/doctors" class="btn inline-block mt-auto text-center">Find Doctors</a>
            </div>
        </div>

    </div>
</div>


<!-- Call to Action Section (Slimmed down) -->
<section class="bg-teal-600 text-white py-16">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-4">Get Started Today!</h2>
        <p class="text-lg mb-6">Take control of your health with easy access to appointments, records, and doctors at your fingertips.</p>
        <a href="/register" class="btn btn-white inline-block">Join Now</a>
    </div>
</section>

@endsection
