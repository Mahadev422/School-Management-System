import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const uid = false;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              School Management
            </h1>
            <p className="text-gray-600 text-sm">
              Welcome back, Admin! Here's what's happening today.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {/* <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div> */}

            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center space-x-3">
              {uid ? (
                <div>
                  <p className="font-medium">Admin User</p>
                  <p className="text-sm text-gray-500">School Administrator</p>
                </div>
              ) : (
                <Link to='/login' className="bg-linear-0 from-blue-400 to-blue-600 px-2 py-1 rounded font-bold">SignIn</Link>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        {/* <div className="mt-4 flex space-x-1 border-b">
          {[
            "overview",
            "students",
            "teachers",
            "finance",
            "academics",
            "reports",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize rounded-t-lg transition-colors ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
