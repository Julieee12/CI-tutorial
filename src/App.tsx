import "./App.css";
import { Api } from "./api";
import { Layout, WelcomeHero } from "./components/layout";
import { PostList } from "./components/post-list";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {React} from "react";

function App() {
    const posts = new Api().postList();
    return (
        <Layout>
            <WelcomeHero></WelcomeHero>
            <div className="divider"></div>
            <PostList posts={posts}></PostList>
        </Layout>
    );
}

export default App;