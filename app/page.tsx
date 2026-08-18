import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
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
          <input type="email" className="input" placeholder="mail@site.com" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <Link href={"/register"} className="my-3 mx-1">Don't have an account? Register</Link>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    </main>
  );
}
