use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

public function boot()
{
    Inertia::share([
        'auth' => function () {
            return [
                'user' => Auth::user(),
            ];
        },
    ]);
}
