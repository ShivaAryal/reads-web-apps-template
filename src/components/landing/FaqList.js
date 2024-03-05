import { Avatar, Button, List } from "antd";
import React from "react";
import { Services } from "../../Entities/Services";
import documents from "./../../assets/document.png";
import { useQuery } from "@apollo/client";

function FaqList() {
  const [pages, setPages] = React.useState(1);

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

  const questions = tableData.getMySqlTable[0].data.map(
    (x) => JSON.parse(x).name
  );

  const data = [];
  for (let i = 0; i < questions.length; i++) {
    data.push({
      tittle: questions[i],
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
        // textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>load more</Button>
    </div>
  );

  return (
    <List
      itemLayout="vertical"
      size="large"
      loadMore={loadMore}
      dataSource={data.slice(0, 10 * pages)}
      renderItem={(item) => (
        <List.Item key={data.indexOf(item)}>
          <List.Item.Meta
            style={{ marginTop: -5, marginBottom: -5 }}
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.similar}>{item.tittle}</a>}
          />
        </List.Item>
      )}
    />
  );
}

export default FaqList;
