import { useRef } from "react"
import { getSession } from "next-auth/react";
export default function update (){
    const emailRef = useRef();
    const passRef = useRef();  
    const changePassRef = useRef();
    async function auth(e){
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const changePass = changePassRef.current.value;
    e.preventDefault();
    console.log( email, password, changePass)
    try{
      
        let resp = await fetch("/api/auth/update",{
            method:"PUT",
            body: JSON.stringify({email,password, changePass}),
            headers:{
                "Content-type":"application/json"
            }
        
        });
        if(resp.ok){
            alert("update password is succses")
        }
        }catch(err){
      console.log(err)
        }
   }




    return(
        <>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            change Password
          </h2>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={auth}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  ref={emailRef}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Preivious  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={passRef}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>






            
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Change  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password3"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={changePassRef}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              
            </div>
            <div>
              <button
              type="submit"
                
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               change Password
              </button>
            </div>
          </form>
        </div>
    
        
        </>
    )
}
export async function getServerSideProps({req}){
    const session =  await getSession({req});
    
   if(!session){
    return{
      redirect:{
         destination : "/auth/login",
         permanent : false,
      }
    }
   }
    return{
      props:{
        session,
      }
    }
}