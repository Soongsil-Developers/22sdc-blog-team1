import React from 'react'

const Article = () => {
  return (
<div class="article-preview">
    <div class="article-meta">
        <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
            <div class="info">
                <a href="" class="author">시몬스</a>
                <span class="date">January 20th</span>
            </div>       
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
                    <i class="ion-heart"></i> 29
            </button>
    </div>
    <a href="" class="preview-link">
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
    </a>
</div>
  )
}

export default Article