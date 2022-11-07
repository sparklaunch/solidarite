import Layout from "../components/Layout";
import Header from "../components/Header";
import SearchField from "../components/SearchField";
import PostTab from "../components/PostTab";
import PostList from "../components/PostList";
import { useState } from "react";

const Main = () => {
    const [currentTab, setCurrentTab] = useState("A");
    return (
        <Layout>
            <Header />
            <SearchField />
            <PostTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <PostList currentTab={currentTab} />
        </Layout>
    );
};

export default Main;
