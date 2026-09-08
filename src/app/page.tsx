import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FindYourNextHome from "@/components/FindYourNextHome";
import ServicesScroller from "@/components/ServicesScroller";
import Testimonials from "@/components/Testimonials";
import ContactDock from "@/components/ContactDock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <Hero />
      </div>
      <main className="max-w-wrap mx-auto pb-8">
        <FindYourNextHome />
        <ServicesScroller />
        <Testimonials />
      </main>
      <ContactDock />
      <Footer />
    </>
  );
}
