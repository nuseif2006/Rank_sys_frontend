import React from 'react'

const MaintenancePage = () => {
  return (
    <main className="min-h-screen text-slate-100 flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center my-auto z-10 py-12">
        <div className="inline-flex items-center justify-center p-3 text-white-400 rounded-2xl mb-8 ring-1 white-500/20">
          <svg
            className="w-8 h-8 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-white">
          We&apos;ll be back soon!
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed">
          We are currently undergoing scheduled maintenance to improve our
          services. We apologize for any inconvenience.
        </p>
      </div>
    </main>
  )
}

export default MaintenancePage