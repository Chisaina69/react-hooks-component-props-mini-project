import Article from "./Article";
import React from "react";
const ArticleList = ({ posts }) => {
  return (
    <>
      <main>
        {posts.map((post, index) => (
          <Article
            key={index}
            title={post.title}
            preview={post.preview}
            date={post.date}
          />
        ))}
      </main>
    </>
  );
};

export default ArticleList;
