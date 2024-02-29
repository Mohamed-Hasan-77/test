import "./ServBoxStyleAR.scss"


// eslint-disable-next-line react/prop-types
export default function ServBox({theImg, theTitle, description}) {

    return (

    <div className="box w-full md:w-1/2 lg:w-1/3 px-3 mt-10">
    <div className="innerBox rounded-lg">
        <div className="img flex justify-center items-center">
            <img className="" src={theImg} alt="img" />
        </div>

        <h3 className="textMainColor text-2xl my-5 "> {theTitle} </h3>

        <p>
            {description}
        </p>
    </div>
    </div>
    )
}
