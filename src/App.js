import "./App.css";
import AddPostForm from "./components/mainComponents/AddPostForm";
import PostList from "./components/mainComponents/PostList";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
