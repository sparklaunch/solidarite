import { ChangeEvent, useCallback } from "react";
import debouncer from "../utils/debouncer";

interface SearchFieldProps {
    input: string;
    setInput: (input: string) => void;
    setSearchInput: (input: string) => void;
}

const SearchField = ({ input, setInput, setSearchInput }: SearchFieldProps) => {
    const inputDebouncer = useCallback(
        debouncer((value) => {
            setSearchInput(value);
        }, 150),
        []
    );
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        inputDebouncer(event.target.value);
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
