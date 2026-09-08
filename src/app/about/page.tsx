import type { Metadata } from "next";
import Nav from "@/components/Nav";
import AboutStory from "@/components/AboutStory";
import AboutMetrics from "@/components/AboutMetrics";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — M&H Developments",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="max-w-wrap mx-auto">
        <AboutStory />
        <AboutMetrics />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
