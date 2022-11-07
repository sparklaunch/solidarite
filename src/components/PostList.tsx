import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import Page from "../utils/Page";

interface PostListProps {
    currentTab: string;
}

const PostList = ({ currentTab }: PostListProps) => {
    const { data, error, isLoading, fetchNextPage, refetch } = useInfiniteQuery(
        ["posts"],
        async ({ pageParam = 0 }) => {
            const previousTab = sessionStorage.getItem("previousTab");
            const response = await axios.get(
                `https://recruit-api.yonple.com/recruit/778382/${
                    previousTab || currentTab.toLowerCase()
                }-posts?page=${pageParam}`
            );
            sessionStorage.removeItem("previousTab");
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
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchOnReconnect: true,
            retry: 1,
        }
    );
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
    useEffect(() => {
        refetch();
    }, [currentTab]);
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
        <div className="border-2 border-gray-100 rounded-md p-3 mb-5">
            {posts.map((post) => {
                return <PostItem post={post} key={post.id} />;
            })}
        </div>
    );
};

export default PostList;
