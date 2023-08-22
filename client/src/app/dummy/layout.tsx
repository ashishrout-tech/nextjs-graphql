import userInfo from "@/lib/userInfo";


const DummyLayout = (props: {
    children: React.ReactNode
    auth: React.ReactNode
    component1: React.ReactNode
}) => {

    const { log } = userInfo();

    return (
        <>
            {
                log ? (
                    props.children
                    // props.component1
                ): (
                    props.auth
                )
            }
        </>
    )
}

export default DummyLayout;