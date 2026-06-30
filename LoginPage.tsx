import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [role, setRole] = useState<"customer" | "admin">("customer");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/customer");
    }
  };

  return (
    <div className="bg-surface-container-lowest min-h-screen flex items-center justify-center p-4 md:p-8">
      <main className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-surface-container-lowest flex flex-col items-center">
          {/* Logo & Header */}
          <div className="mb-10 text-center flex flex-col items-center">
            <div className="w-24 h-24 mb-6 rounded-lg overflow-hidden bg-surface-container flex items-center justify-center p-2">
              <img
                alt="Parbadiya Infotech Logo"
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida/AP1WRLt8u4idBevCIiDXDivoBWQHV5F_HVXF88yEpysoiMXdhJQo6eJ2gwEaR9467EL3UeE-c_QTSZKrpNItdwNeop1amg_083ITfrwFOd0ei-Ixtxs_KnUkCjT5JSqTjjv_68Y85X3va2T-SYb5G9v3Ug8zvTMxV3gS79iUlNAbgdOSSNfUDEfo6nr_CsdpV7hcWk9q_fYlQhxMBNGCCSdghplUjlQY6b0qUlIGLJbT8KOI_sSRZpuwsmIc0A"
              />
            </div>
            <h1 className="text-3xl font-display font-bold text-on-surface mb-2 tracking-tight">
              Access Portal
            </h1>
            <p className="text-on-surface-variant font-body text-sm">
              Sign in to continue to Parbadiya Infotech.
            </p>
          </div>

          {/* Role Toggle */}
          <div className="w-full bg-surface-container rounded-lg p-1 flex mb-8">
            <button
              onClick={() => setRole("customer")}
              className={`flex-1 py-2 text-sm font-label font-medium rounded-lg transition-colors ${
                role === "customer"
                  ? "bg-surface-container-lowest text-on-surface shadow-sm cursor-default"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setRole("admin")}
              className={`flex-1 py-2 text-sm font-label font-medium rounded-lg transition-colors ${
                role === "admin"
                  ? "bg-surface-container-lowest text-on-surface shadow-sm cursor-default"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Administrator
            </button>
          </div>

          {/* Login Form */}
          <form
            className="w-full flex flex-col gap-6"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col gap-4">
              <div>
                <label
                  className="block text-sm font-label font-medium text-on-surface mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/15 text-on-surface font-body rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder-on-surface-variant/50"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label
                    className="block text-sm font-label font-medium text-on-surface"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-label text-primary hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/15 text-on-surface font-body rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder-on-surface-variant/50"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                className="h-4 w-4 rounded-sm border-outline-variant/30 text-primary focus:ring-primary bg-surface-container-lowest"
                id="remember"
                name="remember"
                type="checkbox"
              />
              <label
                className="ml-2 block text-sm font-body text-on-surface-variant"
                htmlFor="remember"
              >
                Remember me for 30 days
              </label>
            </div>

            <button
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label font-bold tracking-wide rounded-lg hover:opacity-95 transition-opacity mt-2 flex justify-center items-center gap-2 shadow-sm"
              type="submit"
            >
              Sign In
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 text-center text-xs font-body text-on-surface-variant/70">
            Secure connection standard 256-bit encryption.
          </div>
        </div>
      </main>
    </div>
  );
}
