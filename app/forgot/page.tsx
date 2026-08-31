"use client"
import { ChangeEvent, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import Forgot from "../components/forgot"
import { useRouter } from "next/navigation"

const forgot = () => {
    const route = useRouter()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const Reset = async () => {
        setLoading(true)
        if (!email.includes("@gmail.com")) {
          setLoading(false)
          return toast.error("Email should be in correct format")
        }
        const res = await Forgot({email})
        if (res.success){
            setLoading(false)
            toast.success(res.message)
            route.back()
        }
        else{
            setLoading(false)
            toast.error(res.message)
        }
    }
  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body w-90">
        <h1>Forgot Password</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
           type="email" 
           className="input w-full" 
           placeholder="mail@site.com" 
           value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
           />
        {loading ?
          <button
          className='btn w-full mt-4'
          disabled
          >
            Reset
            <span className="loading loading-spinner"></span>
          </button>
          :
          <div className='aura mt-4'>
            <button
            className='btn w-full'
            onClick={Reset}
            >
              Reset
            </button>
          </div> 
        }
        </fieldset>
      </div>
    </div>
  </div>
</div>
    <Toaster/>
    </main>
  )
}

export default forgot