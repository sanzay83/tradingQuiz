import React from "react";

function ProgressPagination({ stats }) {
  return (
    <div className="pagination-candles">
      {stats.map((each, index) => (
        <div className={`bar ${each}`} key={index} />
      ))}
    </div>
  );
}

export default ProgressPagination;
