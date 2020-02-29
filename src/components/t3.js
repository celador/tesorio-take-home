import React from "react";
import styled from "styled-components";
import moment from "moment";
import numeral from "numeral";

const Post = styled.li`
  & div {
    display: flex;
    align-items: center;
  }
`;

const Block = styled.div`
  && {
    display: block;
  }
`;
const Row = styled.div`
  && {
    display: flex;
  }
`;
const A = styled.a`
  text-decoration: none;
  color: gray;
`;

export default function({ data }) {
  console.log(data);
  return (
    <A href={data.url}>
      <Post>
        <div>
          <div>{numeral(data.score).format("0.0a")}</div>
          <div>
            {data.thumbnail && data.thumbnail !== "nsfw" && (
              <img src={data.thumbnail} alt="thumbnail"></img>
            )}
          </div>

          <Block>
            <div>
              {data.title}({data.domain})
            </div>
            <Row>
              <div>
                <button>play</button>
              </div>
              <Block>
                <div>
                  submitted {moment.unix(data.created_utc).fromNow()} hours ago
                  by {data.author} tag to {data.subreddit}
                </div>
              </Block>
            </Row>
          </Block>
        </div>
      </Post>
    </A>
  );
}
