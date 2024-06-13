import React from "react";
import { Handle } from "react-flow-renderer";
import "./CustomNode.css"; // For custom styles

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
      <Handle type="target" position="top" />
      <div className="custom-node-content">{data.label}</div>
      <Handle type="source" position="bottom" />
    </div>
  );
};

export default CustomNode;
