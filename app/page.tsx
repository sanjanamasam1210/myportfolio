import Image from "next/image";
import Link from "next/link";
import Loading from './loading';


export default function Home() {
  return (
    <div  className="relative h-screen w-full overflow-hidden">
      <Loading />
      <Link href="/fonts">
        <button className="px-4 py-2 text-white bg-black rounded-lg">
          Go to Fonts Page
        </button>
      </Link>
    </div>
  );
}
