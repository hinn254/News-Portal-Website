import React, { useState } from "react";
import "./App.css";
import News from "./News/News";
import SideNews from "./News/SideNews";

function App() {
  const [new1, setNew1] = useState({
    type: "top-headlines",
    query: "sources=bbc-news",
  });
  const [new2, setNew2] = useState({
    type: "top-headlines",
    query: "sources=techcrunch",
  });
  const [new3, setNew3] = useState({
    type: "everything",
    query: "q=apple&from=2020-09-06&to=2020-09-06&sortBy=popularity",
  });

  return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighten-4">
            <a href="#" className="bran-logo center">
              My Feed
            </a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s8">
          <News news={new1} />
          <News news={new2} />
        </div>
        <div className="col s4">
          <SideNews news={new3} />
        </div>
      </div>
    </div>
  );
}

export default App;
