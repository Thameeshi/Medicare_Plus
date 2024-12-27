import { useState } from 'react';
import axios from 'axios';

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {        
            // Assuming you will make a POST request to the backend
            const response = await axios.post('http://localhost:8000/api/appointments', formData);

            // Show success message
            setSuccessMessage('Your appointment has been booked successfully! We will get in touch with you soon.');

            // Optionally hide the message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } catch (error) {
            console.error('Error booking appointment:', error.response ? error.response.data : error.message);
            alert('There was an error booking your appointment. Please check the console for more details.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Book an Appointment</h2>

            {/* Success Message */}
            {successMessage && (
                <div className="bg-teal-600 text-white p-4 rounded-md mb-6 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 5.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>{successMessage}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3"
                        placeholder="Your Full Name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3"
                        placeholder="Your Phone Number"
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3"
                        placeholder="Any additional details..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Booking...' : 'Book Appointment'}
                </button>
            </form>
        </div>
    );
}
