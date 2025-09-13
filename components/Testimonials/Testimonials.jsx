import WithImage from "./TestimonialWithImage"
import WithoutImage from "./TestimonialWithoutImage"

export default function Testimonials({ children, title, name, img }) {
  const Component = img ? WithImage : WithoutImage

  return <Component review={children} img={img} title={title} name={name} />
}
