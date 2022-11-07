import Post from "./Post";

interface Page {
    isLast: boolean;
    nextPage: number;
    result: Post[];
}

export default Page;
