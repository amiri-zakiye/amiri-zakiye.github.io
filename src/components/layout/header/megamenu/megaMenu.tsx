"use client";

import MegaMenuSideNav from "./megaMenuSideNav";
import { useMegaMenuContext } from "../context";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/apiClient";
import { Category } from "../types";
import MegaMenuBody from "./megaMenuBody";

const   MegaMenu = () => {
    const { isMegaMenuVisible,displayMegaMenu,hideMegaMenu,megaMenuHeight} = useMegaMenuContext();
    const [megaMenuData, setMegaMenuData] = useState<Category[]>([]);

    useEffect(() => {
        apiClient.get("api/megaMenu").then((data: Category[]) => {
            setMegaMenuData(data)
        });

        console.log("megaMenuHeight",megaMenuHeight) 
    }, []);

    return(
        <div 
        style={{
            height: isMegaMenuVisible ? megaMenuHeight : 0,
        }}
        onMouseLeave={hideMegaMenu}
        onMouseEnter={displayMegaMenu}
        className={`megamenu ${isMegaMenuVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <MegaMenuSideNav data={megaMenuData} />
            <div className="overflow-y-auto flex-wrap flex-1 ltr h-full" >
                <MegaMenuBody data={megaMenuData} />
            </div>
        </div>
    )
}

export default MegaMenu;