import React, { useState } from "react";
import styled from "styled-components";
import numeral from "numeral";

import Vote from "./vote";

const Voting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 3rem;
  color: #c2c2c2;

  & .score {
    color: initial;
  }
`;
export default function({ score }) {
  const [value, setValue] = useState(score);
  const [liked, setLiked] = useState();
  return (
    <Voting>
      <Vote
        kind="up"
        liked={liked}
        onClick={() => {
          if (liked === undefined || liked === false) {
            setLiked(true);
            setValue(score + 1);
          } else {
            setLiked(undefined);
            setValue(score);
          }
        }}
      />
      <div className="score">{numeral(value).format("0.0a")}</div>
      {/* <div className="score">{value}</div> */}
      <Vote
        kind="down"
        liked={liked}
        onClick={() => {
          if (liked === undefined || liked === true) {
            setLiked(false);
            setValue(score - 1);
          } else {
            setLiked(undefined);
            setValue(score);
          }
        }}
      />
    </Voting>
  );
}
