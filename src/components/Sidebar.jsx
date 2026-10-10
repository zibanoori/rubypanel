import {
  LayoutDashboard,
  ChartNoAxesCombined,
  Users,
  Wrench,
  FileText,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Users", icon: Users },
  { label: "Analytics", icon: ChartNoAxesCombined },
  { label: "Tools", icon: Wrench },
  { label: "Reports", icon: FileText },
];

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0  w-64 flex-col bg-slate-950 px-5 py-6 text-white md:flex">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-900 text-amber-300">
          <LayoutDashboard size={22} />
        </div>
        <h1 className="text-xl font-bold">
          Ruby<span className="text-rose-300">Panel</span>
        </h1>
      </div>
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
        Main Menu
      </p>
      <nav className="space-y-2">
        {menuItems.map(({ label, icon: Icon }, index) => (
          <button
            key={label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
              index === 0
                ? "bg-rose-900 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <Icon size={19} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-slate-800 p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span className="text-sm font-medium">System Online</span>
        </div>

        <p className="mt-2 text-xs leading-5 text-slate-400">
          Your workspace is running smoothly
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
