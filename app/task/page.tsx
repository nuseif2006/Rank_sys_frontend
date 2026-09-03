"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation" // Import for navigation
import taskFetch from "../components/taskfetch"
import Header from '../components/header'
import toast, { Toaster } from "react-hot-toast"

const TaskPage = () => {
  const router = useRouter()
  const [tasks, setTasks] = useState([])
  const [empty, setEmpty] = useState(false)
  useEffect(()=>{
    const fetchTasks = async () => {
      const res = await taskFetch()
      if(!res.success){
        router.replace("/")
        toast.error("Something went wrong", {id: "auth-error"})
        return
      }
    }
    fetchTasks()
  },[])
  return (
    <main>
      <Header/>
    <div className="space-y-4 mt-30">
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Today's tasks
        </li>

        {/* {empty ? (
          <li className="p-4 text-error font-medium">404 An error occurred</li>
        ) : (
          tasks.map((item) => (
            <li className="list-row flex items-center justify-between p-3" key={item.id}>
              <div className="flex items-center gap-3">
                <img
                  className="size-10 rounded-box"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGiWgtTrR3iCRTKMNu25saXyaZEGYSe76ZYvgr_60OGcbHwY26BSSEIed&s=10"
                  alt="Task thumbnail"
                />
                <div>
                  <div className={item.completed ? "line-through opacity-50" : ""}>
                    {item.txt}
                  </div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {item.exp}
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={undefined}
                className="checkbox checkbox-primary"
                onChange={undefined}
              />
            </li>
          ))
        )} */}
      </ul>
    </div>
    <Toaster/>
        </main>
  )
}

export default TaskPage