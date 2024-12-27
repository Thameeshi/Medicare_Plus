import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const [isMedicalRecordsOpen, setIsMedicalRecordsOpen] = useState(true);
    const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(true);
    const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(true);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-gradient-to-r from-blue-500 to-green-400 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white">
                            <h3 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h3>
                            <p>You're logged in! Here you can manage your health records and appointments.</p>
                        </div>
                    </div>
                    
                    {/* User Details Section */}
                    <div className="mt-8 bg-white shadow-lg sm:rounded-lg border-l-4 border-blue-500">
                        <div className="p-6 text-gray-900">
                            <h4 className="text-xl font-semibold text-blue-600">Your Profile</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div>
                                    <h5 className="font-medium text-gray-700">Name:</h5>
                                    <p className="text-gray-600">John Doe</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Email:</h5>
                                    <p className="text-gray-600">johndoe@example.com</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Date of Birth:</h5>
                                    <p className="text-gray-600">January 1, 1985</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Phone:</h5>
                                    <p className="text-gray-600">(123) 456-7890</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Medical Records Section */}
                    <div className="mt-8 bg-white shadow-lg sm:rounded-lg border-l-4 border-green-500">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center">
                                <h4 className="text-xl font-semibold text-green-600">Medical Records</h4>
                                <button
                                    onClick={() => setIsMedicalRecordsOpen(!isMedicalRecordsOpen)}
                                    className="text-green-600 hover:text-green-800 transition-colors"
                                >
                                    {isMedicalRecordsOpen ? 'Hide' : 'Show'} Details
                                </button>
                            </div>
                            {isMedicalRecordsOpen && (
                                <div className="mt-4">
                                    <p className="text-gray-600">Here you can view and manage your past medical records, diagnoses, and prescriptions.</p>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex justify-between">
                                            <div>
                                                <h5 className="font-medium text-gray-700">Last Checkup:</h5>
                                                <p className="text-gray-600">May 10, 2024</p>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-gray-700">Condition:</h5>
                                                <p className="text-gray-600">Healthy</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div>
                                                <h5 className="font-medium text-gray-700">Prescriptions:</h5>
                                                <p className="text-gray-600">Aspirin 500mg</p>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-gray-700">Next Appointment:</h5>
                                                <p className="text-gray-600">June 20, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Appointment History Section */}
                    <div className="mt-8 bg-white shadow-lg sm:rounded-lg border-l-4 border-teal-500">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center">
                                <h4 className="text-xl font-semibold text-teal-600">Your Appointment History</h4>
                                <button
                                    onClick={() => setIsAppointmentsOpen(!isAppointmentsOpen)}
                                    className="text-teal-600 hover:text-teal-800 transition-colors"
                                >
                                    {isAppointmentsOpen ? 'Hide' : 'Show'} Appointments
                                </button>
                            </div>
                            {isAppointmentsOpen && (
                                <div className="mt-4">
                                    <p className="text-gray-600">Review your past and upcoming appointments with your healthcare providers.</p>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex justify-between">
                                            <div>
                                                <h5 className="font-medium text-gray-700">Last Appointment:</h5>
                                                <p className="text-gray-600">May 12, 2024</p>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-gray-700">Doctor:</h5>
                                                <p className="text-gray-600">Dr. Jane Smith</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div>
                                                <h5 className="font-medium text-gray-700">Next Appointment:</h5>
                                                <p className="text-gray-600">June 25, 2024</p>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-gray-700">Specialty:</h5>
                                                <p className="text-gray-600">Cardiology</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Health Recommendations Section */}
                    <div className="mt-8 bg-white shadow-lg sm:rounded-lg border-l-4 border-purple-500">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center">
                                <h4 className="text-xl font-semibold text-purple-600">Health Recommendations</h4>
                                <button
                                    onClick={() => setIsRecommendationsOpen(!isRecommendationsOpen)}
                                    className="text-purple-600 hover:text-purple-800 transition-colors"
                                >
                                    {isRecommendationsOpen ? 'Hide' : 'Show'} Recommendations
                                </button>
                            </div>
                            {isRecommendationsOpen && (
                                <div className="mt-4">
                                    <p className="text-gray-600">Based on your medical records, we recommend the following to improve your health:</p>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex justify-between">
                                            <div>
                                                <h5 className="font-medium text-gray-700">Exercise:</h5>
                                                <p className="text-gray-600">30 minutes of cardio 3 times a week.</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div>
                                                <h5 className="font-medium text-gray-700">Diet:</h5>
                                                <p className="text-gray-600">Increase fiber intake and reduce sodium.</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div>
                                                <h5 className="font-medium text-gray-700">Sleep:</h5>
                                                <p className="text-gray-600">Aim for 7-8 hours of sleep every night.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
