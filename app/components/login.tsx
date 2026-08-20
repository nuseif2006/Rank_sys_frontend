"use server"
import { cookies } from "next/headers"

const btnLogin = async (payload: { email: string; pass: string }) => {
  try {
    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (!res.ok) {
      return { success: false, message: data.msg || "Login failed" }
    }

    const cookieStore = await cookies()    
      cookieStore.set("rt", data.refreshToken, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      })

      cookieStore.set("at", data.accessToken, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      })

    return { success: true, message: "Logged in successfully!" }
  } catch (error) {
    return { success: false, message: "Server connection failed" }
  }
}

export default btnLogin