import Header from "../../components/header"
import AccountCard from "@/components/account_card"
import Footer from "../../components/footer"

import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart } from "react-icons/ai"


export default function Overview() {


  return (
  
    <>
  <Header />

    <div className="flex flex-col justify-start items-center border-b-2 border-gold mt-14">

        <h2 className="w-11/12 text-left text-xl text-gold mt-5">ACCOUNTS</h2>

        <section className="divide-y divide-gold w-11/12">
        <AccountCard amount={10000} />
        <AccountCard amount={200}/>
        
      
        </section>


    </div>

    <div className="flex flex-col justify-start items-center mb-14 border-b-2 border-gold">

        <h2 className="w-11/12 text-left text-xl text-gold mt-5">PROFILE</h2>

<section className="divide-y divide-gold w-11/12">
          <article className="flex justify-start items-center h-32">
            
            
              <span className='text-2xl'><CgProfile /></span>

              <div className="mx-12">
                <h3 className='text-2xl font-bold my-2'>Username</h3>
                <h5 className='text-sm'>Tocoria89</h5>


              </div>

            
        
          </article>

          <article className="flex justify-start items-center h-32">
            
            
            <span className='text-2xl'><AiOutlineShoppingCart /></span>

            <div className="mx-12">
              <h3 className='text-2xl font-bold my-2'>Banking Points</h3>


            </div>

            <span className="text-3xl">10.000</span>

          
      
        </article>

</section>

    </div>



    
  
  
    <Footer />

  










  </>
  
  
  )




}
