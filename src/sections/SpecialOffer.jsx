import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const specialOffer = () => {
  return (
    <section className="flex justify-wrap item-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full rounded-3xl" />
      </div>
      <div className="flex flex-1 flex-col">
      
  

      <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg '>
      
      
        <br />
        <span className='text-coral-red '>Special</span> 
      Offer
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>
        Embark on a shopping journey that redefines you exprence with unbeatable delas.From premier selections to increadible savings, we offer unparalled value that sets us apart.
      </p>
      <p className="mt-6 lg:max-w-lg info-text">Navaigate a realm of possiblilits designed to fulfill your unique desire,suppasing the lofties expections.Your journey with us is nothing short of exceptional.</p>
 <div className="mt-11  flex flex-wrap gap-4 rounded-full">
      <Button  label='Shop now'
      iconURL={arrowRight} />
      <Button label='Learn more'
      backgroundColor='bg-white'
      borderColor='border-slate-gray'
      textColor='text-slate-gray' 
      />

      </div>

    </div>
    </section>
  )
}

export default specialOffer