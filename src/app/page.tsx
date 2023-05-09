import Link from 'next/link'

export default function Home() {
  return (
    
    <main className='bg-gray h-screen flex flex-col items-center justify-evenly'>

      <div className='h-5/6 flex flex-col items-center justify-evenly'>
        <h1 className='text-6xl lg:text-8xl font-bold text-gold mt-0' >CAURABANK</h1>
        <h2 className='text-2xl lg:text-3xl text-gold text-center'>The only bank that works FOR you. Operate using our app and get gift points!</h2>

          <section className='h-1/5 flex w-4/6 flex-col justify-center items-center py-0 lg:flex-row lg:justify-evenly lg:w-5/6'>
            
            <Link href='/register' className='text-3xl bg-white text-gray rounded-full h-3/6 w-full max-w-md my-4 flex items-center justify-center hover:bg-gold hover:text-white lg:w-1/3'>
              
              Get started
              
            </Link>
            
            
              
              <Link href='/login' className='text-3xl text-gold border border-gold rounded-full h-3/6 w-full max-w-md flex items-center justify-center hover:border-white hover:text-white lg:w-1/3'>Log In</Link>
          </section>

      </div>

    </main>
  )
}


// className='text-3xl text-gold border border-gold rounded-full h-3/6 w-full'