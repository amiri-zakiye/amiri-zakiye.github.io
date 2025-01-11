"use client";
import { replace } from "@/utils/formatters";
import { Category } from "../types";
import Link from "next/link";
import { useMegaMenuContext } from "../context";
import useMegaMenuLayout from "../hooks/useMegaMenuLayout";


const MegaMenuSideNav = ({data}: {data: Category[]}) => {
    const {activeMenuItemIndex,setActiveMenuItemIndex} = useMegaMenuContext();
    const {mainCategoriesRef} = useMegaMenuLayout()

    return(
        <ul ref={mainCategoriesRef} className="flex flex-col bg-neutral-100 rounded-bl-sm border-l border-neutral-100 w-[200px] overflow-auto h-full ltr scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {data.map((item) => (
            <li
                key={item.id}
                onMouseEnter={() => setActiveMenuItemIndex(item.id)}
                className="rtl"
            >
                <Link
                    href={item.url}
                    className={`flex text-body-2 items-center py-3 px-2  border-b border-t hover:bg-white hover:border-t-neutral-100 border-t-transparent hover:border-b-neutral-100 border-b-transparent ${
                        item.id === activeMenuItemIndex ? "bg-white border-t-neutral-100 border-b-neutral-100" : ""
                    }`}
                >
                    <svg
                        className={`ml-2 fill-current ${item.id === activeMenuItemIndex ? "text-primary-700" : "text-neutral-700"}`}
                        width="18"
                        height="18"
                    >
                        <use
                            xlinkHref={`#${replace(item.icon, ["cube", "action", "cat", "-"], "")}`}
                        ></use>
                    </svg>
                    <p
                        className={`text-neutral-700 font-bold ${
                            item.id === activeMenuItemIndex ? "text-primary-700" : ""
                        }`}
                    >
                        {item.title}
                    </p>
                </Link>
            </li>
        ))}
    </ul>

    )
} 

export default MegaMenuSideNav;