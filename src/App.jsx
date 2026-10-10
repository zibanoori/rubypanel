import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Sidebar />

      <main className="min-h-screen bg-slate-50 p-8 md:ml-64">
        <h1 className="text-2xl font-bold text-rose-900">
          RubyPanel
        </h1>
      </main>
    </>
  )
}

export default App