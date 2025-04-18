import { SidebarButton } from "./SidebarButton";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <SidebarButton linkTo="/" text="Home" />
        <SidebarButton linkTo="/about" text="About" />
        <SidebarButton linkTo="/resume" text="Résumé" />
        <SidebarButton linkTo="/favorites" text="Favorites" />
      </div>
    </>
  );
};
