"use client";
import Image from 'next/image'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";0
import { useRouter } from "next/navigation";


function Page() {
  const { user } = useAuthContext()
  const router = useRouter()
  
  React.useEffect(() => {
      if (user == null) router.push("/signin")
  }, [user])
  console.log(user)
  return (<h1>Only logged in users can view this page</h1>);
}

export default Page;