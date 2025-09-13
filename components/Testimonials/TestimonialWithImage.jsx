export default function WithImage({review, title, name, img}){
    return(
        <div className="WithImage">
            <img src={img} alt="Portrait" className="testimonialImg"/>
            <div>
                {review}
                <span>
                    <p>{name}</p>
                    <p>{title}</p>
                </span>
            </div>
        </div>
    )
}