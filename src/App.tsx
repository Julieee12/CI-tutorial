import { useState, useEffect } from "react";
import "./App.css";
import { Api, PostModel } from "./api";
import { Layout, WelcomeHero } from "./components/layout";
import { PostList } from "./components/post-list";

function App() {
    const [posts, setPosts] = useState<PostModel[]>([]); // Initialize state for posts
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await new Api().postList(); // Await the API call
                setPosts(posts); // Set the posts in state
            } catch (error) {
                console.error("Failed to fetch posts", error);
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchPosts(); // Call the function to fetch posts
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <Layout>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <WelcomeHero />
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <div className="divider"></div>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            {loading ? <div>Loading...</div> : <PostList posts={posts} />} {/* Conditional rendering */}
        </Layout>
    );
}

export default App;
