import Layout from "../components/Layout";
import Header from "../components/Header";
import SearchField from "../components/SearchField";
import PostTab from "../components/PostTab";
import PostList from "../components/PostList";
import { useState } from "react";
import SearchResult from "../components/SearchResult";

const Main = () => {
    const [currentTab, setCurrentTab] = useState("A");
    const [input, setInput] = useState("");
    return (
        <Layout>
            <Header />
            <SearchField input={input} setInput={setInput} />
            <PostTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
            {input.length === 0 ? (
                <PostList currentTab={currentTab} />
            ) : (
                <SearchResult input={input} currentTab={currentTab} />
            )}
        </Layout>
    );
};

export default Main;
