import {
  TfiLinkedin,
  TfiYoutube,
  TfiInstagram,
  TfiEmail,
} from "react-icons/tfi";
import { VscGithubInverted } from "react-icons/vsc";
function Main() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 md:ml-64">
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>
            <p className="mt-1 text-sm text-slate-500">
              Welcome back, here's what's happening today.
            </p>
          </div>
          <button className="rounded-xl bg-rose-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-rose-800">
            + New Report
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Total Users",
              value: "2,840",
              change: "+12.8%",
              color: "violet",
            },
            {
              label: "Revenue",
              value: "$18.4k",
              change: "+8.4%",
              color: "emerald",
            },
            {
              label: "Active Tools",
              value: "24",
              change: "+3",
              color: "amber",
            },
            { label: "Reports", value: "156", change: "+5.2%", color: "rose" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    stat.color === "emerald"
                      ? "bg-emerald-50 text-emerald-600"
                      : stat.color === "violet"
                        ? "bg-violet-50 text-violet-600"
                        : stat.color === "amber"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-rose-50 text-rose-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-6">
          <h3 className="text-xl font bold text-slate-900 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            Live System & Activity
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/20 bg-white/50 p-8 shadow-xl backdrop-blur-md">


        </div>
        </div>
      </main>
      <footer className="border-t border-slate-200 pt-6 pb-8 px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            RubyPanel © {new Date().getFullYear()} — Designed & Built by{" "}
            <span className="font-semibold text-rose-900">Ziba Nooriraj</span>
          </p>
          <div className="flex items-center gap-6 text-slate-500">
            <a
              href="https://github.com/zibanoori"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-rose-900 transition-colors"
            >
              <VscGithubInverted size={22} />
            </a>
            <a
              href="https://linkedin.com/in/ziba-nouri"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition-colors"
            >
              <TfiLinkedin size={20} />
            </a>
            <a
              href="https://youtube.com/@zibanoori"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-red-600 transition-colors"
            >
              <TfiYoutube size={20} />
            </a>
            <a
              href="https://instagram.com/ziba.noory"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600 transition-colors"
            >
              <TfiInstagram size={20} />
            </a>
            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="hover:text-slate-900 transition-colors"
            >
              <TfiEmail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Main;
