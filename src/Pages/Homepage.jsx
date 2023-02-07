// import { useSelector } from "react-redux"


const Homepage = () => {
    // const userData = useSelector(state => state.userSlice)

    return (
        <>
            <div className="container">
                <h1>Hola Mundo</h1>
                <img src="data:image/jpeg;base64,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" alt="prueba" />
            </div>
        </>
    )
}

export default Homepage