import React from "react";
import styled from "styled-components";
import moment from "moment";
import numeral from "numeral";
import Thumb from "./thumbnail";

export default function({ data }) {
  return (
    <A href={data.url}>
      <li>
        <Post>
          <Score>{numeral(data.score).format("0.0a")}</Score>
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
                {/* <div>
                  <button>play</button>
                </div> */}
                <Submission>
                  <div>
                    submitted {moment.unix(data.created_utc).fromNow()} hours
                    ago by <Author>{data.author}</Author> to{" "}
                    <Subreddit>r/{data.subreddit}</Subreddit>
                  </div>
                  <div>{data.num_comments} comments</div>
                </Submission>
              </Row>
            </Block>
          </Detail>
        </Post>
      </li>
    </A>
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

const Score = styled.div`
  flex: 0 0 3rem;
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
