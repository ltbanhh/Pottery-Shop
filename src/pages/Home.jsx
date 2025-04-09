import {Link} from 'react-router-dom';
export function Home() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Home</h2>
                <p className="text-gray-700 mb-4">Welcome to the home page!</p>
                <Link to='/login' className="text-blue-500 hover:underline">
                Go to Login
                </Link>
            </div>
        </div>
    )
}