import gridDot from "../assets/gridDot.png"
import workcationLogo from "../assets/workcationLogo.png"

export default function WithOutImage({ review, title, name }) {
  return (
    <div className="WithOutImage">
      <img src={gridDot} alt="dots" className="grid-dot" />

      <div className="withoutImageContent">
        <div className="content-wrapper">
          <img src={workcationLogo} alt="workcation logo" />
          {review}
        </div>
        <span>
          <p>
            {name} <span className="slash">/</span>{" "}
            <span className="titlewithoutimg">{title}</span>
          </p>
        </span>
      </div>
    </div>
  )
}
