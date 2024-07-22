import { Avatar, Button, Input, List } from "antd";
import React, { useState } from "react";
import { Services } from "../../Entities/Services";
import documents from "./../../assets/document.png";
import { useQuery } from "@apollo/client";

function FaqList() {
  const [pages, setPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    loading,
    error,
    data: tableData,
  } = useQuery(Services.getMySqlTable, {
    variables: {
      tableNames: JSON.stringify(["faq_questions"]),
    },
  });

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error fetching data..</p>;
  }

  const questions = tableData.getMySqlTable[0].data.map((x) => JSON.parse(x).name).reverse();

  const data = [];
  for (let i = 0; i < questions.length; i++) {
    data.push({
      title: questions[i],
      similar: "/results?q=" + questions[i],
      avatar: documents,
    });
  }

  const onLoadMore = () => {
    setPages(pages + 1);
  };

  const loadMore = (
      <div
          style={{
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
          }}
      >
        <Button onClick={onLoadMore}>load more</Button>
      </div>
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
  );

  return (
      <div>
        <Input
            placeholder="Search FAQ"
            value={searchQuery}
            onChange={handleSearch}
            style={{ marginBottom: 20 }}
        />
        <List
            itemLayout="vertical"
            size="large"
            loadMore={loadMore}
            dataSource={filteredData.slice(0, 10 * pages)}
            renderItem={(item) => (
                <List.Item key={data.indexOf(item)}>
                  <List.Item.Meta
                      style={{ textAlign: "left", marginTop: -5, marginBottom: -5 }}
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.similar}>{item.title}</a>}
                  />
                </List.Item>
            )}
        />
      </div>
  );
}

export default FaqList;
