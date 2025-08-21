import defaultIMG from "../assets/note-svgrepo-com.svg"


export default function Card({img = defaultIMG,title = "Default Card",children ="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobort"}){

    return(
        <>
            <section className="card">
                <div className="innerCardContainer">
                    {/* element for icon placement */}
                     <img src={img} alt={title} className="cardLogo" />
{/* ICON Ends-- needs to be shorten so can be a passed prop */}
                    <h4>{title}</h4>
                    {children}
                </div>
            </section>

        </>
    )
}