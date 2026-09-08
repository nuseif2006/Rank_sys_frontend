"use client"

import { useEffect, useState } from "react"
import Cookies from "../components/cookies"
import { useRouter } from "next/navigation"
import { io } from "socket.io-client"

const rankBoard = () => {
  const router = useRouter()
  const [error, setError] = useState(false)
  async function getCookies(){
    const cookie = await Cookies()
    if (cookie.cookie == "404 USER NOT FOUND"){
      router.push("/error")
      setError(true)
      return
    }
    const socket = io("http://localhost:5000", {
      extraHeaders: {
        Authorization: `Bearer ${cookie.cookie}`
      }
    })
    setError(false)
  }
  useEffect(()=>{
   getCookies()
  },[])
  return (
      <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      {error ?
      <h1>404 USER NOT FOUND</h1>
      :
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        
        <div className="bg-indigo-600 p-6 text-white text-center">
        <h1 className="text-3xl font-bold tracking-wide">Leaderboard</h1>
        <p className="text-indigo-200 text-sm mt-1">Top performers of the month</p>
        </div>
        
        {/* <div className="p-6">
        <ul className="space-y-3">
            {leaderboardData.map((player) => (
              <li
              key={player.rank}
                className={`flex items-center justify-between p-4 rounded-xl transition duration-200 hover:scale-[1.01] ${
                  player.rank <= 3 ? 'bg-indigo-50/50 border border-indigo-100' : 'bg-gray-50'
                }`}
                >
                <div className="flex items-center space-x-4">
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${getBadgeColor(
                      player.rank
                    )}`}
                  >
                  {player.rank}
                  </span>
                  
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    
                    <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {player.name}
                    </h3>
                    </div>
                    </div>
                    <div className="text-right">
                  <span className="font-bold text-indigo-600 text-base sm:text-lg">
                    {player.score.toLocaleString()}
                    </span>
                  <span className="text-xs text-gray-400 block">pts</span>
                  </div>
              </li>
              ))}
          </ul>
        </div> */}
      </div>
    }
      </div>
  )
}

export default rankBoard