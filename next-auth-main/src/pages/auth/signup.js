import Form from "@/components/auth/form";



export default function SignUp () {
   async function addUser(email,password){
    console.log(email,password);
    try{
      
    let resp = await fetch("/api/auth/user",{
        method:"POST",
        body: JSON.stringify({email,password}),
        headers:{
            "Content-type":"application/json"
        }
    
    });
    if(resp.ok){
        alert("sign up succses")
    }
    }catch(err){
  console.log(err)
    }
}
     
    return <Form signin={false} click={addUser} />
};
