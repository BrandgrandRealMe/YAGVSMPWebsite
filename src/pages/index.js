import HeadMeta from "@/components/headMeta";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/homepage/header";
import About from "@/components/homepage/about";
import Buttons from "@/components/homepage/buttons";

export default function Home() {
  return (
    <>
      <HeadMeta />
      <Navbar />
      <Header />
      <About />
      <Buttons />
    </>
  );
}