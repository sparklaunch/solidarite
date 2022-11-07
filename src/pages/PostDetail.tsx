import { useParams } from "react-router";
import { useQuery } from "react-query";
import axios from "axios";

const PostDetail = () => {
    const { postToken } = useParams();
    const type = postToken?.slice(0, 1);
    const postID = postToken?.slice(1);
    const { data, isLoading, error } = useQuery(["postDetail"], () => {
        return axios.get(
            `https://recruit-api.yonple.com/recruit/778382/${type}-posts/${postID}`
        );
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    console.dir(data?.data);
    return <div></div>;
};

export default PostDetail;
