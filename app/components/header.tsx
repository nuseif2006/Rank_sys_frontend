"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import taskFetch from "./taskfetch"

const Header = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    useEffect(()=>{
     async function fetchName(){
      const res= await taskFetch()
        setName(res.user.lname || "Guest")
    }
     fetchName()
    },[])
  return (
      <div className="navbar shadow-sm">
  <div className="flex-1">
    <a onClick={() => window.location.reload()} className="btn btn-ghost text-xl">Haxsora</a>
  </div>
      <p className="px-8">Welcome, {name}</p>
  <div className="flex-none p-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7k5MYDav-6Mq7TNNIK7sn4EwBNdKtJ3YCWCJZ6SgRA&s=10" />
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Header