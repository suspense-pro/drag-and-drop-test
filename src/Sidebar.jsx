import React from "react";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      {/* <div className="description">
        You can drag these nodes to the pane on the right.
      </div> */}
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "Customer Care")}
        draggable
      >
        Customer Care
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "Off-line")}
        draggable
      >
        Off-line
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "Online")}
        draggable
      >
        Online
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Payment Integration")}
        draggable
      >
        Payment Integration
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Self-Checkout")}
        draggable
      >
        Self-Checkout
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Card")}
        draggable
      >
        Card
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "Pos")}
        draggable
      >
        Pos
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "M Pos")}
        draggable
      >
        M Pos
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "P Pos")}
        draggable
      >
        P Pos
      </div>
    </aside>
  );
};
