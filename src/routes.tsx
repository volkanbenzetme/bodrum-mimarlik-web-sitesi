import type { RouteRecord } from "vite-react-ssg";
import Home from "./pages/Home";
import Hizmetler from "./pages/Hizmetler";
import Studio from "./pages/Studio";
import Surec from "./pages/Surec";
import Iletisim from "./pages/Iletisim";
import ProjelerIndex from "./pages/ProjelerIndex";
import ProjeDetay from "./pages/ProjeDetay";
import { projects } from "./data/projects";

// Sayfalar tek bir bundle içinde eager import edilir (code-splitting yok) — site küçük,
// vite-react-ssg'nin `lazy` alanı FOUC/hydration riskleriyle geliyor (bkz. paket README'i);
// bu ölçekte basitlik daha değerli.
export const routes: RouteRecord[] = [
  { path: "/", Component: Home },
  { path: "/hizmetler", Component: Hizmetler },
  { path: "/studio", Component: Studio },
  { path: "/surec", Component: Surec },
  { path: "/iletisim", Component: Iletisim },
  { path: "/projeler", Component: ProjelerIndex },
  {
    path: "/projeler/:slug",
    Component: ProjeDetay,
    getStaticPaths: () => projects.map((p) => `/projeler/${p.slug}`),
  },
];
