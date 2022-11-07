const debouncer = (callback: (value: string) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return (value: string) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
};

export default debouncer;
