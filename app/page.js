import Footer from "@/components/footer/Footer";
import MenCollection from "@/components/home/collection/MenCollection";
import Hero from "@/components/home/hero/Hero";
import Navbar from "@/components/navbar/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MenCollection  />
      <Footer />
    </div>
  );
}
