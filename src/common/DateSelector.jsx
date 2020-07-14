import React from "react";
import classnames from "classname";
import PropTypes from "prop-types";

import Header from "./Header.jsx";

import "./DateSelector.css";

export default function DateSelector(props) {
  const { show, onSelect, onBack } = props;

  return (
      <div className={classnames("data-selector", { hidden: !show })}>
          <Header title="日期选择" onBack={onBack} />
      </div>
  );
}

DateSelector.PropTypes = {
  show: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};
