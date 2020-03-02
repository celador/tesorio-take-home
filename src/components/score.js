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
export default function({ score, setScore }) {
  const [liked, setLiked] = useState();
  return (
    <Voting>
      <Vote
        kind="up"
        liked={liked}
        onClick={() => {
          if (liked === undefined) {
            setLiked(true);
            setScore(score + 1);
          } else if (liked === false) {
            setLiked(true);
            setScore(score + 2);
          } else {
            setLiked(undefined);
            setScore(score - 1);
          }
        }}
      />
      {score >= 1000 ? (
        <div className="score">{numeral(score).format("0.0a")}</div>
      ) : (
        <div className="score">{numeral(score).format("0")}</div>
      )}
      <Vote
        kind="down"
        liked={liked}
        onClick={() => {
          if (liked === undefined) {
            setLiked(false);
            setScore(score - 1);
          } else if (liked === true) {
            setLiked(false);
            setScore(score - 2);
          } else {
            setLiked(undefined);
            setScore(score + 1);
          }
        }}
      />
    </Voting>
  );
}
