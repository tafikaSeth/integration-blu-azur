import type { ReactNode } from "react";
import Navbar from "../app-header";
import Footer from "../app-footer";

interface MainLayoutProps {
    children: ReactNode;
    fullWidth?: boolean;
}

export default function MainLayout({ children, fullWidth = true }: MainLayoutProps) {

    return (
        <>
            <Navbar />
            <div
                className={`flex-1 ${fullWidth ? "" : "flex justify-center items-center"
                    }`}
            >
                <div className={fullWidth ? "w-full" : "w-full max-w-7xl"}>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
}
