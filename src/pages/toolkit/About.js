import { InfoCircleOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const About = () => {
  return (
    <div>
      <Row justify="center" style={{ margin: "0", padding: "0 20px" }}>
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <h1 class="toolkit_header">
            <InfoCircleOutlined className="pageIcons" />
            <br />
            About Biofilm DIDS
          </h1>
          <p>
            The proliferation of biofilm growth, whether deemed beneficial or
            undesirable, poses substantial financial challenges in various
            sectors such as cooling towers, defense, desalination plants, marine
            industry, water infrastructure, utilities, manufacturing,
            transportation sectors, and a numerous other engineering and medical
            applications. There is an urgent need for a comprehensive microbiome
            investigation framework to facilitate a system level understanding
            of the interactions between biofilms and technologically relevant
            materials. Introducing the Biofilm Data and Information Discovery
            System (
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
        </Col>
      </Row>
    </div>
  );
};

export default About;
