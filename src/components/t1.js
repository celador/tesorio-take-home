import React, { useState, useRef } from "react";
import styled from "styled-components";
import moment from "moment";
import numeral from "numeral";

import Score from "./score";
import Provider from "./provider";
import Comment from "../models/Comment";
import Listing from "../models/Listing";

const Reply = styled.textarea`
  width: 100%;
`;

export default function(props) {
  const [replying, setReplying] = useState(false);
  const [data, setData] = useState(props.data);
  const reply = useRef(null);
  const comment = useRef(null);

  const showReply = () => {
    setReplying(true);
  };

  const save = () => {
    const { value } = reply.current;
    const comment = new Comment();
    comment.data.body = value;

    if (!data.replies) {
      data.replies = new Listing();
    }
    data.replies.data.children.push(comment);
    setData(data);
    setReplying(false);
  };

  const cancel = () => {
    setReplying(false);
  };

  return (
    <li>
      <Wrapper ref={comment}>
        <Score score={data.score} />
        <Detail>
          <Block>
            <Description>
              <Author>
                {data.author} {numeral(data.score).format("0")} {} points{" "}
              </Author>
              <div>{moment.unix(data.created_utc).fromNow()}</div>
            </Description>
            <Body>{data.body}</Body>
            {replying ? (
              <div>
                <div>
                  <Reply ref={reply}></Reply>
                </div>
                <div>
                  <button onClick={save}>save</button>
                  <button onClick={cancel}>cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <button onClick={showReply}>reply</button>
              </div>
            )}
          </Block>
        </Detail>
      </Wrapper>
      {data.replies && <Provider json={data.replies} />}
    </li>
  );
}

const Body = styled.div`
  margin-bottom: 0.25rem;
`;

const Wrapper = styled.div`
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

const Detail = styled.div`
  && {
    align-items: flex-start;
    display: flex;
    padding-left: 0.75rem;
  }
`;

const Author = styled.span`
  font-weight: 800;
  padding-right: 0.75rem;
`;

const Description = styled.div`
  && {
    display: flex;
    align-items: baseline;
    margin-bottom: 0.5rem;
  }
`;
