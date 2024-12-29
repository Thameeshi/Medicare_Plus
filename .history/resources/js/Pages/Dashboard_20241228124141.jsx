import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { HomeIcon } from '@heroicons/react/outline'; // Heroicons

export default function Dashboard() {
    const { auth } = usePage().props; // Access the authenticated user data
    const [isMedicalRecordsOpen, setIsMedicalRecordsOpen] = useState(true);
    const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(true);
    const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(true);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center">
                    <HomeIcon className="h-6 w-6 text-white mr-2" /> {/* Home icon */}
                    <h2 className="text-4xl font-bold leading-tight text-white">
                        Dashboard
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Welcome Section */}
                    <div className="overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500 shadow-xl rounded-lg">
                        <div className="p-8 text-white">
                            <h3 className="text-3xl font-bold mb-4">Welcome, {auth.user.name}!</h3>
                            <p>You're logged in! Manage your health records, appointments, and get personalized recommendations.</p>
                        </div>
                    </div>

                    {/* User Profile */}
                    <section className="mt-8 bg-white shadow-lg rounded-lg border-l-4 border-purple-500">
                        <div className="p-6 text-gray-800">
                            <h4 className="text-2xl font-semibold text-purple-600">Your Profile</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                {['Name', 'Email', 'Date of Birth', 'Phone'].map((field, idx) => (
                                    <div key={idx}>
                                        <h5 className="font-medium text-gray-600">{field}:</h5>
                                        <p className="text-gray-500">{auth.user[field.toLowerCase().replace(/ /g, '_')]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Medical Records */}
                    <ExpandableSection
                        title="Medical Records"
                        color="green"
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

function ExpandableSection({ title, color, isOpen, toggle, children }) {
    return (
        <div className={`mt-8 bg-white shadow-lg rounded-lg border-l-4 border-${color}-500`}>
            <div className="p-6 text-gray-800">
                <div className="flex justify-between items-center">
                    <h4 className={`text-2xl font-semibold text-${color}-600`}>{title}</h4>
                    <button
                        onClick={toggle}
                        className={`text-${color}-600 hover:text-${color}-800 transition-colors`}
                    >
                        {isOpen ? 'Hide' : 'Show'} Details
                    </button>
                </div>
                {isOpen && <div className="mt-4">{children}</div>}
            </div>
        </div>
    );
}

function RecordDetail({ label, value }) {
    return (
        <div className="flex justify-between">
            <div>
                <h5 className="font-medium text-gray-600">{label}:</h5>
                <p className="text-gray-500">{value}</p>
            </div>
        </div>
    );
}
