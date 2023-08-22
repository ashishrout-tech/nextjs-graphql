"use client"

import { useRouter } from "next/navigation";

const AuthDefault = () => {

    const router = useRouter();


    return (
        <div className=" bg-slate-600 min-h-screen w-screen flex items-center" >
            <div className=" w-full flex justify-around">
                <div className=" bg-red-500 rounded-md">
                    <button onClick={() => {router.refresh(); router.push("/dummy/login")}} className=" text-lg w-20 h-10 border-b-red-500 border-b-4 bg-slate-50 active:translate-y-0 transition hover:-translate-y-1 rounded-md">Login</button>
                </div>
                <div className=" bg-red-500 rounded-md">
                    <button onClick={() => {router.refresh(); router.push("/dummy/signup")}} className=" text-lg w-20 h-10 border-b-red-500 border-b-4 bg-slate-50 active:translate-y-0 transition hover:-translate-y-1 rounded-md">Signup</button>
                </div>
            </div>
        </div>
    )
}
export default AuthDefault;