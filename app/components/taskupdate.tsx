"use server"

import { cookies } from "next/headers"

const taskUpdate = async (payload: {score: string}) => {
    try{
        const cookieStore= await cookies()
        const sessionCookie = cookieStore.get("rt")
        const res = await fetch("http://localhost:5000/tasks/update",{
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${sessionCookie?.value}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        if (!res.ok) return {success: false, message: "Error occured"}
        return {success: true, message: "Message updated successfuly"}
    }
    catch{
        return {success: false, message: "Error occured"}
    }
}

export default taskUpdate