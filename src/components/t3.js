import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import Thumb from "./thumbnail";
import Score from "./score";
import { Link } from "react-router-dom";

export default function({ data }) {
  const [score, setScore] = useState(data.score);
  return (
    <li>
      <Post>
        <Score score={score} setScore={setScore} />
        <Detail>
          <A href={data.url}>
            <Thumbnail>
              <Thumb data={data} />
            </Thumbnail>
          </A>

          <Block>
            <A href={data.url}>
              <Description>
                <Title>{data.title}</Title>
                <Domain>({data.domain})</Domain>
              </Description>
            </A>
            <Row>
              <Submission>
                <div>
                  submitted {moment.unix(data.created_utc).fromNow()}
                  by{" "}
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
                <Link to={data.permalink}>{data.num_comments} comments</Link>
              </Submission>
            </Row>
          </Block>
        </Detail>
      </Post>
    </li>
  );
}

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
