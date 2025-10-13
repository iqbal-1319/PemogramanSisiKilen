import "./App.css";

function App() {
  const courses = [
    { title: "System Administration and IT Infrastructure Services" },
    { title: "Operating Systems Becoming a Power User" },
    { title: "The Bits and Bytes of Computer Networking" },
    { title: "Technical Support Fundamentals" },
    { title: "How to Succeed at: Writing Applications" },
    { title: "Medicine Administration for Carers" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
          >
            {/* Image */}
            <img
              src="https://placehold.co/300x200"
              alt={`${course.title} thumbnail`}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="bg-rose-100 p-4 flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-semibold leading-snug">
                {course.title}
              </h3>

              {/* Info card */}
              <div className="mt-4 rounded-lg p-3 bg-white/80 ring-1 ring-rose-100">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>👥 123 users</span>
                  <span>⏱ 60 min</span>
                </div>

                {/* Author */}
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src="https://www.placehold.co/50x50"
                    alt="Author avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Author's Name</p>
                    <p className="text-xs text-gray-500">Designer</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <div className="bg-white py-2 px-3 rounded shadow-sm font-semibold text-gray-700">
                  $123
                </div>
                <button className="bg-red-600 hover:bg-red-700 active:bg-red-800 transition-colors text-white px-4 py-2 rounded text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
