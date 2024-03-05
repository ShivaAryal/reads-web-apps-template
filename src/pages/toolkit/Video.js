import React from "react";
import { Row, Col } from "antd";
import { ToolOutlined } from "@ant-design/icons";

const Video = () => {
  return (
    <div className="toolkit">
      <Row>
        <Col xs={1} sm={2}></Col>
        <Col xs={22} sm={20}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ToolOutlined className="pageIcons" />
            <div style={{ marginLeft: "8px" }}>
              <p style={{ marginBottom: "unset" }}>Videos of</p>
              <h1 style={{ margin: "0", display: "inline-block" }}>
                Biofilm DIDS
              </h1>
            </div>
          </div>
          <br />

          <p>
            Introducing the Biofilm Data and Information Discovery System (
            <a
              href="https://react-dids.bicbioeng.org"
              // target="_blank"
              // rel="noreferrer"
              style={{ color: "#3333dd" }}
            >
              Biofilm-DIDS
            </a>
            ), a database designed to serve as a scientific platform for
            investigating biological responses to nano-scale coatings (e.g.,
            crystal orientation, defect density, layer count) applied to metal
            surfaces. Biofilm-DIDS harnesses the power of natural language
            processing, text mining, data integration, domain ontologies, and an
            artificial intelligence metadata annotation system. These
            capabilities empower users to explore integrated datasets derived
            from experiments as well as existing resources (e.g., materials,
            transcriptomics, proteomics, metabolomics, methylome, phenotypic,
            analytic tools, publications, and more). This comprehensive approach
            significantly enhances researchers’ capacity to address complex
            questions in this challenging domain. Biofilm-DIDS empowers
            researchers to connect their biofilm/material-related inquiries with
            pertinent datasets, analytic tools, and publications using free-text
            searchers, thereby facilitating more streamlined and effective
            research process.
          </p>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <iframe
                title="Video1"
                src="https://www.youtube.com/embed/UtgIyuuW2s4"
                width="100%"
                height="300px"
                allowFullScreen
              />
              <p>1. Bio-TDS Overview</p>
            </Col>
            <Col xs={24} sm={12}>
              <iframe
                title="Video2"
                src="https://www.youtube-nocookie.com/embed/gaW0aBHYc-A"
                width="100%"
                height="300px"
                allowFullScreen
              />
              <p>2. Bio-TDS Design And Implementation</p>
            </Col>
          </Row>

          {/* Row 2 with 1 column taking up the entire width */}
          <Row gutter={16}>
            <Col xs={24}>
              <iframe
                title="Video3"
                src="https://www.youtube-nocookie.com/embed/8ZG7xfViLcI"
                width="100%"
                height="300px"
                allowFullScreen
              />
              <p>3. Bio-TDS Evaluation</p>
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={2}></Col>
      </Row>
    </div>
  );
};

export default Video;
