import React from "react";

function ProgressPagination({ stats }) {
  let stat = stats;
  const redOrGreen = (check) => {
    return check == null ? null : check == "right" ? "buy" : "sell";
  };

  return (
    <div className="flex-row">
      {console.log(stat)}
      {}
      <div className={`bar ${redOrGreen(stat[0])}`}></div>
      <div className={`bar ${redOrGreen(stat[1])}`}></div>
      <div className={`bar ${redOrGreen(stat[2])}`}></div>
      <div className={`bar ${redOrGreen(stat[3])}`}></div>
      <div className={`bar ${redOrGreen(stat[4])}`}></div>
      <div className={`bar ${redOrGreen(stat[5])}`}></div>
      <div className={`bar ${redOrGreen(stat[6])}`}></div>
      <div className={`bar ${redOrGreen(stat[7])}`}></div>
      <div className={`bar ${redOrGreen(stat[8])}`}></div>
      <div className={`bar ${redOrGreen(stat[9])}`}></div>
    </div>
  );
}

export default ProgressPagination;
