import React from "react";
import styled from "styled-components";
import moment from "moment";
import numeral from "numeral";
import Thumb from "./thumbnail";
import Vote from "./vote";

export default function({ data }) {
  return (
    <li>
      <A href={data.url}>
        <Post>
          <Voting>
            <Vote kind="up" />
            <Score>{numeral(data.score).format("0.0a")}</Score>
            <Vote kind="down" />
          </Voting>
          <Detail>
            <Thumbnail>
              <Thumb data={data} />
            </Thumbnail>
            <Block>
              <Description>
                <Title>{data.title}</Title>
                <Domain>({data.domain})</Domain>
              </Description>
              <Row>
                <Submission>
                  <div>
                    submitted {moment.unix(data.created_utc).fromNow()} hours
                    ago by{" "}
                    <Author>
                      <a href={`https://www.reddit.com/user/${data.author}`}>
                        {data.author}
                      </a>
                    </Author>{" "}
                    to{" "}
                    <Subreddit>
                      <a href={`https://www.reddit.com/r/${data.subreddit}`}>
                        r/{data.subreddit}
                      </a>
                    </Subreddit>
                  </div>
                  <a href={`https://www.reddit.com/${data.permalink}`}>
                    {data.num_comments} comments
                  </a>
                </Submission>
              </Row>
            </Block>
          </Detail>
        </Post>
      </A>
    </li>
  );
}

const Voting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 3rem;
`;

const Post = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 0.75rem;
`;

const Block = styled.div`
  && {
    padding-left: 0.5rem;
    flex-shrink: 0;
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

const Score = styled.div``;

const Thumbnail = styled.div`
  flex: 0 0 140px;
`;

const Detail = styled.div`
  && {
    align-items: flex-start;
    display: flex;
    padding-left: 0.75rem;
  }
`;

const Title = styled.span`
  font-size: 1.25rem;
  padding-right: 0.25rem;
  color: blue;
`;

const Domain = styled.span`
  font-size: 0.75rem;
  color: blue;
`;

const Author = styled.span`
  font-weight: 800;
`;

const Subreddit = styled.span`
  font-weight: 800;
`;

const Description = styled.div`
  && {
    align-items: baseline;
  }
`;
const Submission = styled.div`
  && {
    font-size: 0.75rem;
    align-items: baseline;
  }
`;
