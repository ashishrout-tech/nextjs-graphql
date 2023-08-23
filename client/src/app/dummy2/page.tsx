import Link from "next/link";

const Dummy2 = () => {

    return (
        <div>
            Hi I am dummy 2
            <br/>
            <Link href={"/dummy2/photos/10"}> PHOTO</Link>
        </div>
    )
}
export default Dummy2;