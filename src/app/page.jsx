import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MiddleSection1 from "@/components/MiddleSection1";
import MiddleSection2 from "@/components/MiddleSection2";


export default function Home() {
  return (
    <div>
     <Hero/>
     <MiddleSection1/>
     <MiddleSection2/>
     <Faqs/>
     <Footer/>

    </div>
  );
}
