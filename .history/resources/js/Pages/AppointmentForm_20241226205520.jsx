import { useState } from 'react';
import axios from 'axios'; // Import axios to make HTTP requests

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8000/api/appointments', formData);
            console.log('Appointment submitted:', response.data);
            alert('Appointment booked successfully!');
        } catch (error) {
            // Improved error logging
            console.error('Error booking appointment:', error.response ? error.response.data : error.message);
            alert('There was an error booking your appointment. Please check the console for more details.');
        }
    };
    

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Book an Appointment</h2>
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
                >
                    Book Appointment
                </button>
            </form>
        </div>
    );
}
