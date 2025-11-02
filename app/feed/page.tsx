import { Calendar, MapPin, Clock, Users, User } from "lucide-react";
import Link from "next/link";

export default function Feed() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30">
            <main className="max-w-4xl mx-auto px-6 py-8 md:py-12">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 tracking-tight">
                        Event Feed
                    </h1>
                    <p className="text-lg text-gray-600">
                        Discover and join the latest events happening near you
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Event Card Template - Join Event */}
                    <div className="bg-white rounded-xl border border-amber-900/20 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="p-6 md:p-8">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        Event Title
                                    </h2>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <User className="w-4 h-4" />
                                        <Link 
                                            href="/profile/user-id"
                                            className="hover:text-amber-900 hover:underline transition-colors"
                                        >
                                            User Name
                                        </Link>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-lg text-xs font-semibold capitalize">
                                    Event Type
                                </span>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Description of the Event.
                                </p>
                                <button className="mt-2 text-amber-900 hover:text-amber-800 font-medium text-sm transition-colors">
                                    See more
                                </button>
                            </div>

                            {/* Event Details */}
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="p-2 bg-amber-100 rounded-lg">
                                        <Calendar className="w-5 h-5 text-amber-900" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Date</div>
                                        <div className="font-semibold">Date Value</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="p-2 bg-amber-100 rounded-lg">
                                        <Clock className="w-5 h-5 text-amber-900" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Time</div>
                                        <div className="font-semibold">Time Value</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="p-2 bg-amber-100 rounded-lg">
                                        <MapPin className="w-5 h-5 text-amber-900" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Location</div>
                                        <div className="font-semibold">Location Value</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="p-2 bg-amber-100 rounded-lg">
                                        <Users className="w-5 h-5 text-amber-900" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Max Attendees</div>
                                        <div className="font-semibold">Max Attendees Value</div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-4 border-t border-gray-100">
                                <button className="w-full px-6 py-2.5 bg-amber-900 text-white font-semibold rounded-lg hover:bg-amber-800 transition-all duration-200 shadow-md hover:shadow-lg">
                                    Join Event
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Event Card Template - Request to Join */}
                    <div className="bg-white rounded-xl border border-amber-900/20 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="p-6 md:p-8">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        Event Title
                                    </h2>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <User className="w-4 h-4" />
                                        <Link 
                                            href="/profile/user-id"
                                            className="hover:text-amber-900 hover:underline transition-colors"
                                        >
                                            User Name
                                        </Link>
                                        <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded text-xs font-medium">
                                            Invite Only
                                        </span>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-lg text-xs font-semibold capitalize">
                                    Event Type
                                </span>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Description of the Event.
                                </p>
                                <button className="mt-2 text-amber-900 hover:text-amber-800 font-medium text-sm transition-colors">
                                    See more
                                </button>
                            </div>

                            {/* Event Details */}
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="p-2 bg-amber-100 rounded-lg">
                                        <Calendar className="w-5 h-5 text-amber-900" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Date</div>
                                        <div className="font-semibold">Date Value</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="p-2 bg-amber-100 rounded-lg">
                                        <Clock className="w-5 h-5 text-amber-900" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Time</div>
                                        <div className="font-semibold">Time Value</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="p-2 bg-amber-100 rounded-lg">
                                        <MapPin className="w-5 h-5 text-amber-900" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Location</div>
                                        <div className="font-semibold">Location Value</div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-4 border-t border-gray-100">
                                <button className="w-full px-6 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border-2 border-amber-900/30 hover:border-amber-900 hover:bg-amber-50 transition-all duration-200">
                                    Request to Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
