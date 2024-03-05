import { Collapse } from "antd";
import React from "react";
import FaqList from "./FaqList";
// import "../../Styles/main.css";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const FAQ = () => (
  <Collapse
    accordion
    expandIcon={({ isActive }) => (
      <CaretRightOutlined rotate={isActive ? 90 : 0} />
    )}
    style={{ backgroundColor: "#BDBDBD", marginTop: 20 }}
  >
    <Panel header="Frequently Asked Questions" key="1">
      <FaqList />
    </Panel>
  </Collapse>
);

export default FAQ;
