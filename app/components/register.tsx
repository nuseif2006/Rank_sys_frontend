'use server'
import { cookies } from 'next/headers'

const fetchReg = async (payload : {fname: string, lname: string, email: string, pass: string}) => {
  try{
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
      })
      const data = await res.json()

      if (!res.ok){
        return {success: false, message: data.msg || "Error occured"}
      }
        if (data.refreshToken == null){
          return {message: data.msg, success: false}
        }
        const cookieStore = await cookies()
        cookieStore.set("rt", data.refreshToken,{
          httpOnly: true,
          sameSite: 'lax',
          path: '/'
        })
        return {success: true, message: data.msg}
  }
  catch{
    return { success: false, message: "Server connection failed" }
  }
    }
export default fetchReg