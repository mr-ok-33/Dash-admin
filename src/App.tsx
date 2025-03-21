import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";
import userList from "./pages/users/users-list";
import userShow from "./pages/users/userShow";
import { PostEdit } from "./pages/posts/postEdit";
import PostShow from "./pages/users/userShow";
import postCreate from "./pages/posts/postCreate";
import ArticleIcon from "@mui/icons-material/Article";
import personIcon from "@mui/icons-material/Person";
import homePage from "./pages/homePage";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} dashboard={homePage} authProvider={authProvider}>
    <Resource
      name="posts"
      icon={ArticleIcon}
      list={PostList}
      show={PostShow}
      edit={PostEdit}
      create={postCreate}
    ></Resource>
    <Resource icon={personIcon} name="users" list={userList} show={userShow}></Resource>
  </Admin>
);
