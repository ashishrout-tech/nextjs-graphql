import Image from "next/image";


const AuthLoading = () => {
    return (
        <div className=" flex justify-center">
            <Image className=" h-screen w-screen" width={0} height={0} src={"../loader.svg"} alt={"loader"}/>
        </div>
    )
}

export default AuthLoading;