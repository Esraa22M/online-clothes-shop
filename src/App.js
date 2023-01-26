import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentaction from "./routes/authentaction/authentaction.component";
import Products from "./routes/products/products.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route  index element={<Home/>}/>
        <Route path="shop" element={<Products/>}/>
        <Route path="auth" element={<Authentaction/>}/>
      </Route>
    </Routes>
  );
};
export default App;
