import React from "react";
import freetext from "./../../assets/getting_started/freetext.png";
import freetextresult from "../../assets/getting_started/freetextresult.png";
import searchfaq1 from "../../assets/getting_started/step1.png";
import searchfaq2 from "../../assets/getting_started/step2.png";
import searchfaq3 from "../../assets/getting_started/step3.png";

import { Menu, Row, Col } from "antd";

const GettingStarted = () => {
  function handleNav(val) {
    document.getElementById(val).focus();
  }

  return (
    <div className="toolkit started">
      <Row>
        <Col xs={1} sm={2}></Col>
        <Col xs={22} sm={20}>
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key="1" onClick={() => handleNav("searchByKeyWord")}>
              Search by FAQs
            </Menu.Item>
            <Menu.Item key="2" onClick={() => handleNav("searchByText")}>
              Search by Free Text
            </Menu.Item>
            <Menu.Item key="4" onClick={() => handleNav("overview")}>
              Biofilm-DIDS-Overview
            </Menu.Item>
          </Menu>
          <br />
          <div style={{ backgroundColor: "#6c757d" }} className="banner">
            Search by FAQs
          </div>

          <div tabIndex={0} id="searchByKeyWord">
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <img
                  class="card-img-top"
                  src={searchfaq1}
                  alt="Biofilm DIDS"
                  width="100%"
                />
                <p>1. Select Frequently Asked Questions from home page.</p>
              </Col>
              <Col xs={24} sm={12}>
                <img
                  class="card-img-top"
                  src={searchfaq2}
                  alt="Biofilm DIDS"
                  width="100%"
                />
                <p>2.Select a question from the list.</p>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <img
                  class="card-img-top"
                  src={searchfaq3}
                  alt="Biofilm DIDS"
                  width="100%"
                />
                <p>3. The selection will navigate to our results page</p>
              </Col>
            </Row>
          </div>

          <div style={{ backgroundColor: "#6c757d" }} className="banner">
            Search by Free Text
          </div>
          <div tabIndex={1} id="searchByText">
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <img src={freetext} alt="Biofilm DIDS" width="100%" />
                <p>
                  1.Enter free text into the search text box. For example: "What
                  aligner should I use for mapping bacterial RNA-Seq data?"
                </p>
              </Col>
              <Col xs={24} sm={12}>
                <img src={freetextresult} alt="Biofilm DIDS" width="100%" />
                <p>
                  2. Click the search button to search for the selected
                  query.The search button will navigate you to our results page.
                </p>
              </Col>
            </Row>
          </div>

          <div style={{ backgroundColor: "#6c757d" }} className="banner">
            Biofilm-DIDS-Overview
          </div>

          <div tabIndex={3} id="overview">
            <p>
              The proliferation of biofilm growth, whether deemed beneficial or
              undesirable, poses substantial financial challenges in various
              sectors such as cooling towers, defense, desalination plants,
              marine industry, water infrastructure, utilities, manufacturing,
              transportation sectors, and a numerous other engineering and
              medical applications. There is an urgent need for a comprehensive
              microbiome investigation framework to facilitate a system level
              understanding of the interactions between biofilms and
              technologically relevant materials.
            </p>
            <iframe
              title="Getting Started Video"
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/UtgIyuuW2s4?list=PLE6ciK1_hiPrUAvbzUl33sytsGLie_QAi"
              allowfullscreen=""
              height="500px"
              width="100%"
            ></iframe>
            <p>
              Introducing the Biofilm Data and Information Discovery System
              (Biofilm-DIDS, https://react-dids.bicbioeng.org/), a database
              designed to serve as a scientific platform for investigating
              biological responses to nano-scale coatings (e.g., crystal
              orientation, defect density, layer count) applied to metal
              surfaces. Biofilm-DIDS harnesses the power of natural language
              processing, text mining, data integration, domain ontologies, and
              an artificial intelligence metadata annotation system. These
              capabilities empower users to explore integrated datasets derived
              from experiments as well as existing resources (e.g., materials,
              transcriptomics, proteomics, metabolomics, methylome, phenotypic,
              analytic tools, publications, and more). This comprehensive
              approach significantly enhances researchers’ capacity to address
              complex questions in this challenging domain. Biofilm-DIDS
              empowers researchers to connect their biofilm/material-related
              inquiries with pertinent datasets, analytic tools, and
              publications using free-text searchers, thereby facilitating more
              streamlined and effective research process.
              <br />
            </p>
          </div>
        </Col>
        <Col xs={1} sm={2}></Col>
      </Row>
    </div>
  );
};

export default GettingStarted;
