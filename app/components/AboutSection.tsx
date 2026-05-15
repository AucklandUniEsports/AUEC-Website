// import StandardButton from "./StandardButton";

// type AboutSectionProps = {
//     image: string,
//     text: string,
//     button: React.ReactNode,
//     buttonTitle: string,
//     buttonColor: string,
//     buttonLink: string,
// }

// export default function AboutSection({image,text,button}: AboutSectionProps) {
//     return (
//         <div className="about-bottom-section">
//             <img className="about-img" src={image} alt="about" />
//             <p className="standard-text">{text}</p>
//             <StandardButton        
//                 title={buttonTitle}
//                 color={buttonColor}
//                 link={buttonLink}/>
//         </div>
//     )
// }

import StandardButton from "./StandardButton";

type AboutSectionProps = {
    image: string;
    text: string;
    button: React.ReactNode;
    buttonTitle: string;
    buttonColor: string;
    buttonLink: string;
}

export default function AboutSection({
  image,
  text,
  buttonTitle,
  buttonColor,
  buttonLink,
}: AboutSectionProps) {
  return (
    <div className="about-bottom-section">
      <img className="about-img" src={image} alt="about" />

      <p className="standard-text">{text}</p>

      <StandardButton
        title={buttonTitle}
        color={buttonColor}
        link={buttonLink}
      />
    </div>
  );
}