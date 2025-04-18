import { createFileRoute } from "@tanstack/react-router";
import { Card } from "../components/Card";

export const Route = createFileRoute("/favorites")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Card title="Test">
      <div>Test</div>
    </Card>
  );
}
