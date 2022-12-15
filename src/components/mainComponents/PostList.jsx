import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchPosts,
  getPostsError,
  getPostStatus,
  selectAllPosts,
} from "../../redux/postSlice";
import PostAuthor from "../subComponents/PostAuthor";
import Reactions from "../subComponents/Reactions";
import TimeStamp from "../subComponents/TimeStamp";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") dispatch(fetchPosts());
  }, [postStatus]);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  let content;
  if (postStatus === "loading") content = <p>"Loading... Please wait..."</p>;
  else if (postStatus === "succeeded") {
    content = orderedPosts.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userID} />
          <TimeStamp timestamp={post.date} />
        </p>
        <Reactions post={post} />
      </article>
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }
  
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
