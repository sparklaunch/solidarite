import Layout from "../components/Layout";
import Header from "../components/Header";
import SearchField from "../components/SearchField";
import PostTab from "../components/PostTab";
import PostList from "../components/PostList";

const Main = () => {
    return (
        <Layout>
            <Header />
            <SearchField />
            <PostTab />
            <PostList />
        </Layout>
    );
};

export default Main;
