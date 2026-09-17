"use client";

import React, { useState } from "react";

export default function UserLoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password) return;

    setLoading(true);
    setError("");

    try {
      const rawUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api").trim();
      const cleanUrl = rawUrl.replace(/\/+$/, "");
      const backendUrl = cleanUrl.endsWith("/api") ? cleanUrl : `${cleanUrl}/api`;

      const res = await fetch(`${backendUrl}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
            "Invalid username or password. Please contact admin for access credentials."
        );
      }

      if (data.token) {
        // 24-hour expiration calculation (1 day)
        const ONE_DAY_MS = 24 * 60 * 60 * 1000;
        const expiresAt = data.expiresAt || Date.now() + ONE_DAY_MS;

        localStorage.setItem("user_access_token", data.token);
        localStorage.setItem("user_access_expires_at", expiresAt.toString());

        if (onLoginSuccess) {
          onLoginSuccess(data.token);
        }
      }
    } catch (err) {
      console.error("User Login Error:", err);
      setError(err.message || "Failed to log in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-white/20">
      {/* Background Decorative Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-5 text-center">
        <span className="font-serif font-bold text-[100px] sm:text-[180px] md:text-[240px] leading-none text-transparent stroke-text uppercase tracking-widest block">
          Protected
        </span>
      </div>

      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.webp"
              alt="Logo"
              width={42}
              height={42}
              className="h-10 w-auto object-contain drop-shadow-md"
            />
            {/* <span className="bg-white/10 text-zinc-300 font-sans font-medium text-xs px-3 py-1 rounded-full border border-white/10 select-none">
              Private Access (24h Valid)
            </span> */}
          </div>

          <div className="pt-1">
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
             Pyush Anand Portfolio
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xs mx-auto">
              Please enter your access credentials to view the portfolio.
            </p>
          </div>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/5 border border-white/30 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/30  text-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Enter username"
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/30  text-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Error Message Alert */}
            {error && (
              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-white hover:bg-zinc-200 text-black font-semibold rounded-xl text-sm transition-all shadow-lg hover:shadow-white/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <span>Access Portfolio</span>
              )}
            </button>
          </form>

          {/* Admin Contact Notice Box */}
          <div className="pt-4 border-t border-zinc-800/80 text-center space-y-1">
            <p className="text-xs text-zinc-400 font-medium">
              🔒 Don't have access credentials?
            </p>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              Contact the administrator to get your login username &amp; password. Login remains valid for 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
