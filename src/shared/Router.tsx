import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import PostDetail from "../pages/PostDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/posts" element={<Main />} />
                <Route path="/posts/:postToken" element={<PostDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
