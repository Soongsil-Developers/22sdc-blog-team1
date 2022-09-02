import React from "react";
import WritterInfo from "../WritterInfo";

const ArticleComment = () => {
  return (
    <div class="row">
      <div class="col-xs-12 col-md-8 offset-md-2">
        <form class="card comment-form">
          <div class="card-block">
            <textarea
              class="form-control"
              placeholder="Write a comment..."
              rows="3"
            ></textarea>
          </div>
          <div class="card-footer">
            <img
              src="http://i.imgur.com/Qr71crq.jpg"
              class="comment-author-img"
            />
            <button class="btn btn-sm btn-primary">Post Comment</button>
          </div>
        </form>

        <div class="card">
          <div class="card-block">
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div class="card-footer">
            <div class="article-meta">
              <WritterInfo />
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-block">
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div class="card-footer">
            <div class="article-meta">
              <WritterInfo />
            </div>
            <span class="mod-options">
              <i class="ion-edit"></i>
              <i class="ion-trash-a"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComment;
