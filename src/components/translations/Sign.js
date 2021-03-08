//Checks if the path to image is not empty and returns sign image. 
//If path is empty, returns empty space between signs.
const Sign = ({sign, className}) => {
    return(
        <div>
            {sign !== '#' ? <img className={className} src={sign} alt="img"/>: <p className="whitespace"> </p>}
        </div>
    )
}

export default Sign;