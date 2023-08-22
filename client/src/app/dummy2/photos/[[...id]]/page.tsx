import Image from "next/image";

const Photo = ({
    params
}: any) => {
    console.log(params);
    
    return (
        <div className=" flex flex-col items-center gap-y-5">
            <div>{params.id}</div>
            <Image height={100} width={100} alt={"loader"} src={"../../loader.svg"} />
        </div>
    )
}
export default Photo;