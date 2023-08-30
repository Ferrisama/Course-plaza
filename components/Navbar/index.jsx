import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-navbar h-16">
      <div className="pl-10 pr-10 mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="flex-shrink-0 text-3xl font-bold text-gray-900 cursor-pointer">
            Course<span className="text-cyan">Plaza</span>
          </a>
        </Link>
        <div className="flex-grow">
          <ul className="flex items-center justify-center space-x-10 text-lg">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Courses
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Assignments
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Accessories
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Classroom
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Live
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <Link href="/login" legacyBehavior>
            <a className="py-2 px-4 bg-blue-500 text-white rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-600 hover:cursor-pointer">
              Login
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
