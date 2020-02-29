import React from "react";
import styled from "styled-components";
import { gray, up, down } from "./../services/colors";

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
    background-color: ${gray};

    & ${Upvote} {
      color: ${up};
    }
    & ${Downvote} {
      color: ${down};
    }
  }

  & {
    & ${Upvote}.selected {
      color: ${up};
    }
    & ${Downvote}.selected {
      color: ${down};
    }
  }
`;

export default function({ kind, liked, onClick }) {
  switch (kind) {
    case "down":
      return (
        <Button onClick={onClick}>
          <Downvote
            className={`icon icon-downvote ${liked !== undefined &&
              !liked &&
              "selected"}`}
          ></Downvote>
        </Button>
      );

    default:
      return (
        <Button onClick={onClick}>
          <Upvote
            className={`icon icon-upvote ${liked !== undefined &&
              liked &&
              "selected"}`}
          ></Upvote>
        </Button>
      );
  }
}
