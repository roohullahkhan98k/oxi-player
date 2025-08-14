import Hero from "../components/Hero";
import RightNotice from "../components/RightNotice";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <main
      className="min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg3.jpg')",
      }}
    >
      <div className="mx-auto max-w-7xl h-full flex p-[2rem]">
        <div className="flex-1 flex items-start justify-center pt-60 lg:items-start lg:justify-start lg:pt-60">
          <Hero />
        </div>
      </div>
      <RightNotice />
      <ChatWidget />
    </main>
  );
}
