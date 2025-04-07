import "../styles/sidebarButton.css";
import { Link } from "@tanstack/react-router";
import gluestick from "../assets/images/gluestick.png";

interface SidebarButtonProps {
  linkTo?: string;
  text?: string;
}

export const SidebarButton = ({ linkTo, text }: SidebarButtonProps) => {
  return (
    <div className={"sidebarButton"}>
      <img src={gluestick} height={"50px"} />
      <div className={"sidebarButtonText"}>
        <Link to={linkTo} className="sidebarLink">
          {text}
        </Link>
      </div>
    </div>
  );
};
