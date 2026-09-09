"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { io, Socket } from "socket.io-client"
import userFetch from "./userfetch"
import toast, { Toaster } from "react-hot-toast"
import HeaderTwo from "./headerTwo"

interface User {
  id: string
  fname: string
  lname: string
  score: string
}

export default function RankBoardContent() {
  const router = useRouter()
  const [error, setError] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const initSocketAndFetch = async () => {
      const res = await userFetch()
      if (!res?.success) {
        setError(true)
        toast.error("Something went wrong", { id: "auth-error5" })
        router.back()
        return
      }

      setError(false)
      const socket: Socket = io("http://localhost:5000")
      socket.on("users", (data: User[]) => {
        if (data){
          const sortedData = [...data].sort((a,b) => Number(b.score) - Number(a.score))
          setUsers(sortedData)
        }
      })
      return () => {
          socket.off("users")
          socket.disconnect()
      }
    }
    initSocketAndFetch()

  }, [])

  if (error) return null

  return (
    <main>
      <HeaderTwo/>

    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-indigo-600 p-6 text-white text-center">
          <h1 className="text-3xl font-bold tracking-wide">Leaderboard</h1>
          <p className="text-indigo-200 text-sm mt-1">Top performers of the month</p>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className={`flex items-center justify-between p-4 rounded-xl transition duration-200 hover:scale-[1.01]`}
              >
                <div className="flex items-center space-x-4">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {user.fname} {user.lname}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-bold text-indigo-600 text-base sm:text-lg">
                    {user.score} XP
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Toaster />
    </div>
    </main>
  )
}