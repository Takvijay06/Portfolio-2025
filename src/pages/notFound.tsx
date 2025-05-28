import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-gray-700 opacity-50 absolute -top-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          404
        </h1>
        <h2 className="text-5xl font-bold relative">Page Not Found</h2>
      </div>

      <p className="mt-4 text-lg text-gray-400">
        Oops! The page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
