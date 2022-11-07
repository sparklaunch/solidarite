import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../utils/Post";
import PostItem from "./PostItem";

interface Page {
    isLast: boolean;
    nextPage: number;
    result: Post[];
}

const PostList = () => {
    const { data, error, isLoading, fetchNextPage } = useInfiniteQuery(
        ["posts"],
        async ({ pageParam = 0 }) => {
            const response = await axios.get(
                `https://recruit-api.yonple.com/recruit/778382/a-posts?page=${pageParam}`
            );
            const result = response.data;
            return {
                result,
                nextPage: pageParam + 1,
                isLast: result.isLast,
            };
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (!lastPage.isLast) {
                    return lastPage.nextPage;
                }
            },
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: true,
            retry: 1,
        }
    );
    const [currentPage, setCurrentPage] = useState(0);
    const [scroll, setScroll] = useState(0);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    const watchScroll = () => {
        window.addEventListener("scroll", handleScroll);
    };
    useEffect(() => {
        watchScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    useEffect(() => {
        if (
            scroll + window.innerHeight >= document.body.scrollHeight &&
            document.body.scrollHeight > window.innerHeight
        ) {
            fetchNextPage();
        }
    }, [scroll]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>error</div>;
    }
    const pages = data?.pages as Page[];
    const posts = [];
    for (const page of pages) {
        for (const post of page.result) {
            posts.push(post);
        }
    }
    return (
        <div className="border-2 border-gray-100 rounded-md p-5 grid gap-5 mb-5">
            {posts.map((post) => {
                return <PostItem post={post} key={post.id} />;
            })}
        </div>
    );
};

export default PostList;
