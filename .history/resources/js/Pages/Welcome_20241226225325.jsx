{/* Main Content */}
<main className="container mx-auto py-12 px-6">
    <section className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Your Health, Our Priority</h2>
        <p className="text-lg text-gray-600">
            Medicare Plus empowers you to take control of your health with ease. Explore a variety of services from consultations to scheduling and managing your medical records.
        </p>
    </section>

    {/* Features Section with Images and Hover Effects */}
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-teal-50 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 ease-in-out">
            <img src="/images/doctor.jpg" alt="Doctor Consultation" className="w-48 h-48 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-teal-700 mb-3">Doctor Consultations</h3>
            <p className="text-lg text-gray-600">
                Consult with experienced doctors from the comfort of your home. Schedule appointments and get medical advice online.
            </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 ease-in-out">
            <img src="/images/appoinment.jpg" alt="Appointment Scheduling" className="w-48 h-48 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Appointment Scheduling</h3>
            <p className="text-lg text-gray-600">
                Easily book appointments with your doctor, and manage your medical schedules all in one place.
            </p>
            <Link
                href={route('appointment')} // Ensure this matches the route name in your Laravel routes
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition mt-4 inline-block"
            >
                Book Now
            </Link>
        </div>
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 ease-in-out">
            <img src="/images/health record.jpg" alt="Medical Records" className="w-48 h-48 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-teal-700 mb-3">Medical Records Management</h3>
            <p className="text-lg text-gray-600">
                Access and manage all your medical records digitally. Stay organized and ensure that your health history is always up to date.
            </p>
        </div>
    </section>

    {/* Testimonials Carousel - Moved Up */}
    <section className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">What Our Patients Say</h2>
        <div className="carousel space-x-6 overflow-x-scroll">
            <div className="carousel-item bg-teal-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
                <p className="text-lg text-gray-600 mb-4">
                    "Medicare Plus made scheduling my doctor appointments so easy. The platform is very user-friendly, and I can access my health records anytime!"
                </p>
                <h4 className="text-xl font-semibold text-teal-700">John Doe</h4>
            </div>
            <div className="carousel-item bg-indigo-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
                <p className="text-lg text-gray-600 mb-4">
                    "The online consultations saved me a lot of time. I no longer have to wait for hours in a waiting room."
                </p>
                <h4 className="text-xl font-semibold text-indigo-700">Jane Smith</h4>
            </div>
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

    {/* Contact Form with Live Validation */}
    <section className="bg-gray-50 py-12 px-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">Contact Us</h2>
        <form action="#" className="space-y-6 max-w-xl mx-auto">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
            />
            <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
            ></textarea>
            <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
                Send Message
            </button>
        </form>
    </section>
</main>
