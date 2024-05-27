const Navbarv2 = () => {
  return (
    <nav className="bg-gray-800 text-white w-full fixed top-0 z-10">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>


                </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                    <a href="#" className="text-white text-lg font-semibold">Logo</a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

  );
};

export default Navbarv2;
