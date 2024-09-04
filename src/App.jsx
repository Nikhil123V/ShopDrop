import Nav from "./components/Nav";
import { Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
  Subscribe,
  CustomerReviews,
  Footer

 } from "./sections";
const App=()=>(
  <main className="relative">
   <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
   <div className="absolute z-[0] w-[30%] h-[30%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      <PopularProducts/>
     {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" /> */}
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
     <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>

    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>

);
export default App