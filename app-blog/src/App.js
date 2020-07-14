import React from 'react';
import './App.css';
import Bloguserreact from './component/Bloguserreact.js';
import Blogpostsreact from './component/Blogpostsreact.js';
import Blogcommentreact from './component/Blogcommentreact.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App container-fluid">
      <div className="row-fluid">
        <div id="colUsers" className="col-sm-12">
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <Bloguserreact />
                </Route>
                <Route path="/posts">
                  <Blogpostsreact />
                </Route>
                <Route path="/comments">
                  <Blogcommentreact />
                </Route>
              </Switch>
            </div>
          </Router>
          {/* Footer  */}
          <footer id="f" className="page-footer font-small ">
            {/* Copyright */}
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="#"><span id="footerLien">ExoBlogReactBootstrap</span></a>
            </div>
            {/* Copyright */}
          </footer>
          {/* Footer  */}
        </div>
      </div>
    </div>



  );

}

export default App;
