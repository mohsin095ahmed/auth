import Form from "@/components/auth/form";

import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { render } from "react-dom";



export default function SignIn () {
    const router = useRouter();
    //console.log(router)
    const { status } = useSession()   
    if(status === "authenticated"){
        router.replace("/profile")
    }
  
async function addUser(email,password){
        const resp = await signIn("credentials" ,{redirect: false,  email, password});
       // console.log(resp);
              
              
          }

    return <Form signin={true}  click={addUser}/>
};

