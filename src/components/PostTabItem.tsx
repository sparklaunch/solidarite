interface PostTabItemProps {
    tabID: string;
    isActive: boolean;
    setCurrentTab: (tabID: string) => void;
}

const PostTabItem = ({ tabID, isActive, setCurrentTab }: PostTabItemProps) => {
    const tabClickHandler = () => {
        setCurrentTab(tabID);
    };
    return (
        <div
            className="cursor-pointer hover:bg-gray-100 p-3 rounded-md"
            onClick={tabClickHandler}
        >
            <p className={isActive ? "text-blue-500" : "text-black"}>
                {tabID.toUpperCase()} Posts
            </p>
        </div>
    );
};

export default PostTabItem;
