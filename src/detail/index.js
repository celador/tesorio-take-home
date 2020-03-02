import React, { useState, useEffect } from "react";
import Provider from "../components/provider";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { get } from "../services/reddit";

export default function Detail() {
  let { permalink } = useParams();
  const [json, setJson] = useState([]);

  useEffect(() => {
    get(permalink).then(setJson);
  }, [permalink]);

  const List = styled.ol`
    list-style: none;
  `;

  return (
    <List type="1">
      {Array.isArray(json) ? (
        json.map((json, idx) => <Provider key={idx} json={json} />)
      ) : (
        <div>No Data</div>
      )}
    </List>
  );
}
