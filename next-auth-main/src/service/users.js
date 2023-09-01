import { error } from "console";
import fs from "fs";
import { compare, hash } from "bcryptjs";
import path from "path";

const filePath = path.join(process.cwd(),"src", "data", "users.json");

export function getAll(){
    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}


export function getByEmail(email){
   const data = getAll();
   return data.find(p => p.email === email)
}


export async function getPassword(hashpassword, password){
    const isValid = await compare(password, hashpassword)
    return isValid
}

export async function save(email,password){
    const data = getAll();
    const found = getByEmail(email);
    if(found){
        throw new error("user is already exixst")
    }
    const hashpassword = await hash(password , 12);
    data.push({
        id : data.length +1,
        email,
        password:hashpassword,
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}


  export  async function update(email,password, changePass){
    const data = getAll();
    const found = getByEmail(email);
    console.log(found)
    if(!found){
        throw new error("user is not  exixst")
    }
      const valid = await getPassword(found.password, password)
    if(!valid){
        throw new error(" password is not match");

    }
    const hashpassword = await hash(changePass , 12);
    const index = data.findIndex( user => user.id === found.id );
    console.log(index)
      data.splice(index , 0, data[index].password = hashpassword)
      fs.writeFileSync(filePath, JSON.stringify(data))
}