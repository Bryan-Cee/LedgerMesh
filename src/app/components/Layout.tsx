import { Outlet } from "react-router";
import { BottomNav } from "./BottomNav";

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-[412px] mx-auto relative">
      <main className="flex-1 pb-[80px]">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
