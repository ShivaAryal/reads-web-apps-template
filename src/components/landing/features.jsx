import React from "react";
import Config from "./../../constants/config.json";
const icons = [
  "fa fa-comments-o",
  "fa fa-bullhorn",
  "fa fa-group",
  "fa fa-magic",
];

export const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {Config.entities
            ? Config.entities.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={icons[i % icons.length]}></i>
                  <h3>{d.name}</h3>
                  <p>{d.description}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
