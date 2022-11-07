import PostTabItem from "./PostTabItem";

interface PostTabProps {
    currentTab: string;
    setCurrentTab: (tabID: string) => void;
}

const PostTab = ({ currentTab, setCurrentTab }: PostTabProps) => {
    return (
        <div className="flex mb-2">
            <PostTabItem
                tabID="a"
                isActive={currentTab === "a"}
                setCurrentTab={setCurrentTab}
            />
            <PostTabItem
                tabID="b"
                isActive={currentTab === "b"}
                setCurrentTab={setCurrentTab}
            />
        </div>
    );
};

export default PostTab;
