import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header/>
      <div className="max-w-screen-xl w-full">
        <Hero/>
      </div>
    </div>
  );
}
