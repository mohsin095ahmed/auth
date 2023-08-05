// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAll, save } from "../../../service/users"

export default function handler(req, res) {
  if(req.method !== "POST"){
    
    return res.status(404).send()
  
  }
    const{ email, password} = req.body;
    try{
      save(email,password);
      res.status(201).send();
    } catch(err){
      res.status(400).json({measage: err})
    }
     
  
}
