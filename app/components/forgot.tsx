"use server"

const Forgot = async (payload : {email: string}) => {
  const res = await fetch("https://rank-sys-backend.vercel.app/forgot", {
    "method": "POST",
    "headers": {"Content-Type": "application/json"},
    body: JSON.stringify(payload)
  })
  if (!res.ok) return {success: false, message: "Error occured"}
  const data = await res.json()
  return {success: true, message: data.msg}
}

export default Forgot