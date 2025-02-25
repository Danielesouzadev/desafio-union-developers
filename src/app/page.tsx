import Image from "next/image";
import { Header } from "./components/Header";
import { SectionHero } from "./components/SectionHero";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <Image
        src="/logo.svg"
        width={150}
        height={150}
        alt="Logo Union Developers"
        className="mt-4"
      />
    </>
  );
}
