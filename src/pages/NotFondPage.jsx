import Herosection from "../components/HeroSection/Herosection";

export default function NotFondPage() {
  return (
    <div className="h-dvh relative">
      <Herosection h="h-full" showSearch={""} />
      
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold z-20">
        Error 404 | Not Found
      </h1>
    </div>
  );
}