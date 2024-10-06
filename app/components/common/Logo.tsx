import Link from 'next/link';
import { AiOutlineStock } from 'react-icons/ai';

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col items-center gap-6 mt-12">
      <AiOutlineStock size={45} className="bg-orange-500 rounded-full p-2" />
      <div className="hidden md:block">
        <h1 className="mt-4 text-3xl text-center">
          Quick<span className="text-orange-500">Track</span>
        </h1>
        <p className="text-gray-400 text-sm text-center">Finance Manager</p>
      </div>
    </Link>
  );
};

export default Logo;
