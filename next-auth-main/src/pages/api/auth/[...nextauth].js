import { getByEmail, getPassword } from "@/service/users";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  session :{
     jwt:true,
  },
  providers: [
    CredentialsProvider({
       async authorize({email, password}){
         const user = getByEmail(email);
         if(!user){
            throw new console.error("user is not found");
         } 
        const isValid = await getPassword(user.password, password);

        if(!isValid){
            throw new error("incorect pasword")
        }
         return{email}
      }
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)