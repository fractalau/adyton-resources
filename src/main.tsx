import { createHead, UnheadProvider } from "@unhead/react/client";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const head = createHead();

const container = document.getElementById("root")!;

const app = (
  <UnheadProvider head={head}>
    <App />
  </UnheadProvider>
);

// If the root already has server-rendered content (react-snap), hydrate it;
// otherwise do a fresh render.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
