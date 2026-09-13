"use server"

import { cookies } from "next/headers"

const taskFetch = async () => {
    try{
        const cookieStore= await cookies()
        const sessionCookie = cookieStore.get("rt")
        const res = await fetch("https://rank-sys-backend.vercel.app/tasks",{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${sessionCookie?.value}`,
                "Content-Type": "application/json"
            }
        })
        if (!res.ok) return {success: false, message: "Error occured"}
        const data = await res.json()
        return {success: true, message: data.data, user: data.user}
    }
    catch{
        return {success: false, message: "Error occured"}
    }
}

export default taskFetch