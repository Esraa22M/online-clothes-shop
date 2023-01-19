import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentaction from "./routes/authentaction/authentaction.component";
const Shop = () => {
  return <h1>esraa shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route  index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentaction/>}/>
      </Route>
    </Routes>
  );
};
export default App;
