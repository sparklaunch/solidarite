import PostTabItem from "./PostTabItem";

interface PostTabProps {
    currentTab: string;
    setCurrentTab: (tabID: string) => void;
}

const PostTab = ({ currentTab, setCurrentTab }: PostTabProps) => {
    return (
        <div className="flex mb-2">
            <PostTabItem
                tabID="A"
                isActive={currentTab === "A"}
                setCurrentTab={setCurrentTab}
            />
            <PostTabItem
                tabID="B"
                isActive={currentTab === "B"}
                setCurrentTab={setCurrentTab}
            />
        </div>
    );
};

export default PostTab;
