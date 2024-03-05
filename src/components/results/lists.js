import React from "react";
import { Avatar, Button, Checkbox, List } from "antd";
import Config from "./../../constants/config.json";
import {
  RightSquareOutlined,
  CopyOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
import { removeHtmlTags } from "../../utils/nextstep";

const Lists = (props) => {
  const {
    onItemSelected,
    selectedItems,
    onViewSimilar,
    onViewDetail,
    fetchMore,
  } = props;

  const data = props?.data?.result || [];
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page, pageSize) => {
          fetchMore({
            cancelRefetch: true,
            variables: { pageNumber: page, pageSize: pageSize },
          });
        },
        // pageSize: 20,
        total: (data[0] && data[0].total) || 0,
      }}
      style={{ alignItems: "center" }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.name}
          extra={
            <div className="list-right-image-view">
              <Checkbox
                checked={
                  selectedItems.filter((x) => x.name === item.name).length
                }
                onChange={(e) => onItemSelected(e, item)}
                style={{
                  backgroundColor: "#000",
                  color: "#000",
                  borderColor: "#f00",
                  borderWidth: 5,
                  marginBottom: 5,
                }}
              />
              <img
                width={150}
                alt="logo"
                src={
                  item.detail_image ||
                  Config.entities.filter((x) => x.name === props.tab)[0]
                    .default_image
                }
              />
            </div>
          }
          style={{
            backgroundColor: "#fff",
            margin: 20,
            marginTop: 0,
            alignSelf: "center",
            borderRadius: 10,
            boxShadow: "1px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                src={
                  item.detail_image ||
                  Config.entities.filter((x) => x.name === props.tab)[0]
                    .default_image
                }
              />
            }
            title={
              <p
                href={item.download}
                style={{
                  color: "#000",
                  fontSize: 20,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={() => onViewDetail(item)}
              >
                {removeHtmlTags(item.name)}
              </p>
            }
          />
          {item.description && item.description.length > 700 ? (
            <>{removeHtmlTags(item.description).substring(0, 700)}...</>
          ) : (
            removeHtmlTags(item.description)
          )}
          <div style={{ marginTop: 10, justifySelf: "flex-end" }}>
            <Button
              className="list-button"
              style={{ backgroundColor: "#283593" }}
              icon={<RightSquareOutlined />}
              onClick={() => onViewDetail(item)}
            >
              View Details
            </Button>
            <Button
              className="list-button"
              style={{ backgroundColor: "#283593" }}
              icon={<CopyOutlined />}
              onClick={() => onViewSimilar(item.name)}
            >
              View Similar
            </Button>
            <Button
              className="list-button"
              style={{ backgroundColor: "#283593" }}
              icon={<CloudDownloadOutlined />}
            >
              <a href={item.download}>Access Source</a>
            </Button>
          </div>
        </List.Item>
      )}
    />
  );
};

export default Lists;
