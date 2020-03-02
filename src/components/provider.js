import React from "react";
import Listing from "./listing";
import T3 from "./t3";
import T1 from "./t1";
import Spinner from "./spinner";

export default function({ json }) {
  switch (typeof json) {
    case "string":
      return <div></div>;
    default:
      const { kind, data } = json;
      switch (kind) {
        case "Listing":
          return <Listing data={data} />;
        case "t3":
          return <T3 data={data} />;
        case "t1":
          return <T1 data={data} />;
        case "more":
          return <div></div>;
        default:
          console.log(typeof json, json);
          return <Spinner />;
      }
  }
}
