"use client";
import React, { useState,useRef } from "react";
import { getAuth, signInAnonymously } from "firebase/auth";
import logo from "../../public/assets/full-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import QrScanner from "react-qr-scanner";

function Page() {
    const router = useRouter();
        const scannerRef = useRef(null);
       
        const handleScan = data => {
           if (data == "https://harmonix.vercel.app/") {
             console.log(data);
             const auth = getAuth();
             signInAnonymously(auth)
                 .then(() => {
                        router.push("/");
                 })
                 .catch((error) => {
                     console.error("Anonymous sign-in error:", error);
                 });
           }

        };  
        const handleError = err => {
           console.error(err);
        };

    return (
        <div className="font-mont w-full flex flex-col gap-10 justify-center mx-auto items-center " children="hide-footer">
            <h1 className="text-4xl font-bold text-white ">Scan the QR Code to Access the App</h1>
            <div>
                <QrScanner
                facingMode="environment"
                ref={scannerRef}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            </div>
            <Image src={logo} height={220} width={220} alt="aa" />
        </div>
    );
}
export default Page;
