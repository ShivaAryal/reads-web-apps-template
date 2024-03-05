import React from "react";
import { Input, Space, Button } from "antd";

const SearchButton = (props) => {
  const { onChangeSearchText, onSearchButtonPress, searchText } = props;
  return (
    <Space.Compact
      style={{
        width: props.width || "80%",
      }}
    >
      <Input
        onPressEnter={onSearchButtonPress}
        onChange={(e) => onChangeSearchText(e.target.value)}
        placeholder="Search for your query"
        size="large"
        value={searchText}
        allowClear
      />
      <Button
        type="primary"
        size="large"
        style={{ backgroundColor: "#303F9F" }}
        onClick={onSearchButtonPress}
      >
        Search
      </Button>
    </Space.Compact>
  );
};

export default SearchButton;
