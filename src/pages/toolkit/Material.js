import React from "react";

import bargraph from "../../assets/material/bargraph.png";
import betsoverview from "../../assets/material/betsoverview.png";
import biotdsoverview from "../../assets/material/biotdsoverview.png";
import corebets from "../../assets/material/corebets.png";

import { Row, Col } from "antd";
import { ToolOutlined } from "@ant-design/icons";

const Material = () => {
  return (
    <div className="toolkit">
      <Row>
        <Col xs={1} sm={2}></Col>
        <Col xs={22} sm={20}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ToolOutlined className="pageIcons" />
            <div style={{ marginLeft: "8px" }}>
              <p style={{ marginBottom: "unset" }}>Supporting Materials for</p>
              <h1 style={{ margin: "0", display: "inline-block" }}>
                Biofilm DIDS
              </h1>
            </div>
          </div>

          <p>
            Introducing the Biofilm Data and Information Discovery System (
            <a
              href="https://react-dids.bicbioeng.org"
              // target="_blank"
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

          <div style={{ backgroundColor: "#007bff" }} className="banner">
            Links to Supporting Material Documentation
          </div>
          <Row gutter={16} className="bold grid">
            <Col xs={24} sm={12}>
              <p>S1 High-level view of the Bio-TDS architecture</p>
            </Col>
            <Col xs={24} sm={12}>
              <p>S2 BETS Specification description and manipulation</p>
            </Col>
            <Col xs={24} sm={12}>
              <p>S3 Resources extraction and semi-automatics curation</p>
            </Col>
            <Col xs={24} sm={12}>
              <p>S4 TONER: Tools ontology-based annotation</p>
            </Col>
            <Col xs={24} sm={12}>
              <p>
                S5 Bio-TDS Query processing workflow and programmatic access
              </p>
            </Col>
            <Col xs={24} sm={12}>
              <p>S6 Bio-TDS Evaluation and comparison</p>
            </Col>
          </Row>
          <br />
          <br />

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <div style={{ backgroundColor: "#6c757d" }} className="banner">
                High-level view of the Bio-TDS architecture
              </div>
              <img
                class="card-img-top"
                src={biotdsoverview}
                alt="BIO TDS"
                width="100%"
              />
            </Col>
            <Col xs={24} sm={12}>
              <div style={{ backgroundColor: "#6c757d" }} className="banner">
                BETS Specification description and manipulation
              </div>
              <img
                class="card-img-top"
                src={corebets}
                alt="BIO TDS"
                width="100%"
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <div style={{ backgroundColor: "#007bff" }} className="banner">
                Resources extraction and semi-automatics curation
              </div>
              <p>
                <br />
                Bioinformatics Elaborated Tools Specifications (BETS) provides a
                standard for analytic tool descriptions. The analytic tool
                descriptions (i.e. metadata) gathered from community tool
                repositories integrated into the Bio-TDS are stored in JSON
                format using the BETS standard. This standard consists of core
                BETS attributes and domains/repositories specifics attributes
                (see Figure S1) The core BETS attributes are manually mapped to
                the repository attribute
              </p>
              <img
                class="card-img-top"
                src={bargraph}
                alt="BIO TDS"
                width="100%"
              />
            </Col>
            <Col xs={24} sm={12}>
              <div style={{ backgroundColor: "#007bff" }} className="banner">
                TONER: Tools ontology-based annotation
              </div>
              <p>
                <br />
                The Bio-TDS combines bioinformatics tools from five other
                repositories and stores them in one central location, following
                BETS (Bioinformatics Elaborated Tool Specification). There are
                six main modules that convert the data from each of the five
                repositories into BETS tools and store the new tools into the
                Bio-TDS database. The BETS Checker is a Java application that
                tests the compatibility of a tool with the BETS specification. A
                tool is considered “compatible” if it is in the format specified
                by the specific BETS converter. For example, the system contains
                a mapper called Galaxy Converter. A tool from the Galaxy Tool
                Shed can only be “compatible” if it matches the predefined
                Galaxy format.
              </p>
              <img
                class="card-img-top"
                src={betsoverview}
                alt="BIO TDS"
                width="100%"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={2}></Col>
      </Row>
    </div>
  );
};

export default Material;
