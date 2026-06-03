
import StandardButton from "./StandardButton";

type AboutSectionProps = {
    image: string;
    children: React.ReactNode;
    buttonTitle: string;
    buttonColor: string;
    buttonLink: string;
}

export default function AboutSection({
  image,
  children,
  buttonTitle,
  buttonColor,
  buttonLink,
}: AboutSectionProps) {
  return (
    <div className="about-bottom-section">
      <img className="about-img" src={image} alt="about" />

      <p className="standard-text">{children}</p>

      <StandardButton
        title={buttonTitle}
        color={buttonColor}
        link={buttonLink}
      />
    </div>
  );
}
