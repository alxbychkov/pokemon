import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import MenuHeader from "./components/MenuHeader";
import './App.css';
import cn from "classnames";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./routes/404";
import { FirebaseContext } from "./context/FirebaseContext";
import Firebase from "./service/firebase";

function App() {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFoundPage}/>
        <Route>
          <>
            <MenuHeader bgActive={!isPadding}/>
            <div className={cn('wrap', {'isHomePage': isPadding})}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage}/>
                <Route render={() => <Redirect to='/404'/>}/>
              </Switch>
            </div>
            <Footer/>
          </>
        </Route>
      </Switch>
    </FirebaseContext.Provider>
  );
}

export default App;
