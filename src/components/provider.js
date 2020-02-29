import React from "react";
import Listing from "./listing";
import T3 from "./t3";
import Spinner from "./spinner";

export default function({ json }) {
  const { kind, data } = json;
  switch (kind) {
    case "Listing":
      return <Listing data={data} />;
    case "t3":
      return <T3 data={data}></T3>;
    default:
      return <Spinner />;
  }
}
