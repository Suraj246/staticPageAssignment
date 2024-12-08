import BetterIncredientUI from "./components/betterIncredient/BetterIncredientUI";
import Image from 'next/image'
import HeroSection from "./components/heroSection/HeroSection";
import Features from "./components/heroSection/Features";
import OurBlog from "./components/blog/OurBlog";
import Footer from "./components/footer/Footer";

export default function Home() {


  return (
    <div className="">
      {/* Header */}
      <header className="p-1 pl-24 ">
        <Image src="/companyLogo.png" loading="lazy" alt="" width={100} height={100} />
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="relative">
          <HeroSection />
        </section>

        {/* Features Section */}
        <section className="absolute top-[1400px] md:top-[1000px] lg:top-[1050px]  w-full -translate-y-1/2 px-4 ">
          <Features />
        </section>

        {/* Spacer for Features */}
        <div className="h-[1000px] sm:h-[500px] md:h-96 lg:h-80 "></div>

        {/* Better Ingredients Section */}
        <section className="bg-white py-">
          <BetterIncredientUI />
          <OurBlog />
          <Footer />
        </section>
      </main>
    </div>

  );
}
