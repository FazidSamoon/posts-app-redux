import { useSelector } from "react-redux";
import { selectAllUsers } from "../../redux/userSlice";

const PostAuthor = ({ userId }) => {
  const user = useSelector(selectAllUsers);
  const author = user.find((user) => user.id === userId);
  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
