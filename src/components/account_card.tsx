import { MdEuro } from 'react-icons/md'


export default function AccountCard({ amount }: { amount: number }) {

    return (

        <main className='flex justify-start items-center h-32'>

        <span className='text-2xl'> <MdEuro /></span>


        <div className='mx-12'>
            <h3 className='text-2xl font-bold my-2'>Tomy's account</h3>
            <h5 className='text-sm'>CAUR1290740712SAD94</h5>


        </div>



        <span className='text-3xl'>{amount}</span>

        </main>



    )






}