import Post from "../utils/Post";
import { useNavigate } from "react-router";

interface PostProps {
    post: Post;
}

const PostItem = ({ post }: PostProps) => {
    const navigator = useNavigate();
    const clickHandler = () => {
        navigator(`/posts/${post.type}${post.id}`);
    };
    return (
        <div
            className="cursor-pointer hover:bg-gray-100 p-5 rounded-md"
            onClick={clickHandler}
        >
            <div className="flex">
                <p className="mr-1 text-blue-600">{post.id}.</p>
                <p>{post.title}</p>
            </div>
            <div>
                <p className="text-sm line-clamp-3 overflow-hidden text-ellipsis">
                    {post.content}
                </p>
            </div>
        </div>
    );
};

export default PostItem;
