import PostTabItem from "./PostTabItem";
import { useState } from "react";

const PostTab = () => {
    const [currentTab, setCurrentTab] = useState("A");
    return (
        <div className="flex">
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
