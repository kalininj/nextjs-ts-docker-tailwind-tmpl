import Link from 'next/link';

const Navbar = () => (
  <div>
    <ul className="flex flex-wrap text-xl">
      <li className="mr-6">
        <Link
          href="/"
          className="border-none text-gray-700 hover:text-gray-900"
        >
          Home
        </Link>
      </li>
      <li className="mr-6">
        <Link
          href="/about/"
          className="border-none text-gray-700 hover:text-gray-900"
        >
          About
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar
