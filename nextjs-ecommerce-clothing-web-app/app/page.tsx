import "./assets/css/style.css";
import Hero from "./components/hero/page";
import Promotion from "./components/promotions/page";
import Crousal from "./components/Crousal/page";
import Unique from "./components/uni-authantic/page";
import NewsLetter from "./components/newsLetter/page";
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
