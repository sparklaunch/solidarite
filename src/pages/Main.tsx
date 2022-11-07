import Layout from "../components/Layout";
import Header from "../components/Header";
import SearchField from "../components/SearchField";
import PostTab from "../components/PostTab";

const Main = () => {
    return (
        <Layout>
            <Header />
            <SearchField />
            <PostTab />
        </Layout>
    );
};

export default Main;
