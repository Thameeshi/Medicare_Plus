import { Head, Link } from '@inertiajs/react';
import './welcome.css';
import { useState } from 'react';

export default function Welcome({ auth }) {
    const [accordionState, setAccordionState] = useState({ mission: false, vision: false });

    const toggleAccordion = (key) => {
        setAccordionState((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <>
            <Head title="Welcome to Medicare Plus" />

            {/* Header Section */}
            <header className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white py-16 relative">
                <div className="background-image-container"></div>
                <div className="container mx-auto flex flex-col items-center justify-center space-y-6 relative z-10">
                    <h1 className="text-5xl font-bold tracking-tight leading-tight">
                        Welcome to Medicare Plus
                    </h1>
                    <p className="text-xl max-w-xl text-center">
                        Revolutionizing healthcare. Join us in building a healthier future with our
                        platform that makes healthcare more accessible and user-friendly.
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

            {/* About Us Section */}
            <section className="bg-gray-50 py-12 px-6 rounded-lg shadow-md">
                <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">About Us</h2>
                <div className="accordion space-y-4">
                    <div className="accordion-item">
                        <button
                            onClick={() => toggleAccordion('mission')}
                            className="accordion-header text-xl font-semibold text-teal-700 w-full text-left py-3 px-4 hover:bg-teal-100 transition"
                        >
                            Our Mission
                        </button>
                        {accordionState.mission && (
                            <div className="accordion-content p-4 bg-teal-100">
                                <p className="text-lg text-gray-600">
                                    Our mission is to make healthcare more accessible to everyone by
                                    providing an easy-to-use platform for consultations, scheduling,
                                    and medical record management.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="accordion-item">
                        <button
                            onClick={() => toggleAccordion('vision')}
                            className="accordion-header text-xl font-semibold text-teal-700 w-full text-left py-3 px-4 hover:bg-teal-100 transition"
                        >
                            Our Vision
                        </button>
                        {accordionState.vision && (
                            <div className="accordion-content p-4 bg-teal-100">
                                <p className="text-lg text-gray-600">
                                    We envision a world where healthcare is accessible to everyone,
                                    everywhere, with just a few clicks on a device.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
