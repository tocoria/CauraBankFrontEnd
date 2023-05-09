import Header from "../../components/header"
import AccountCard from "@/components/account_card"
import Footer from "../../components/footer"


export default function Overview() {


  return (
  
    <>
  <Header />

    <div className="flex flex-col justify-start items-center border-b-2 border-gold my-14">

        <h2 className="w-11/12 text-left text-2xl text-gold mt-5">ACCOUNTS</h2>

        <section className="divide-y divide-gold w-11/12">
        <AccountCard />
        <AccountCard />
        
      
        </section>


    </div>


    
  
  
    <Footer />

  










  </>
  
  
  )




}
