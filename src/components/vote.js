import React from "react";
import styled from "styled-components";

const Upvote = styled.i`
  font-style: normal;
  &.icon-upvote:before {
    content: "\\F13C";
  }
  &.icon:before {
    font-family: redesignFont;
  }
`;

const Downvote = styled.i`
  font-style: normal;
  &.icon-downvote:before {
    content: "\\F110";
  }
  &.icon:before {
    font-family: redesignFont;
  }
`;

const Button = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #1a1a1b1a;

    & ${Upvote} {
      color: #cc3700;
    }
    & ${Downvote} {
      color: #5a75cc;
    }
  }
`;

export default function({ kind, vote }) {
  switch (kind) {
    case "down":
      return (
        <Button onClick={vote}>
          <Downvote className="icon icon-downvote"></Downvote>
        </Button>
      );

    default:
      return (
        <Button onClick={vote}>
          <Upvote className="icon icon-upvote"></Upvote>
        </Button>
      );
  }
}
