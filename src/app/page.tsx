import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header/>
      <div className="flex justify-center items-center">
        <div className="md:max-w-screen-2xl md:px-20 px-10 w-full md:mt-20 mt-10 pb-20">
          <Hero/>
          <Container/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
