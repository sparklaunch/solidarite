import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return <div className="w-[800px] mx-auto mt-10">{children}</div>;
};

export default Layout;
