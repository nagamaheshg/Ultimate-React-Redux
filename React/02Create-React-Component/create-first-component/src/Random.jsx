const Random = () => {

    const number = Math.floor(Math.random() * 10 + 1)

    return(
        <>
            <h3 style={{'background-color':'#ffd280'}}>Random Number is: {number}</h3>
        </>
    )
}

export default Random