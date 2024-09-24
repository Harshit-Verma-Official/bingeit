import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const App = () => {
  const x = true;

  if (x) return null;

  return <RouterProvider router={router} />;
};

export default App;
