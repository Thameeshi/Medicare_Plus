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

            <div className="py-12 bg-gradient-to-br from-blue-500 to-indigo-600">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Profile Settings</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <a href="#profile" className="text-lg text-indigo-600 hover:text-indigo-800">Profile Information</a>
                                </li>
                                <li>
                                    <a href="#password" className="text-lg text-indigo-600 hover:text-indigo-800">Change Password</a>
                                </li>
                                <li>
                                    <a href="#delete" className="text-lg text-red-600 hover:text-red-800">Delete Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Profile Information Section */}
                        <div id="profile" className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6">
                                <h3 className="text-2xl font-semibold text-white">Profile Information</h3>
                                <p className="text-sm text-white/80">Update your personal information and email address.</p>
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
                        <div id="password" className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6">
                                <h3 className="text-2xl font-semibold text-white">Change Password</h3>
                                <p className="text-sm text-white/80">Ensure your account is secure by updating your password regularly.</p>
                            </div>
                            <div className="p-6">
                                <UpdatePasswordForm className="max-w-xl mx-auto" />
                            </div>
                        </div>

                        {/* Delete Account Section */}
                        <div id="delete" className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6">
                                <h3 className="text-2xl font-semibold text-white">Delete Account</h3>
                                <p className="text-sm text-white/80">Permanently remove your account and all associated data. Proceed with caution.</p>
                            </div>
                            <div className="p-6">
                                <DeleteUserForm className="max-w-xl mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
