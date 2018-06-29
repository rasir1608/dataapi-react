import React from "react";
import { createHashHistory } from "history";
import { connect } from "dva";
import styles from "./Header.less";

/* eslint-disable */
const router = createHashHistory();
class Header extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className="bdp-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Header;
