"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import btnLogin from "./components/login";
import Image from "next/image";
import upImg from '@/public/up.jpg';

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const Login = async () => {
    setLoading(true)
    if (email == "" || pass == "") {
      setLoading(false)
      return toast.error("Fill all the fields",{id: "empty"})
    }
    else if (!email.includes("@gmail.com")) {
      setLoading(false)
      return toast.error("Email should be in correct format",{id: "invalid-email"})
    }
    const res = await btnLogin({email, pass})
    if (res.success){
      toast.success(res.message)
      localStorage.setItem("data", "task")
      setLoading(false)
      return router.replace("/task")
    }
    else{
      setLoading(false)
      return toast.error(res.message, {id: "error3"})
    }
  }

  useEffect(()=>{
    const data = localStorage.getItem("data")
    if (data == null){
      return router.replace("/")
    }
    else{
      return router.replace("/task")
    }
  },[])
  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src={upImg}
          alt="Background Image"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center opacity-20"
        />
      </div>

      <div className="hero min-h-screen relative z-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Enter the Leaderboard</h1>
            <p className="py-6">
              Compare your performance against top competitors. Analyze your strategy and
              refine your skills in real-time.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email" 
                  className="input w-full" 
                  placeholder="mail@site.com" 
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    className='input w-full'
                    type={showPassword ? "text" : "password"}
                    placeholder={"Password"}
                    value={pass}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-ghost btn-sm btn-circle absolute right-2 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-base-content"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12c1.274 4.057 5.065 7 9.964 7 4.9 0 8.69-2.943 9.964-7-1.274-4.057-5.065-7-9.964-7-4.9 0-8.69 2.943-9.964 7z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div><Link href={"/forgot"} className="my-3 mx-1">Forgot password?</Link></div>
                {loading ? 
                  <button className='btn w-full mt-4' disabled>
                    Login
                    <span className="loading loading-spinner"></span>
                  </button>
                  :
                  <div className='aura mt-4'>
                    <button className='btn w-full' onClick={Login} >
                      Login
                    </button>
                  </div> 
                }         
                <Link href={"/register"} className="my-3 mx-1">Don't have an account? Register</Link>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </main>
  );
}