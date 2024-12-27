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
            <header className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white py-16">
                <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
                    <h1 className="text-5xl font-bold tracking-tight leading-tight">
                        Welcome to Medical Plus
                    </h1>
                    <p className="text-xl max-w-xl text-center">
                        Revolutionizing healthcare. Join us in building a healthier future with our platform that makes healthcare more accessible and user-friendly.
                    </p>
                    <div className="flex space-x-6 mt-8 cta-buttons">
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
                <div className="image-container flex justify-center mt-8">
                    <img 
                        src="/images/healthcare-image.jpg" 
                        alt="Healthcare" 
                        className="rounded-lg shadow-xl w-full max-w-4xl transition-transform transform hover:scale-105"
                        onError={handleImageError}
                    />
                </div>
            </header>

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

            <main className="container mx-auto py-12 px-6">
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Your Health, Our Priority</h2>
                    <p className="text-lg text-gray-600">
                        Medical Plus empowers you to take control of your health with ease. Explore a variety of services from consultations to scheduling and managing your medical records.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-teal-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-teal-700 mb-3">Our Features</h3>
                        <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                            <li>Doctor Consultations</li>
                            <li>Appointment Scheduling</li>
                            <li>Medical Records Management</li>
                            <li>Online Prescriptions</li>
                        </ul>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-indigo-700 mb-3">About Us</h3>
                        <p className="text-lg text-gray-600">
                            We are committed to making healthcare accessible and simple for everyone. Our platform is designed with user-friendly features to ensure your health comes first.
                        </p>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Medical Plus. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}
