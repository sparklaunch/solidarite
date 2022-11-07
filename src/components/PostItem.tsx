import Post from "../utils/Post";

const PostItem = ({ post }: { post: Post }) => {
    return (
        <div>
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
