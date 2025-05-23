import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Explore = () => {
  return <h1>Generate Stardust </h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
