import iconFb from "../assets/img/icon-facebook.svg";
import iconIG from "../assets/img/icon-instagram.svg";
import iconPin from "../assets/img/icon-pinterest.svg";

function SocialLinks() {
  return (
    <div className="flex justify-center social-icons space-x-4">
      <img src={iconFb} alt="Facebook" className="w-6 h-6 md:w-8 md:h-8 icon" />
      <img
        src={iconIG}
        alt="Instagram"
        className="w-6 h-6 md:w-8 md:h-8 icon"
      />
      <img
        src={iconPin}
        alt="Pinterest"
        className="w-6 h-6 md:w-8 md:h-8 icon"
      />
    </div>
  );
}

export default SocialLinks;
