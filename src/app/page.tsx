import Image from "next/image";
import { lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      <h1 className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>Hello World</h1>
      <Image
        src="/jackson.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
