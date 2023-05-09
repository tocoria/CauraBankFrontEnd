
import { BiTransfer } from "react-icons/bi"
import { AiOutlineHome  } from "react-icons/ai"
import { BsFillGearFill } from "react-icons/bs"


export default function Footer() {



    return (


        <footer className="w-full flex flex-row justify-evenly items-center fixed bottom-0 h-16 bg-gray text-gold">

            <button className="text-2xl"><BiTransfer /></button>
            <button className="text-2xl"><AiOutlineHome /></button>
            <button className="text-2xl"><BsFillGearFill /></button>

        </footer>





    )







}