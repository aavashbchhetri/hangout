export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30">
            {/* Navigation Header */}
            <nav className="w-full px-6 py-5 bg-white/80 backdrop-blur-md border-b border-amber-900/20 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900 tracking-tight">
                        Hangout
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="/login"
                            className="px-5 py-2.5 text-gray-700 font-medium hover:text-amber-900 transition-all duration-200 rounded-lg hover:bg-amber-50"
                        >
                            Login
                        </a>
                        <a
                            href="/register"
                            className="px-6 py-2.5 bg-amber-900 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-amber-800 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-6 py-20 md:py-24">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
                        Plan Your Next Hangout
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Create events, invite friends, or request to join others.{" "}
                        <span className="relative inline-block px-2 py-1 font-bold text-gray-900">
                            <span className="absolute inset-0 bg-yellow-300/80 rounded-sm origin-left animate-[highlight_2s_ease-out_forwards]"></span>
                            <span className="relative">Making plans has never been easier.</span>
                        </span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/register"
                            className="px-8 py-3.5 bg-amber-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-amber-800 transition-all duration-200 text-lg hover:-translate-y-0.5"
                        >
                            Get Started
                        </a>
                        <a
                            href="/login"
                            className="px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-lg border-2 border-amber-900/30 hover:border-amber-900 hover:bg-amber-50 transition-all duration-200 text-lg shadow-sm hover:shadow-md"
                        >
                            Sign In
                        </a>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-24">
                    <div className="bg-white p-8 rounded-xl border border-amber-900/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-5 border border-amber-900/20 group-hover:border-amber-900/40 transition-colors shadow-sm">
                            <svg className="w-7 h-7 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Create Events</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Plan your hangouts with ease. Set dates, locations, and details in seconds.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-amber-900/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-5 border border-amber-900/20 group-hover:border-amber-900/40 transition-colors shadow-sm">
                            <svg className="w-7 h-7 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Invite Friends</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Send invitations directly to friends or make events open for others to discover.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-amber-900/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-5 border border-amber-900/20 group-hover:border-amber-900/40 transition-colors shadow-sm">
                            <svg className="w-7 h-7 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Join Events</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Request to join exciting events created by others in your community.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-24 text-center bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-12 md:p-16 text-white shadow-2xl border border-amber-900/50">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ready to Start Hanging Out?</h2>
                    <p className="text-lg md:text-xl mb-10 opacity-95 max-w-2xl mx-auto">
                        Join thousands of users creating memorable experiences together.
                    </p>
                    <a
                        href="/register"
                        className="inline-block px-10 py-4 bg-white text-amber-900 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg"
                    >
                        Create Your Account
                    </a>
                </div>
            </main>
        </div>
    );
}