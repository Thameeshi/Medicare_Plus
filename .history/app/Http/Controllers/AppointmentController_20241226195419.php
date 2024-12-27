namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    // Method to handle POST request (store appointment)
    public function store(Request $request)
    {
        // Validate request data
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'date' => 'required|date',
            'time' => 'required|string',
            'message' => 'nullable|string',
        ]);

        // Create a new appointment record in the database
        $appointment = Appointment::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'date' => $request->date,
            'time' => $request->time,
            'message' => $request->message,
        ]);

        // Return a success response
        return response()->json([
            'message' => 'Appointment booked successfully!',
            'appointment' => $appointment
        ]);
    }

    // Method to handle GET request (fetch all appointments)
    public function index()
    {
        // Get all appointments from the database
        $appointments = Appointment::all();

        // Return the appointments as a JSON response
        return response()->json($appointments);
    }
}
