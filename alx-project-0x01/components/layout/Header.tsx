import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-10">
        <h3 className="font-bold text-2xl">
          <Link href="/">Daily Contents</Link>
        </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="./">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
