import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header"
import PostcardForm from "./PostcardForm";
import SearchPostcard from "./SearchPostcard";
import Footer from "./Footer"
import Postcard from './Postcard';




function App() {
    
    
  return (
      <div>
          
          <Header />
          <NavBar />
          <Postcard />
          <Switch>
              
              <Route exact path="/postcardform">
                  <PostcardForm />
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/postcards">
                  <SearchPostcard />
              </Route>
              
          </Switch>
          <Footer />
      </div>
  );
}

export default App;

