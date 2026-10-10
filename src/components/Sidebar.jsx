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
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-900 text-amber-300">
          <LayoutDashboard size={22} />
        </div>
        <h1 className="text-xl font-bold">
          Ruby<span className="text-rose-300">Panel</span>
        </h1>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Main Menu
        </p>
        <nav className="space-y-2"></nav>
      </div>
    </aside>
  );
}

export default Sidebar;
