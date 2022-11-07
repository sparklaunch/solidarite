import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Page from "../utils/Page";
import Post from "../utils/Post";
import PostItem from "./PostItem";

interface SearchResultProps {
    currentTab: string;
    searchInput: string;
}

const SearchResult = ({ currentTab, searchInput }: SearchResultProps) => {
    const { data, isLoading, error, fetchNextPage, refetch } = useInfiniteQuery(
        ["searchResults"],
        async ({ pageParam = 0 }) => {
            const response = await axios.get(
                `https://recruit-api.yonple.com/recruit/778382/${currentTab}-posts?search=${searchInput}&page=${pageParam}`
            );
            const result = response.data;
            return {
                result,
                nextPage: pageParam + 1,
                isLast: result.isLast
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
            retry: 1
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
    }, [searchInput]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    const pages = data?.pages as Page[];
    const posts: Post[] = [];
    for (const page of pages) {
        for (const post of page.result) {
            posts.push(post);
        }
    }
    return (
        <div className="border-2 border-gray-100 rounded-md p-3">
            {posts.map((post) => {
                return <PostItem post={post} key={post.id} />;
            })}
        </div>
    );
};

export default SearchResult;
