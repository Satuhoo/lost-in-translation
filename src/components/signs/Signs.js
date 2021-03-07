export const SignsWithInput = ({translation}) => {
    return (
        <div>
            <p>{translation.input}</p>
            {translation.signs.map((sign, index) => <img key={index} src={sign} alt="img"/>)}
        </div>
    )
}

export const Signs = ({translation}) => {
    return (
        <div>
            {translation.map((sign, index) => <img key={index} src={sign} alt="img" />)}
        </div>
    )
}