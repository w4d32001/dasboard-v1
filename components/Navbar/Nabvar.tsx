import React from "react";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { ToggleTheme } from "@/components/ToggleTheme";

export default function Nabvar() {
  return (
    <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between bg-background w-full border-b h-20">
      <div className="block md:hidden dark:text-gray-100">
        <Sheet>
            <SheetTrigger className="flex items-center">
                <Menu className=""/>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-100 text-gray-900 dark:bg-gray-900">
                <SidebarRoutes/>
            </SheetContent>
        </Sheet>
      </div>
      <div className="relative w-[300px]">
        <Input placeholder="Search..." className="rounded-lg pr-8"/>
        <Search strokeWidth={1} className="absolute top-2 right-2"/>
      </div>
      <div className="flex gap-x-2 items-center">
        <ToggleTheme/>
        <UserButton/>
      </div>
    </nav>
  );
}
