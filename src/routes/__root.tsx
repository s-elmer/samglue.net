import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../styles/__root.css";
import { Sidebar } from "../components/Sidebar";
import { Banner } from "../components/Banner";

export const Route = createRootRoute({
  component: () => (
    <>
      <Banner />
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
