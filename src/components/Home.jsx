import React from 'react'

const Home = () => {
  return (
    <div className='h-auto w-full pt-16'>
      <div className="min-h-screen flex flex-col justify-between bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-4">Stay Ahead with the Latest News</h1>
            <p className="text-xl font-light mb-8">
              Get the most accurate and up-to-date news from all over the world.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-200 transition">
              Explore Now
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-48"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#f3f4f6"
                fillOpacity="1"
                d="M0,224L80,208C160,192,320,160,480,170.7C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Spacer Section */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Explore Our Categories</h2>
            <p className="text-lg text-gray-600 mb-8">
              Dive into various topics, from breaking news to in-depth analysis, all at your fingertips.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">World News</h3>
                <p className="text-gray-600">Stay informed about events happening around the globe.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Technology</h3>
                <p className="text-gray-600">Discover the latest advancements and trends in tech.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sports</h3>
                <p className="text-gray-600">Catch up with scores, highlights, and exclusive sports analysis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <p className="text-xl font-semibold text-white">Follow Us</p>
              <div className="flex justify-center mt-4 space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
            <p>&copy; {new Date().getFullYear()} News App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home