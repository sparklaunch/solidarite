import { useInfiniteQuery } from "react-query";
import axios from "axios";
import PostItem from "./PostItem";
import Post from "../utils/Post";

const PostList = () => {
    const { data, error, isLoading } = useInfiniteQuery(
        "posts",
        ({ pageParam = 1 }) => {
            return axios.get(
                "https://recruit-api.yonple.com/recruit/778382/a-posts?page=0"
            );
        }
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>error</div>;
    }
    const posts = data?.pages[0].data as Post[];
    return (
        <div>
            {posts.map((post) => {
                return <PostItem post={post} key={post.id} />;
            })}
        </div>
    );
};

export default PostList;
