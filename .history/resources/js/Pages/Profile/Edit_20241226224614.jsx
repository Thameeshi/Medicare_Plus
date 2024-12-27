import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-4xl font-bold leading-tight text-white">
                    Manage Your Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-white">Profile Settings</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <a href="#profile" className="text-lg text-teal-400 hover:text-teal-600">Profile Information</a>
                                </li>
                                <li>
                                    <a href="#password" className="text-lg text-teal-400 hover:text-teal-600">Change Password</a>
                                </li>
                                <li>
                                    <a href="#delete" className="text-lg text-red-500 hover:text-red-700">Delete Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Profile Information Section */}
                        <div id="profile" className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-teal-700 to-teal-800 p-6">
                                <h3 className="text-2xl font-semibold">Profile Information</h3>
                                <p className="text-sm opacity-80">Update your personal information and email address.</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="mx-auto"
                                />
                            </div>
                        </div>

                        {/* Password Update Section */}
                        <div id="password" className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6">
                                <h3 className="text-2xl font-semibold">Change Password</h3>
                                <p className="text-sm opacity-80">Ensure your account is secure by updating your password regularly.</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <UpdatePasswordForm className="mx-auto" />
                            </div>
                        </div>

                        {/* Delete Account Section */}
                        <div id="delete" className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
                                <h3 className="text-2xl font-semibold">Delete Account</h3>
                                <p className="text-sm opacity-80">Permanently remove your account and all associated data. Proceed with caution.</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <DeleteUserForm className="mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
