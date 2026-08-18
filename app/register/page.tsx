import Link from 'next/link'
import React from 'react'

const registerPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Join the Arena</h1>
      <p className="py-6">
        Ready to test your limits against the world's best? Forge your legend and compete for
        glory.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">First Name</label>
          <input className="input" placeholder="John" />
          <label className="label">Last Name</label>
          <input className="input" placeholder="Doe" />
           <label className="label">Email</label>
          <input type='email' className="input" placeholder="mail@site.com" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <label className="label">Confirm Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <Link href={"/"} className="my-3 mx-1">Already have an account? Login</Link>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default registerPage