import React, { useEffect, useState } from "react";
import Lists from "./lists";
import "./resultComponents.css";
import { Services } from "../..//Entities/Services";
import { useLazyQuery } from "@apollo/client";
import Config from "./../../constants/config.json";
import { Button, Dropdown, Menu, message, Modal, Skeleton } from "antd";
import Papa from "papaparse";
import { onAnalyzeData } from "../../utils/nextstep";
import GetAiSummary from "./aiSummary";
import { useNavigate } from "react-router-dom";

const TabContent = (props) => {
  const navigate = useNavigate();
  const { tab, searchQuery } = props;
  const [getData, { fetchMore, loading, error, data }] = useLazyQuery(
    Services.search
  );
  const [selectedItems, setSelectedItems] = useState([]);
  const [showAiSummaryModal, setShowAiSummaryModal] = useState(false);

  useEffect(() => {
    if (searchQuery && tab) {
      console.log(
        searchQuery,
        tab,
        Config.entities.filter((x) => x.name === tab)[0].tag
      );
      getData({
        variables: {
          target: searchQuery,
          category: Config.entities.filter((x) => x.name === tab)[0].tag,
          pageNumber: 1,
          pageSize: 20,
        },
      });
    }
  }, [searchQuery, tab, getData]);

  const onItemSelected = (e, item) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((x) => x.name !== item.name));
    }
  };

  const exportSelectedData = () => {
    const requiredData = selectedItems.map((x) => {
      return {
        title: x.name,
        description: x.description,
        downloadUrl: x.download,
      };
    });
    const csv = Papa.unparse(requiredData);
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "selected_results.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onGetAISummaryClick = () => {
    setShowAiSummaryModal(true);
  };

  const onCloseAISummaryModal = () => {
    setShowAiSummaryModal(false);
  };

  const menu = () => {
    const showAnalyze =
      selectedItems.length ===
      selectedItems.filter((x) => x.download?.includes("geo")).length;
    return (
      <Menu>
        <Menu.Item
          style={{ padding: "6px 30px 6px 30px" }}
          onClick={onGetAISummaryClick}
          key="Get AI Summary"
        >
          Get AI Summary
        </Menu.Item>
        <Menu.Item
          style={{ padding: "6px 30px 6px 30px" }}
          onClick={() => {
            if (showAnalyze) onAnalyzeData(selectedItems);
            else
              message.info(
                "Analyze is only available for GEO Data in this version!"
              );
          }}
          key="Analyze Data"
        >
          Analyze Data
        </Menu.Item>
        <Menu.Item
          style={{ padding: "6px 30px 6px 30px" }}
          key="Export Selected Items"
          onClick={exportSelectedData}
        >
          Export Selected Items
        </Menu.Item>
      </Menu>
    );
  };

  const onViewSimilar = (title) => {
    navigate(`/results?q=${title}`);
  };

  const onViewDetail = (item) => {
    navigate(`/details/${item.index}/${item.id}`);
  };

  return (
    <>
      {data && (
        <div style={{ width: "100%" }}>
          <p className="result-number">
            There were{" "}
            <span style={{ fontWeight: "bold" }}>
              {data?.result[0]?.total || 0}
            </span>{" "}
            {tab} found for the searched query
          </p>
          {(selectedItems.length && (
            <Dropdown overlay={menu()}>
              <Button className="next-step-button">Next Step Actions</Button>
            </Dropdown>
          )) ||
            null}
        </div>
      )}

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
        <Lists
          selectedItems={selectedItems}
          onItemSelected={onItemSelected}
          tab={tab}
          data={data}
          onViewSimilar={onViewSimilar}
          onViewDetail={onViewDetail}
          fetchMore={fetchMore}
        />
      )}
      <Modal
        open={showAiSummaryModal}
        onCancel={onCloseAISummaryModal}
        onOk={onCloseAISummaryModal}
        footer={null}
      >
        <GetAiSummary
          articleAbstracts={selectedItems.map((x) => x.description || x.name)}
        />
      </Modal>
    </>
  );
};

export default TabContent;
