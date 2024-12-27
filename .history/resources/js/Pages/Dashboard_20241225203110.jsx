import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const { auth } = usePage().props; // Access the authenticated user data
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
                                    <p className="text-gray-600">{auth.user.name}</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Email:</h5>
                                    <p className="text-gray-600">{auth.user.email}</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Date of Birth:</h5>
                                    <p className="text-gray-600">{auth.user.date_of_birth || 'Not Provided'}</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Phone:</h5>
                                    <p className="text-gray-600">{auth.user.phone || 'Not Provided'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other sections remain unchanged */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
