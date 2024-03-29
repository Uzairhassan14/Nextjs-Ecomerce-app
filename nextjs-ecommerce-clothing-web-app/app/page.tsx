import "./assets/css/style.css";
import Hero from "./components/hero";
import Promotion from "./components/promotions";
import Crousal from "./components/Crousal";
import Unique from "./components/uni-authantic";
import NewsLetter from "./components/newsLetter";
export default function Home() {
  return (
    <section className="mt-10">
      <Hero />
      <section className="mt-28">
        <Promotion />
      </section>
      <section className="mt-28">
        <Crousal />
      </section>
      <section className="mt-28">
        <Unique />
      </section>
      <section className="mt-28">
        <NewsLetter />
      </section>
    </section>
  );
}
