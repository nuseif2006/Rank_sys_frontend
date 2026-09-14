'use client';

import { useState } from 'react';
import { HelpCircle, Mail, AlertTriangle, X } from 'lucide-react';

export default function LoginHelpButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Help Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-200 transition-colors focus:outline-none focus:underline"
        aria-expanded={isOpen}
      >
        <HelpCircle className="w-4 h-4 text-gray-400" />
        Need help receiving email?
      </button>

      {/* Popover / Modal */}
      {isOpen && (
        <>
          {/* Backdrop to close when clicking outside */}
          <div 
            className="fixed inset-0 z-40 bg-black/10" 
            onClick={() => setIsOpen(false)} 
          />

          {/* Help Box Content (Aligned right so it stays on screen) */}
          <div className="absolute right-0 top-8 z-50 w-72 sm:w-80 rounded-lg bg-white p-4 shadow-xl ring-1 ring-black/10 border border-gray-100 transition-all">
            <div className="flex items-start justify-between pb-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-600" />
                <h4 className="text-xs font-semibold text-gray-900">Can't find your login email?</h4>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 rounded-md p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="mt-2.5 space-y-2 text-xs text-gray-600">
              <p>
                Verification and login emails can take 1–2 minutes to deliver. If you don't see it in your primary inbox:
              </p>
              
              <ul className="list-disc pl-4 space-y-1 text-gray-700 font-medium">
                <li>Check your <span className="text-amber-700 font-semibold bg-amber-50 px-1 py-0.5 rounded">Spam / Junk folder</span>.</li>
                <li>Search for emails sent from our domain.</li>
                <li>Verify your email address was typed correctly.</li>
              </ul>

              <div className="mt-3 flex items-start gap-1.5 rounded-md bg-amber-50 p-2 text-[11px] text-amber-800 border border-amber-200/60">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>If found in Spam, mark it as <strong>"Not Spam"</strong> to ensure future delivery.</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}