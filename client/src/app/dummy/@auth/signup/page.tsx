const Signup = async() => {

    try {
        await new Promise(resolve => setTimeout(resolve, 3000))
        
        throw new Error("You're not authorized. Try again")
    } catch (error) {
        throw new Error((error as Error).message)
    }

    return (
        <div>
            I will do Signup for dummy.
        </div>
    )
}

export default Signup;