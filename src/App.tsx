import { TaskCard } from "./components";

function App() {
  return (
    <div className="w-screen min-h-screen  flex flex-col items-center bg-slate-200 gap-4">
      <h1 className="text-3xl font-bold ">ControlaJobs</h1>
      <TaskCard />
    </div>
  );
}

export default App;
