export default function CreateEvent() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30">

            <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                <div className="mb-8 flex flex-col items-center justify-center">
                    <h1 className="flex text-4xl md:text-5xl font-bold mb-3 text-gray-900 tracking-tight">
                        Create New Event
                    </h1>
                    <p className="flex text-lg text-gray-600">
                        Plan your hangout and invite friends to join.
                    </p>
                </div>

                <form method = "POST" action = "/api/create-event" className="bg-white rounded-xl border border-amber-900/20 shadow-lg p-8 md:p-10 space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
                            Event Title *
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            placeholder="e.g., Hiking Trip, Football Game, Movie Screening"
                            className="w-full px-4 py-3 border-2 border-amber-900/30 rounded-lg focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/20 transition-all text-gray-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                            Description *
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            required
                            placeholder="Description of the event"
                            className="w-full px-4 py-3 border-2 border-amber-900/30 rounded-lg focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/20 transition-all text-gray-900 resize-none"
                        ></textarea>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                                Date *
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                                className="w-full px-4 py-3 border-2 border-amber-900/30 rounded-lg focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/20 transition-all text-gray-900"
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                                Time *
                            </label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                required
                                className="w-full px-4 py-3 border-2 border-amber-900/30 rounded-lg focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/20 transition-all text-gray-900"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-semibold text-gray-900 mb-2">
                            Location *
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            required
                            placeholder="e.g., Coffee Shop, Restaurant, Local Park"
                            className="w-full px-4 py-3 border-2 border-amber-900/30 rounded-lg focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/20 transition-all text-gray-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="eventType" className="block text-sm font-semibold text-gray-900 mb-2">
                            Event Type
                        </label>
                        <select
                            id="eventType"
                            name="eventType"
                            className="w-full px-4 py-3 border-2 border-amber-900/30 rounded-lg focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/20 transition-all text-gray-900 bg-white"
                        >
                            <option value="">Select event type</option>
                            <option value="social">Social Gathering</option>
                            <option value="sports">Sports & Fitness</option>
                            <option value="food">Food & Dining</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="outdoor">Outdoor Activity</option>
                            <option value="online">Online Event</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="maxAttendees" className="block text-sm font-semibold text-gray-900 mb-2">
                            Maximum Attendees
                        </label>
                        <input
                            type="number"
                            id="maxAttendees"
                            name="maxAttendees"
                            min="1"
                            placeholder="Leave empty for unlimited"
                            className="w-full px-4 py-3 border-2 border-amber-900/30 rounded-lg focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/20 transition-all text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                            Privacy Setting
                        </label>
                        <div className="space-y-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="privacy"
                                    value="public"
                                    defaultChecked
                                    className="w-4 h-4 text-amber-900 border-amber-900/30 focus:ring-amber-900"
                                />
                                <span className="ml-3 text-gray-700">Public - Anyone can request to join</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="privacy"
                                    value="invite-only"
                                    className="w-4 h-4 text-amber-900 border-amber-900/30 focus:ring-amber-900"
                                />
                                <span className="ml-3 text-gray-700">Invite Only - Only invited users can join</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            type="submit"
                            className="flex-1 px-8 py-3.5 bg-amber-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-amber-800 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Create Event
                        </button>
                        <a
                            href="/dashboard"
                            className="flex-1 px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-lg border-2 border-amber-900/30 hover:border-amber-900 hover:bg-amber-50 transition-all duration-200 text-center shadow-sm hover:shadow-md"
                        >
                            Cancel
                        </a>
                    </div>
                </form>
            </main>
        </div>
    );
}

