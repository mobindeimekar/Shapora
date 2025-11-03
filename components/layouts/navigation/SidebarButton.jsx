'use client'

import Menu from "@/public/icons/menu-2.svg";
import { sidebarActions } from "@/redux/sidebarSlice";
import { useDispatch } from "react-redux";




export default function SidebarButton() {

    const dispatch = useDispatch()
    
    function toggleSidebar() {
        dispatch(sidebarActions.toggleSidebar())
    }

    return (
        <button className="flex items-center gap-x-2 lg:hidden " onClick={toggleSidebar}>
            <Menu className="h-7 w-7 lg:h-6 md:w-6 "></Menu>
            <span>Menu</span>
        </button>
    )
}