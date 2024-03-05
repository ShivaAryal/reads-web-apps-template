import React from "react";
import Config from "./../../constants/config.json";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={Config.logo_url} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{Config ? Config.description : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {Config
                      ? Config.features
                          .slice(0, Math.ceil(Config.features.length / 2))
                          .map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {Config
                      ? Config.features
                          .slice(Math.ceil(Config.features.length / 2))
                          .map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
