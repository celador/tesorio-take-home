import React from "react";
import Provider from "./provider";
import styled from "styled-components";

const List = styled.ol`
  list-style: none;
`;

export default function({ data }) {
  return (
    <List type="1">
      {Array.isArray(data.children) ? (
        data.children.map((json, idx) => <Provider key={idx} json={json} />)
      ) : (
        <div>No Data</div>
      )}
    </List>
  );
}
