import { Dropdown, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  InfoCircleOutlined,
  VideoCameraOutlined,
  QuestionCircleOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";
import Config from "./../../constants/config.json";

export const Navigation = (props) => {
  const navigate = useNavigate();

  const optionSelected = (page) => {
    navigate(`/${page}`);
  };

  const menu = () => {
    return (
      <Menu mode="vertical" id="toolkit">
        <Menu.Item
          key="1"
          icon={<RightSquareOutlined />}
          onClick={() => optionSelected("gettingStarted")}
        >
          Getting Started
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<VideoCameraOutlined />}
          onClick={() => optionSelected("video")}
        >
          Videos
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<QuestionCircleOutlined />}
          onClick={() => optionSelected("material")}
        >
          Supporting Material
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<InfoCircleOutlined />}
          onClick={() => optionSelected("about")}
        >
          About
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a href={(props.fromPage === "results" && "/") || "#page-top"}>
              <img
                alt="Logo"
                src={Config.logo_url}
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 50,
                }}
              />
            </a>
            <a
              className="navbar-brand page-scroll"
              href={(props.fromPage === "results" && "/") || "#page-top"}
            >
              {Config.title}
            </a>
          </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {props.fromPage !== "results" && (
              <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
            )}
            {props.fromPage !== "results" && (
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
            )}
            {props.fromPage !== "results" && (
              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>
            )}
            {props.fromPage !== "results" && (
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            )}
            <li>
              <Dropdown overlay={menu()}>
                <a
                  href="#toolkit"
                  className="page-scroll"
                  style={{ cursor: "pointer" }}
                >
                  Toolkit
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
