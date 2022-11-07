import Layout from "../components/Layout";
import Header from "../components/Header";
import SearchField from "../components/SearchField";
import PostTab from "../components/PostTab";
import PostList from "../components/PostList";
import SearchResult from "../components/SearchResult";

interface MainProps {
    input: string;
    setInput: (input: string) => void;
    currentTab: string;
    setCurrentTab: (tab: string) => void;
    searchInput: string;
    setSearchInput: (input: string) => void;
}

const Main = ({
    input,
    setInput,
    currentTab,
    setCurrentTab,
    setSearchInput,
    searchInput
}: MainProps) => {
    return (
        <Layout>
            <Header />
            <SearchField
                input={input}
                setInput={setInput}
                setSearchInput={setSearchInput}
            />
            <PostTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
            {input.length === 0 ? (
                <PostList currentTab={currentTab} />
            ) : (
                <SearchResult
                    currentTab={currentTab}
                    searchInput={searchInput}
                />
            )}
        </Layout>
    );
};

export default Main;
