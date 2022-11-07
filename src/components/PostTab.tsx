import PostTabItem from "./PostTabItem";
import { useEffect } from "react";

interface PostTabProps {
    currentTab: string;
    setCurrentTab: (tabID: string) => void;
}

const PostTab = ({ currentTab, setCurrentTab }: PostTabProps) => {
    useEffect(() => {
        const previousTab = sessionStorage.getItem("previousTab");
        if (previousTab) {
            setCurrentTab(previousTab);
        } else {
            setCurrentTab("a");
        }
    }, []);
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
