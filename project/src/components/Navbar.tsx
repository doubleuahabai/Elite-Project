import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Elite</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}