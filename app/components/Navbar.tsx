import { Home, Bell, User } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full px-6 py-5 bg-white/80 backdrop-blur-md border-b border-amber-900/20 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a 
                    href="/" 
                    className="text-2xl font-bold text-gray-900 tracking-tight hover:text-amber-900 transition-colors"
                >
                    Hangout
                </a>
                <div className="flex items-center gap-3">
                    <a
                        href="/"
                        className="p-2.5 text-gray-700 hover:text-amber-900 hover:bg-amber-50 rounded-lg transition-all duration-200"
                        title="Home"
                    >
                        <Home className="w-6 h-6" />
                    </a>
                    <a
                        href="/notifications"
                        className="p-2.5 text-gray-700 hover:text-amber-900 hover:bg-amber-50 rounded-lg transition-all duration-200 relative"
                        title="Notifications"
                    >
                        <Bell className="w-6 h-6" />
                    </a>
                    <a
                        href="/profile"
                        className="p-2.5 text-gray-700 hover:text-amber-900 hover:bg-amber-50 rounded-lg transition-all duration-200"
                        title="Profile"
                    >
                        <User className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

