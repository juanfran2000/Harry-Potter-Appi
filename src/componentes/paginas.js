import React from "react";
import { Pagination } from "antd";

const onShowSizeChange= (
  current,
  pageSize
) => {
  console.log(current, pageSize);
};

function Paginas() {
  return (
    <div>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
      <br />
    </div>
  );
}

export default Paginas;
