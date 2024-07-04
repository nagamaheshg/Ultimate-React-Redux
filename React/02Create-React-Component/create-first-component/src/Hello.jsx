const Hello = () => {
    
    const name = 'Naga Mahesh Gatta'

    const textContent = () => {

        return 'This is Future React Course'
    }

    return(
        <>
            <h3>Hello {name}</h3>
            <h3>{textContent()}</h3>
        </>
    )
}

export default Hello