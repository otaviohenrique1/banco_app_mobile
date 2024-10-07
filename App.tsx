import { AppRoutes } from "./src/routes";
import { GlobalContext } from "./src/context";

export default function App() {
  return (
    <GlobalContext>
      <AppRoutes/>
    </GlobalContext>
  );
}
