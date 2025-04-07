import { createFileRoute } from "@tanstack/react-router";
import Resume from "../assets/Samuel Elmer Resume.pdf";
import "../styles/resume.css";

export const Route = createFileRoute("/resume")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="resume">
      <embed
        type="application/pdf"
        src={Resume}
        width="1000px"
        height="850px"
      ></embed>
    </div>
  );
}
