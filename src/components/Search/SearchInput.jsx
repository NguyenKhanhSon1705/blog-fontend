import React from "react";
import { Input, Space } from "antd";
const SearchInput = () => {
  const { Search } = Input;
  const onSearch = (e) => {
    console.log(e.value);
  };
  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </>
  );
};

export default SearchInput;
