import { ChangeEvent, useCallback, useState } from "react";
import debouncer from "../utils/debouncer";

const SearchField = () => {
    const [input, setInput] = useState("");
    const printValue = useCallback(
        debouncer((value) => {
            console.dir(value);
        }, 150),
        []
    );
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        printValue(event.target.value);
        setInput(event.target.value);
    };
    return (
        <div className="my-5">
            <input
                className="border-2 border-gray-300 rounded-md p-2 pl-5 w-[300px] mx-auto block"
                type="text"
                placeholder="검색어를 입력하세요"
                value={input}
                onChange={changeHandler}
            />
        </div>
    );
};

export default SearchField;
