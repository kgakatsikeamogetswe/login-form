'use client'

import Image from "next/image";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {

  const data = useSession()
  const router = useRouter()

  // if(session){
  //   router.replace('/homepage')
  //   return null
  // }


  return (
    <>
    
    <h1>Login</h1>

    <h2>Login with google</h2>

    <button onClick={()=>{
      signIn("Google")
    }}><IoLogoGooglePlaystore/>Login</button>

    </>
  );
}
