import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRecoilValue,useRecoilState } from "recoil";
import { commentsState, slugState,authState} from "../../atoms/auth";
import { getComment, getLoginComment} from "../../remote/index";
import WritterInfo from "../WritterInfo";


const ShowComment = () => {
  const slug = useRecoilValue(slugState);
  const [comments, setComments] = useRecoilState(commentsState);
  const auth = useRecoilValue(authState)
  
  

  useEffect(() => {
    auth ? (getLoginComment(slug)
      .then((res) => {
        setComments(res.data.comments)
      })
      .catch((err) => {
        console.log(err);
      })) 
      : (getComment(slug)
      .then((res) => {
        setComments(res.data.comments)
      })
      .catch((err) => {
        console.log(err);
      })) 
  }, [comments.length]);

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
          {comments.map((data) => 
            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  {data.body}
                </p>
              </div>
              <div className="card-footer">
                <div className="article-meta">
                  <WritterInfo data={data}/>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ShowComment;
