import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "@designcodeio/threeui/style.css";
import "./styles.css";

export const createRoot = ViteReactSSG({ routes });
