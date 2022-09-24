import Image from "next/image";
import Container from "./style";

/*
    Types:
        - Horizontal
        - Vertical

    props:
        - button:
            - text
            - onClick
        - title
        - image (optional)
*/

/* let props = {
  horizontal: true, // boolean
  vertical: false, // boolean
  button: {
    text: "", // string
    onClick: () => null, // function
  },
  title: "", // string
  image: "", // string (URL/path)

  background: '', // string (colors)
  color: '' // string (colors)
}; */

const Card = (props) => {
  const { button, title, image, horizontal } = props;

  return (
    <Container {...props} className="universal-card">
      <button onClick={button.onClick}>{button.text}</button>
      <h3>{title}</h3>
      {horizontal && <div className="trashhold" />}
      {image && (
        <div className="image-cont">
          <Image
            priority={true}
            src={image}
            alt={image}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </Container>
  );
};

export default Card;
