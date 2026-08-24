"use server"

import { cookies } from "next/headers"

const removeCookies = async () => {
    const cookieStore = await cookies()
    cookieStore.delete("rt")
    cookieStore.delete("at")
    return {success: true}
}

export default removeCookies