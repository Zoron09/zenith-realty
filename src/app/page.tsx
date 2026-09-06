import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import ExclusiveCollection from "@/components/ExclusiveCollection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-wrap mx-auto px-6 md:px-12 py-8 space-y-24">
        <Hero />
        <PropertyGrid />
        <ExclusiveCollection />
      </main>
      <Footer />
    </>
  );
}
