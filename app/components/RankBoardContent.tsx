"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { io, Socket } from "socket.io-client"
import userFetch from "./userfetch"
import toast, { Toaster } from "react-hot-toast"

interface User {
  id: string
  fname: string
  score: number | string
}

export default function RankBoardContent() {
  const router = useRouter()
  const [error, setError] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    let socket: Socket | null = null
    let active = true

    const initSocketAndFetch = async () => {
      const res = await userFetch()
      if (!active) return

      if (!res?.success) {
        setError(true)
        toast.error("Something went wrong", { id: "auth-error5" })
        router.back()
        return
      }

      setError(false)
      socket = io("http://localhost:5000")
      socket.on("users", (data: User[]) => {
        if (active) setUsers(data)
      })
    }

    initSocketAndFetch()

    return () => {
      active = false
      if (socket) {
        socket.off("users")
        socket.disconnect()
      }
    }
  }, [router])

  if (error) return null

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-indigo-600 p-6 text-white text-center">
          <h1 className="text-3xl font-bold tracking-wide">Leaderboard</h1>
          <p className="text-indigo-200 text-sm mt-1">Top performers of the month</p>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {users.map((user, index) => (
              <li
                key={user.id || index}
                className={`flex items-center justify-between p-4 rounded-xl transition duration-200 hover:scale-[1.01] ${
                  index < 3 ? 'bg-indigo-50/50 border border-indigo-100' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {user.fname}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-bold text-indigo-600 text-base sm:text-lg">
                    {Number(user.score || 0).toLocaleString('en-US')}
                  </span>
                  <span className="text-xs text-gray-400 block">pts</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Toaster />
    </div>
  )
}