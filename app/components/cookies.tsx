"use server"

import { cookies } from "next/headers"

const Cookies = async () => {
    const cookieStore= await cookies()
    const sessionCookie = cookieStore.get("rt")
    if (sessionCookie){
        return {cookie: sessionCookie?.value}
    }
    return {cookie: "404 USER NOT FOUND"}
}

export default Cookies