import Hero from "../components/Hero";
import RightNotice from "../components/RightNotice";
import ChatWidget from "../components/ChatWidget";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-80px)]">
      <Image
        src="/bg3.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="relative z-10 mx-auto max-w-7xl h-full flex p-[2rem]">
        <div className="flex-1 flex items-start justify-center pt-60 lg:items-start lg:justify-start lg:pt-60">
          <Hero />
        </div>
      </div>
      <RightNotice />
      <ChatWidget />
    </main>
  );
}
