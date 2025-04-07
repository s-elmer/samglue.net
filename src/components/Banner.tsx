import banner from "../assets/images/banner.png";
import "../styles/banner.css";

export const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} height="200px"></img>
    </div>
  );
};
