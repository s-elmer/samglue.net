import "../styles/sidebarButton.css";
import { Link } from "@tanstack/react-router";

interface SidebarButtonProps {
  className?: string;
  linkTo?: string;
  text?: string;
}

export const SidebarButton = ({ className, linkTo, text }: SidebarButtonProps) => {
  return (
    <div className={"sidebarButton " + className}>
      <Link to={linkTo} className="">
        {text}
      </Link>
    </div>
  );
};
