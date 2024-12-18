import React from "react";

const Indicators = ({
  activeIndex,
  length,
  setActiveIndex,
  setManualChange,
}) => {
  return (
    <div className="indicators">
      {Array.from({ length }, (_, index) => (
        <div
          key={index}
          className={index === activeIndex ? "indicator active" : "indicator"}
          onClick={() => {
            setManualChange(true);
            setActiveIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default Indicators;
