"use client"

import { useRouter } from "next/navigation"


const Redirect = () => {
    const router = useRouter();

    console.log("client");

    return (
        <div className=" bg-slate-600">
            <button onClick={() => {router.push("/dummy"); router.refresh()}}>Home Page</button>
        </div>
    )
}

export default Redirect;