import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-black">
                    Manage Your Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-8">
                <div className="mx-auto max-w-4xl space-y-8">
                    {/* Profile Information Section */}
                    <div id="profile" className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-black">Profile Information</h3>
                        <p className="text-sm text-gray-600">Update your personal information and email address.</p>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="mt-4"
                        />
                    </div>

                    {/* Password Update Section */}
                    <div id="password" className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-black">Change Password</h3>
                        <p className="text-sm text-gray-600">Ensure your account is secure by updating your password regularly.</p>
                        <UpdatePasswordForm className="mt-4" />
                    </div>

                    {/* Delete Account Section */}
                    <div id="delete" className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-black">Delete Account</h3>
                        <p className="text-sm text-gray-600">Permanently remove your account and all associated data. Proceed with caution.</p>
                        <DeleteUserForm className="mt-4" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
