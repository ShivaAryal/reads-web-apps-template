import { useLazyQuery } from "@apollo/client";
import { Button, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation } from "../components/landing/navigation";
import SearchButton from "../components/shared/searchButton";
import { Services } from "../Entities/Services";
import "./result.css";
import "./details.css";
import Config from "./../constants/config.json";
import { CloudDownloadOutlined, DownloadOutlined } from "@ant-design/icons";
import { downloadJSON } from "../utils/downloads";
import { removeHtmlTags } from "../utils/nextstep";

const Details = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const { index, id } = useParams();

  const [getData, { loading, error, data }] = useLazyQuery(Services.details);

  useEffect(() => {
    if (index && id) {
      getData({
        variables: {
          id,
          index,
        },
      });
    }
  }, [index, id, getData]);

  const onSearchButtonPress = () => {
    if (searchText) {
      navigate(`/results?q=${searchText}`);
    }
  };

  const result = data?.detail[0];

  return (
    <>
      <Navigation fromPage="results" />
      <div className="result-container">
        <SearchButton
          onChangeSearchText={(text) => setSearchText(text)}
          searchText={searchText}
          onSearchButtonPress={onSearchButtonPress}
        />
        {error && <p>Sorry, we were unable to process your request</p>}
        {loading && (
          <Skeleton
            avatar
            paragraph={{
              rows: 4,
            }}
          />
        )}
        {data && (
          <div className="detail-view">
            <div className="image-row-view">
              <div className="list-right-image-view">
                <img
                  width={170}
                  alt="logo"
                  src={
                    result.detail_image ||
                    Config.entities.filter((x) => x.name === props.tab)[0]
                      .default_image
                  }
                />
              </div>
              <div className="list-title-view">
                <p className="list-title">{removeHtmlTags(result.name)}</p>
                <div className="author-view">
                  Authors: {result.author.join(", ")}
                </div>
                <div className="version-view">Version: {result.version}</div>
                <div className="button-view">
                  <Button
                    className="list-button"
                    style={{ backgroundColor: "#283593" }}
                    icon={<DownloadOutlined />}
                    onClick={() => downloadJSON(result)}
                  >
                    Download JSON
                  </Button>
                  <Button
                    className="list-button"
                    style={{ backgroundColor: "#283593" }}
                    icon={<CloudDownloadOutlined />}
                  >
                    <a href={result.download}>Access Source</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="detail-description">
              {removeHtmlTags(result.description)}
            </div>
            <div className="tag-view">
              {result.tags.map((tag) => (
                <div className="tag-name">{tag}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
