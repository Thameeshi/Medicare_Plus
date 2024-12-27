import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import AppointmentSection from './Partials/AppointmentSection'; // New component for managing appointments

export default function Edit({ mustVerifyEmail, status, appointments }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-4xl font-bold leading-tight text-white">
                    Manage Your Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12 bg-gradient-to-br from-blue-500 to-indigo-600">
                <div className="mx-auto max-w-7xl space-y-8 sm:px-6 lg:px-8">
                    {/* Profile Information Section */}
                    <div className="rounded-lg bg-white shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6">
                            <h3 className="text-2xl font-semibold text-white">Profile Information</h3>
                            <p className="text-sm text-white/80">
                                Update your personal information and email address.
                            </p>
                        </div>
                        <div className="p-6">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl mx-auto"
                            />
                        </div>
                    </div>

                    {/* Password Update Section */}
                    <div className="rounded-lg bg-white shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6">
                            <h3 className="text-2xl font-semibold text-white">Change Password</h3>
                            <p className="text-sm text-white/80">
                                Ensure your account is secure by updating your password regularly.
                            </p>
                        </div>
                        <div className="p-6">
                            <UpdatePasswordForm className="max-w-xl mx-auto" />
                        </div>
                    </div>

                    {/* Manage Appointments Section */}
                    <div className="rounded-lg bg-white shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6">
                            <h3 className="text-2xl font-semibold text-white">Manage Appointments</h3>
                            <p className="text-sm text-white/80">
                                View, update, or cancel your upcoming appointments.
                            </p>
                        </div>
                        <div className="p-6">
                            <AppointmentSection appointments={appointments} className="max-w-xl mx-auto" />
                        </div>
                    </div>

                    {/* Delete Account Section */}
                    <div className="rounded-lg bg-white shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6">
                            <h3 className="text-2xl font-semibold text-white">Delete Account</h3>
                            <p className="text-sm text-white/80">
                                Permanently remove your account and all associated data. Proceed with caution.
                            </p>
                        </div>
                        <div className="p-6">
                            <DeleteUserForm className="max-w-xl mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
