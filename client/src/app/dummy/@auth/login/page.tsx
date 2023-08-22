import userInfo from "@/lib/userInfo";
import Redirect from "./redirect";


const Login = async () => {
    const { setLog } = userInfo()
    setLog(true);

    console.log("server");

    return (
        <div>
            <div>You&apos;re logged in.</div>
            <Redirect />
        </div>
    )
}

export default Login;