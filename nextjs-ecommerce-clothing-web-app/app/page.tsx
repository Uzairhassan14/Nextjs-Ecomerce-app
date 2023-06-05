import "./assets/css/style.css";
import Hero from './components/hero/page'
import Promotion from './components/promotions/page'
export default function Home() {
  return (
    <section>
      <Hero/>
      <section>
      <Promotion/>
      </section>
    </section>
  )
}
