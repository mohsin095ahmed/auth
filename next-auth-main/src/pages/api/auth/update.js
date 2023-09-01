import { update } from "@/service/users";

export default function handler (req, res){
    if(req.method !== "PUT"){
        return res.status(404).send()
    }
    console.log(req.body)

    const{ email, password, changePass} = req.body;
    try{
      update(email,password, changePass);
      res.status(201).send();
    } catch(err){
      res.status(400).json({measage: err})
    }
  
}