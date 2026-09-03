"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation" // Import for navigation
import taskFetch from "../components/taskfetch"
import Header from '../components/header'
import toast, { Toaster } from "react-hot-toast"

const TaskPage = () => {
  const router = useRouter()
  const [submit, setSubmit] = useState(false)
  interface Task {
  id: string | number;
  txt: string;
  exp: number;
  completed: boolean;
  }
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(()=>{
    const fetchTasks = async () => {
      const res = await taskFetch()
      if(!res.success){
        router.replace("/")
        toast.error("Something went wrong", {id: "auth-error"})
        return
      }
      const formattedTasks = (res.message || []).map((task:any) => ({
        ...task,
        completed: task.completed || false,
      }))
      setTasks(formattedTasks)
    }
    fetchTasks()
  },[])
  const handleToggle = (id:any) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }
  return (
    <main>
      <Header/>
    <div className="space-y-4 mt-30">
      {submit ?
      <button onClick={() => router.push("/rankboard")} className="btn block mx-auto">Go to Leaderboard</button>
      :
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Today's tasks
        </li>
        {
          tasks.map((task) => (
            <li className="list-row flex items-center justify-between p-3" key={task["id"]}>
              <div className="flex items-center gap-3">
                <img
                  className="size-10 rounded-box"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGiWgtTrR3iCRTKMNu25saXyaZEGYSe76ZYvgr_60OGcbHwY26BSSEIed&s=10"
                  alt="Task thumbnail"
                />
                <div>
                  <div className={task.completed ? "line-through opacity-50" : ""}>
                    {task["txt"]}
                  </div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {`${task["exp"]} exp`}
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={task.completed}
                className="checkbox checkbox-primary"
                onChange={() => handleToggle(task.id)}
              />
            </li>
          ))
        }
        {tasks.length > 0 && tasks.every((task) => task.completed) && (
  <button className="btn btn-success" onClick={() => setSubmit(true)}>
    Submit
  </button>
)}
      </ul>
}
    </div>
    <Toaster/>
        </main>
  )
}

export default TaskPage