import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { About } from "../components/landing/about";
import { Contact } from "../components/landing/contact";
import { Features } from "../components/landing/features";
import { Gallery } from "../components/landing/gallery";
import { Header } from "../components/landing/header";
import { Navigation } from "../components/landing/navigation";
import { Services } from "../Entities/Services";
import Config from "./../constants/config.json";

const Home = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const myIndices = Config.entities.map((x) => x.index);
  const { loading, error, data } = useQuery(Services.GetSpecificIndicesStats, {
    variables: { indices: JSON.stringify(myIndices) },
  });

  const onSearchButtonPress = () => {
    navigate(`/results?q=${searchText}`);
  };

  return (
    <div>
      <Navigation />
      <Header
        onChangeSearchText={(text) => setSearchText(text)}
        stats={data}
        loading={loading}
        error={error}
        onSearchButtonPress={onSearchButtonPress}
        searchText={searchText}
      />
      <Features />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
