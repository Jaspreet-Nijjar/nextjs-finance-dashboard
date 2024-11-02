import Link from 'next/link';

const ViewCoinsButton = () => {
  return (
    <Link
      href="/markets"
      className="border border-gray-300 rounded px-2 py-0.5 text-sm bg-black text-white hover:text-orange-500 transition-all"
    >
      View All Coins
    </Link>
  );
};

export default ViewCoinsButton;
