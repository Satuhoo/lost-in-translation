const Sign = ({sign, className}) => {
    return(
        <div>
            {sign !== '#' ? <img className={className} src={sign} alt="img"/>: <p className="whitespace"> </p>}
        </div>
    )
}

export default Sign;