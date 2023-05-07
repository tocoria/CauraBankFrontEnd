export default function Login() {
    return(
    
        <div className="bg-gray h-screen w-screen flex items-center justify-center ">
        <form className="h-5/6 w-full max-w-md lg:w-3/6 px-5">
        
          
  
          <article className="">
            <label className="block text-lg text-gold mt-20" for="username">
              Username
            </label>
            <input
              className="w-full text-lg bg-transparent border-0 border-b-2 border-gold pb-2 focus:outline-0 caret-white text-white"
              type="text"
              id="username"
              name="username"
            />
          </article>
  
          <article className="my-20">
            <label className="block text-lg text-gold mt-14" for="password">
              Password
            </label>
            <input
              className="w-full text-lg bg-transparent border-0 border-b-2 border-gold pb-2 focus:outline-0 caret-white text-white"
              type="password"
              id="password"
              name="password"
            />
          </article>
  
          <article className="flex justify-center m-10 h-auto max-w-md">
            <button
              type="submit"
              className="text-2xl bg-white h-10 m-8 w-full text-gray rounded-full hover:bg-gold hover:text-white"
            >
              Log In
            </button>
          </article>
        </form>
      </div>
    
    
    
    
    
    )
    
}