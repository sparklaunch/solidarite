import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import PostDetail from "../pages/PostDetail";
import { useState } from "react";

const Router = () => {
    const [input, setInput] = useState("");
    const [currentTab, setCurrentTab] = useState("A");
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main
                            input={input}
                            setInput={setInput}
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                        />
                    }
                />
                <Route
                    path="/posts"
                    element={
                        <Main
                            input={input}
                            setInput={setInput}
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                        />
                    }
                />
                <Route path="/posts/:postToken" element={<PostDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
