import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../redux/postSlice";
import PostAuthor from "../subComponents/PostAuthor";
import Reactions from "../subComponents/Reactions";
import TimeStamp from "../subComponents/TimeStamp";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userID} />
        <TimeStamp timestamp={post.date} />
      </p>
      <Reactions post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
