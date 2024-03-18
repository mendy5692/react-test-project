import Navbar from "../components/navbar/navbar";
import Hero from "../components/heroSection/heroSection";
import RegFrom from "../components/regform/regform";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <RegFrom />
      </main>
    </div>
  );
}
