import Logo from "@/components/Logo/Logo";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";

export default function Sidebar() {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col border">
        <Logo/>
        <SidebarRoutes/>
      </div>
    </div>
  )
}
