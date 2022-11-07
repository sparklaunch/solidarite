import { useState } from "react";

const SearchField = () => {
    const [input, setInput] = useState("");
    return (
        <div className="my-5">
            <input
                className="border-2 border-gray-300 rounded-md p-2 pl-5 w-[300px] mx-auto block"
                type="text"
                placeholder="검색어를 입력하세요"
                value={input}
                onChange={(event) => {
                    setInput(event.target.value);
                }}
            />
        </div>
    );
};

export default SearchField;
