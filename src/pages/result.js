import React, { useEffect, useState } from "react";
import { Navigation } from "../components/landing/navigation";
import { Segmented } from "antd";
import "./result.css";
import SearchButton from "../components/shared/searchButton";
import TabContent from "../components/results/tabContent";
import Config from "./../constants/config.json";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(Config.entities[0].name);
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const urlSplit = window.location.href.split("?q=");
    if (urlSplit.length > 1) {
      let query = urlSplit[1];
      query = query.replaceAll("%20", " ");
      setSearchQuery(query);
    }
  }, [window.location.href]);

  const onTabChange = (tab) => {
    setActiveTab(tab);
  };

  const onSearchButtonPress = () => {
    if (searchText) {
      navigate(`/results?q=${searchText}`);
    }
  };

  return (
    <>
      <Navigation fromPage="results" />
      <div className="result-container">
        <SearchButton
          onChangeSearchText={(text) => setSearchText(text)}
          searchText={searchText}
          onSearchButtonPress={onSearchButtonPress}
        />

        <Segmented
          options={Config.entities.map((x) => x.name)}
          block
          size="large"
          style={{
            backgroundColor: "#303F9F",
            width: "70%",
            padding: "5px 5px 0px 5px",
            color: "#fff",
            marginTop: 20,
          }}
          color="#fff"
          onChange={onTabChange}
        />

        {Config.entities.map(
          (x) =>
            activeTab === x.name && (
              <TabContent tab={x.name} searchQuery={searchQuery} />
            )
        )}

        {/* {activeTab === "Datasets" && (
          <TabContent tab="Datasets" searchQuery={searchQuery} />
        )} */}
      </div>
    </>
  );
};

export default Result;
