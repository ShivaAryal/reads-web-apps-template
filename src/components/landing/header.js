import React from "react";
import SearchButton from "../shared/searchButton";
import FAQ from "./FAQ";
import Config from "./../../constants/config.json";

export const Header = (props) => {
  const {
    loading,
    error,
    stats,
    onChangeSearchText,
    onSearchButtonPress,
    searchText,
  } = props;
  let paragraph = "";
  if (error) {
    //
  }
  if (stats) {
    const stats_val = stats.getSpecificIndicesStats;
    let total_count = stats_val.total_count;
    let countObj = JSON.parse(stats_val.countObj);
    paragraph =
      "A search and Database Management Engine with over " +
      total_count +
      " data-collection, ";
    countObj.forEach((count) => {
      paragraph =
        paragraph +
        count.count +
        " " +
        Config.entities.filter((x) => x.index === count.index)[0].name +
        ", ";
    });
  }

  return (
    <header id="header">
      <div className="intro" id="page-top">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2>
                  {Config.title}
                  <span></span>
                </h2>
                <p>{!loading ? paragraph : "Loading..."}</p>
                <SearchButton
                  onSearchButtonPress={onSearchButtonPress}
                  onChangeSearchText={(text) => onChangeSearchText(text)}
                  searchText={searchText}
                  width="100%"
                />
                <FAQ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
