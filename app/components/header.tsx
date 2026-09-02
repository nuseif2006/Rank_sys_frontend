"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import taskFetch from "./taskfetch"
import removeCookies from "./removecookies"

const Header = () => {
    const router = useRouter()
    const [name, setname] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    useEffect(()=>{
     async function fetchName(){
      const res= await taskFetch()
        if (!res.success){
          setname("Guest")
          setFname("Server")
          setLname("Error")
          setEmail("error@gmail.com")
          return
        }
        setname(res.user.lname)
        setFname(res.user.fname)
        setLname(res.user.lname)
        setEmail(res.user.email)
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow">
        <li>
          <a onClick={() => (document.getElementById("my_modal_2") as HTMLDialogElement)?.showModal()} className="justify-between">
            Profile
          </a>
        </li>
        <li><a>
          Settings</a></li>
        <li><a onClick={() => (document.getElementById("my_modal_3") as HTMLDialogElement)?.showModal()}>
          Logout</a></li>
      </ul>
    </div>
  <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Profile</h3>
    <fieldset className="fieldset py-5">
    <label className="label">First Name</label>
    <input
    className="input w-full"
    readOnly
    value={fname}
    />
    <label className="label">Last Name</label>
    <input
    className="input w-full"
    readOnly
    value={lname}
    />
    <label className="label">Email</label>
    <input
    className="input w-full"
    readOnly
    value={email}
    />
    </fieldset>
    <button onClick={() => (document.getElementById("my_modal_2") as HTMLDialogElement).close()} className="btn bg-error">Close</button>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Confirm Logout</h3>
    <div className="mt-10">
      <button onClick={() => (document.getElementById("my_modal_3") as HTMLDialogElement).close()} className="btn btn-neutral">Cancel</button>
      <button onClick={async() => {
        await removeCookies()
        localStorage.removeItem("data")
        return router.replace("/")
      }} className="btn btn-error mx-10">Logout</button>
    </div>
  </div>
</dialog>
  </div>
</div>
  )
}

export default Header