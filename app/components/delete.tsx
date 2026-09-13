"use server"

import { cookies } from "next/headers"

const Del = async () => {
    const cookieStore= await cookies()
    const sessionCookie = cookieStore.get("rt")
    if (sessionCookie == null){
        return {success: false, msg: "Something went wrong"}
    }
try{
    const res = await fetch("https://rank-sys-backend.vercel.app/delete/user",{
      method: "DELETE",
      headers: {
          "Authorization": `Bearer ${sessionCookie?.value}`,
          "Content-Type": "application/json"
      }
    })
    if (!res.ok){
        return {success: false, msg: "Server error"}
    }
    const data = await res.json()
    return {success: true, msg: data.msg}
}
catch{
    return {success: false, msg: "Something went wrong"}
}
}

export default Del