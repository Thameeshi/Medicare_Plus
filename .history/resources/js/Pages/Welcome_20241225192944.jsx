import { Head, Link } from '@inertiajs/react';
import './welcome.css';

export default function Welcome({ auth }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome to Medical Plus" />
            {/* Header with Background Image */}
            <header className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white py-16 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-image.jpg)' }} />
                <div className="container mx-auto flex flex-col items-center justify-center space-y-6 relative z-10">
                    <h1 className="text-5xl font-bold tracking-tight leading-tight">Welcome to Medical Plus</h1>
                    <p className="text-xl max-w-xl text-center">
                        Revolutionizing healthcare. Join us in building a healthier future with our platform that makes healthcare more accessible and user-friendly.
                    </p>
                    <div className="flex space-x-6 mt-8">
                        <Link
                            href={route('login')}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="bg-white shadow-lg py-4">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div className="flex items-center">
                        <span className="ml-3 text-2xl font-bold text-teal-600">Medical Plus</span>
                    </div>
                    <nav className="flex space-x-6">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="text-teal-600 hover:text-teal-800 transition"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="text-teal-600 hover:text-teal-800 transition"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="text-teal-600 hover:text-teal-800 transition"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto py-12 px-6">
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Your Health, Our Priority</h2>
                    <p className="text-lg text-gray-600">
                        Medical Plus empowers you to take control of your health with ease. Explore a variety of services from consultations to scheduling and managing your medical records.
                    </p>
                </section>

{/* Features Section with Images and Hover Effects */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-teal-50 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 ease-in-out">
        <img src="/images/doctor.jpg" alt="Doctor Consultation" className="w-40 h-30 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-teal-700 mb-3">Doctor Consultations</h3>
        <p className="text-lg text-gray-600">
            Consult with experienced doctors from the comfort of your home. Schedule appointments and get medical advice online.
        </p>
    </div>
    <div className="bg-indigo-50 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 ease-in-out">
        <img src="/images/appoinment.jpg" alt="Appointment Scheduling" className="w-50 h-50 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Appointment Scheduling</h3>
        <p className="text-lg text-gray-600">
            Easily book appointments with your doctor, and manage your medical schedules all in one place.
        </p>
    </div>
    <div className="bg-teal-100 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 ease-in-out">
        <img src="/images/health record.jpg" alt="Medical Records" className="w-50 h-50 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-teal-700 mb-3">Medical Records Management</h3>
        <p className="text-lg text-gray-600">
            Access and manage all your medical records digitally. Stay organized and ensure that your health history is always up to date.
        </p>
    </div>
</section>


                {/* About Us Section with Interactive Accordion */}
                <section className="bg-gray-50 py-12 px-6 rounded-lg shadow-md">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">About Us</h2>
                    <div className="accordion space-y-4">
                        <div className="accordion-item">
                            <button className="accordion-header text-xl font-semibold text-teal-700 w-full text-left py-3 px-4 hover:bg-teal-100 transition">
                                Our Mission
                            </button>
                            <div className="accordion-content p-4 bg-teal-100">
                                <p className="text-lg text-gray-600">
                                    Our mission is to make healthcare more accessible to everyone by providing an easy-to-use platform for consultations, scheduling, and medical record management.
                                </p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button className="accordion-header text-xl font-semibold text-teal-700 w-full text-left py-3 px-4 hover:bg-teal-100 transition">
                                Our Vision
                            </button>
                            <div className="accordion-content p-4 bg-teal-100">
                                <p className="text-lg text-gray-600">
                                    We envision a world where healthcare is accessible to everyone, everywhere, with just a few clicks on a device.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Medical Plus. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}
