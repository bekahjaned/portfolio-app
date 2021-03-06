import React from "react";
import { Link } from "react-router-dom";
import { InstagramOutlined, BehanceOutlined } from "@ant-design/icons";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav-links">
          <Link className="link" to="/">
            <li>Work</li>
          </Link>
          <Link className="link" to="/about">
            <li>About</li>
          </Link>
          <Link className="link" to="/contact">
            <li>Contact</li>
          </Link>
          <a className="link" href="https://www.behance.net/rebekahdejong">
            <BehanceOutlined />
          </a>
          <a
            className="link"
            href="https://www.instagram.com/de.jonge.maker/?hl=en"
          >
            <InstagramOutlined />
          </a>
        </ul>
      </nav>
    );
  }
}

export default Nav;
