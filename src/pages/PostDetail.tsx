import { useNavigate, useParams } from "react-router";
import { useQuery } from "react-query";
import axios from "axios";
import Post from "../utils/Post";
import Layout from "../components/Layout";

const PostDetail = () => {
    const { postToken } = useParams();
    const navigator = useNavigate();
    const type = postToken?.slice(0, 1);
    const postID = postToken?.slice(1);
    const { data, isLoading, error } = useQuery(["postDetail"], () => {
        return axios.get(
            `https://recruit-api.yonple.com/recruit/${process.env.REACT_APP_TOKEN}/${type}-posts/${postID}`
        );
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    const post = data?.data as Post;
    const { title, content } = post;
    return (
        <Layout>
            <div className="border-2 border-gray-100 rounded-md p-8 mb-3">
                <div className="mb-5">
                    <h1 className="text-3xl text-center">{title}</h1>
                </div>
                <div>
                    <p className="text-sm">{content}</p>
                </div>
            </div>
            <div>
                <button
                    className="bg-blue-500 rounded-md p-2 px-5 text-white hover:brightness-125"
                    onClick={() => {
                        navigator(-1);
                    }}
                >
                    뒤로 가기
                </button>
            </div>
        </Layout>
    );
};

export default PostDetail;
