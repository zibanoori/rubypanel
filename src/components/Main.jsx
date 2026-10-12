      
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { siPython } from "simple-icons";
import { SiReact, SiTailwindcss, SiVite, SiGithub } from "@icons-pack/react-simple-icons";



function Main() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 p-8 md:ml-64">
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
  { label: "Total Users", value:"2,740", change: "+14.8%", color:"violet"},
  { label: "Ravenue", value: "$16.4k", change:"+6.4%", color:"emerald"},
  { label: "Active Tools", value: "34", change: "+8", color:"amber"},
  { label: "Reports", value: "156", change: "+5.2%", color: "rose" },
].map((state) => (
<div key={state.label} className="rounded-2xl bg-white p-6 shadow-sm">
  <p className="text-sm font-medium text-slate-500">{state.label}</p>
<div className="mt-2 flex items-end justify-between">

</div>
)) }
      </div>

     

    </main>
  );
}
export default Main;
