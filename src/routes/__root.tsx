import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../styles/__root.css";
import { Sidebar } from "../components/Sidebar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
