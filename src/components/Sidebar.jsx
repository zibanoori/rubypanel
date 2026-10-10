import {
  LayoutDashboard,
  ChartNoAxesCombined,
  Users,
  Wrench,
} from "lucide-react";

const menuItem = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Users", icon: Users },
  { label: "Analytics", icon: ChartNoAxesCombined },
  { label: "Wrench", icon: Wrench },
];

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-slate-950 px-5 py-6 text-white md:flex">
      <div>
        <div></div>
      </div>
    </aside>
  );
}

export default Sidebar;
