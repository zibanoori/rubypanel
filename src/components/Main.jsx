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
  { label: "Total Users", value:"2,840", change: "+12.8%", color:"violet"},
  { label: "Ravenue", value: "$18.4k", change:"+8.4%", color:"emerald"}
]}
      </div>
    </main>
  );
}
export default Main;
