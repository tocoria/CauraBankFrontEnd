import Link from 'next/link'

import {AiOutlineArrowLeft} from "react-icons/ai"

export default function Header() {


    return (
        
        <header className='w-full flex flex-row justify-start items-center bg-gray text-gold h-16 fixed top-0'>
          
   
            <Link className="text-2xl mx-10" href='/'> <AiOutlineArrowLeft /> </Link>
            <h3 className='ml-12'>OVERVIEW</h3>




        </header>

        

    )








}