import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FaHeartbeat, FaCalendarCheck, FaHandHoldingHeart } from 'react-icons/fa';

export default function Dashboard() {
    const { auth } = usePage().props; // Access the authenticated user data
    const [isMedicalRecordsOpen, setIsMedicalRecordsOpen] = useState(true);
    const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(true);
    const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(true);

    const getTimeOfDayGreeting = () => {
        const hours = new Date().getHours();
        if (hours < 12) return 'Good Morning';
        if (hours < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-4xl font-semibold leading-tight text-white">
                    {getTimeOfDayGreeting()}, {auth.user.name}!
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-50">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Welcome Section */}
                    <div className="bg-gradient-to-br from-purple-600 to-blue-500 shadow-xl rounded-lg mb-8 hover:shadow-2xl transition-shadow duration-300">
                        <div className="p-8 text-white">
                            <h3 className="text-3xl font-bold mb-4">Welcome back, {auth.user.name}!</h3>
                            <p className="text-lg">You're logged in! Manage your health records, appointments, and get personalized recommendations.</p>
                        </div>
                    </div>

                    {/* User Profile */}
                    <section className="bg-white shadow-lg rounded-lg border-l-4 border-purple-500 mb-8 p-6 hover:scale-105 transition-transform duration-300">
                        <h4 className="text-2xl font-semibold text-purple-600 mb-4">Your Profile</h4>
                        <div className="flex items-center space-x-6 mb-4">
                            <div className="w-20 h-20 bg-purple-600 rounded-full text-white flex items-center justify-center text-2xl font-bold">
                                {auth.user.name[0]}
                            </div>
                            <div>
                                <h5 className="font-medium text-gray-600">Name:</h5>
                                <p className="text-gray-500">{auth.user.name}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {['Email', 'Date of Birth', 'Phone'].map((field, idx) => (
                                <div key={idx}>
                                    <h5 className="font-medium text-gray-600">{field}:</h5>
                                    <p className="text-gray-500">{auth.user[field.toLowerCase().replace(/ /g, '_')]}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Medical Records */}
                    <ExpandableSection
                        title="Medical Records"
                        color="green"
                        icon={<FaHeartbeat />}
                        isOpen={isMedicalRecordsOpen}
                        toggle={() => setIsMedicalRecordsOpen(!isMedicalRecordsOpen)}
                    >
                        <p className="text-gray-600">View and manage your past medical records, diagnoses, and prescriptions.</p>
                        <div className="mt-6 space-y-4">
                            {[
                                { label: 'Last Checkup', value: 'May 10, 2024' },
                                { label: 'Condition', value: 'Healthy' },
                                { label: 'Prescriptions', value: 'Aspirin 500mg' },
                                { label: 'Next Appointment', value: 'June 20, 2024' },
                            ].map((item, idx) => (
                                <RecordDetail key={idx} {...item} />
                            ))}
                        </div>
                    </ExpandableSection>

                    {/* Appointment History */}
                    <ExpandableSection
                        title="Your Appointment History"
                        color="teal"
                        icon={<FaCalendarCheck />}
                        isOpen={isAppointmentsOpen}
                        toggle={() => setIsAppointmentsOpen(!isAppointmentsOpen)}
                    >
                        <p className="text-gray-600">Review your past and upcoming appointments.</p>
                        <div className="mt-6 space-y-4">
                            {[
                                { label: 'Last Appointment', value: 'May 12, 2024' },
                                { label: 'Doctor', value: 'Dr. Jane Smith' },
                                { label: 'Next Appointment', value: 'June 25, 2024' },
                                { label: 'Specialty', value: 'Cardiology' },
                            ].map((item, idx) => (
                                <RecordDetail key={idx} {...item} />
                            ))}
                        </div>
                    </ExpandableSection>

                    {/* Health Recommendations */}
                    <ExpandableSection
                        title="Health Recommendations"
                        color="purple"
                        icon={<FaHandHoldingHeart />}
                        isOpen={isRecommendationsOpen}
                        toggle={() => setIsRecommendationsOpen(!isRecommendationsOpen)}
                    >
                        <p className="text-gray-600">Personalized health tips based on your medical history:</p>
                        <div className="mt-6 space-y-4">
                            {[
                                { label: 'Exercise', value: '30 minutes of cardio 3 times a week' },
                                { label: 'Diet', value: 'Increase fiber intake and reduce sodium' },
                                { label: 'Sleep', value: 'Aim for 7-8 hours of sleep every night' },
                            ].map((item, idx) => (
                                <RecordDetail key={idx} {...item} />
                            ))}
                        </div>
                    </ExpandableSection>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function ExpandableSection({ title, color, icon, isOpen, toggle, children }) {
    return (
        <div className={`bg-white shadow-lg rounded-lg border-l-4 border-${color}-500 mb-8 p-6 hover:shadow-2xl transition-shadow duration-300`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className={`text-${color}-500 text-3xl transition-transform transform hover:scale-110`}>
                        {icon}
                    </div>
                    <h4 className={`text-2xl font-semibold text-${color}-600`}>{title}</h4>
                </div>
                <button
                    onClick={toggle}
                    className={`text-${color}-600 hover:text-${color}-800 transition-colors`}
                >
                    {isOpen ? 'Hide' : 'Show'} Details
                </button>
            </div>
            {isOpen && <div className="mt-4">{children}</div>}
        </div>
    );
}

function RecordDetail({ label, value }) {
    return (
        <div className="flex justify-between border-b py-2">
            <div>
                <h5 className="font-medium text-gray-600">{label}:</h5>
                <p className="text-gray-500">{value}</p>
            </div>
        </div>
    );
}
