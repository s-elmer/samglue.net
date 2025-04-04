import { SidebarHeader } from "./SidebarHeader";
import { SidebarButton } from "./SidebarButton";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <SidebarHeader />
        <SidebarButton linkTo="/" text="Home" className="active" />
        <br />
        <SidebarButton linkTo="/about" text="About" />
        <br />
      </div>
    </>
  );
};
