import React from "react";
import { useParams } from "react-router-dom";
import Store from "./store";

const Search = () => {
  const { search } = useParams();
  return <Store search={search} />;
};

export default Search;
