import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, CreditCard, ShieldCheck, Key, LogOut } from "lucide-react";

export function CustomerLayout() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "flex items-center gap-3 px-3 py-2 bg-primary-container text-on-primary-container rounded-xl font-bold font-body text-label-lg transition-transform hover:bg-surface-variant active:translate-x-1";
    }
    return "flex items-center gap-3 px-3 py-2 text-on-secondary-container hover:bg-secondary-container/50 rounded-xl font-medium font-body text-label-lg transition-all hover:bg-surface-variant active:translate-x-1";
  };

  return (
    <div className="bg-background text-on-background font-body antialiased flex h-screen overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full p-4 gap-2 bg-surface-container w-64 fixed left-0 top-0">
        {/* Header Section */}
        <div className="mb-8 px-2 flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant flex items-center justify-center shrink-0">
            <img
              alt="Organization Logo"
              className="object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyT0DdPMO0cwqGC6wT1czeDX_1ag48XobhP6H-27PO8w2zOBF8lj8mSZxJ-tk3Rgoxq5l8oGf7qUWZfd3VtCisuSnX7IRHuKzgguTSXyb6pfDHvs5aPuL8q86AuZO79y4Oeqsm788v6s5f8yG-4M-wE8xmc8MAWRGgoL5fzHiXgk-jQQvsIukPW3OxkzAl-vqW8IGggw_pjRZfXUVVtLGAfQ0kAM0xUu-31XtSdWGpIHFx7RW7oY6-WJfmxzO5_TOAUH4cdGwxXQ"
            />
          </div>
          <div>
            <h2 className="font-headline font-bold text-lg text-on-surface tracking-tight">
              Customer Portal
            </h2>
            <p className="font-label text-sm text-on-surface-variant">
              Parbadiya Enterprise
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/request"
          className="mb-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-label text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
        >
          <span className="text-xl">+</span>
          New Request
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-1 w-full flex-grow">
          <li>
            <Link to="/customer" className={getLinkClass("/customer")}>
              <LayoutDashboard className="w-5 h-5 shrink-0" />
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link to="/customer/services" className={getLinkClass("/customer/services")}>
              <Package className="w-5 h-5 shrink-0" />
              <span>My Services</span>
            </Link>
          </li>
          <li>
            <Link to="/customer/billing" className={getLinkClass("/customer/billing")}>
              <CreditCard className="w-5 h-5 shrink-0" />
              <span>Billing</span>
            </Link>
          </li>
          <li>
            <Link to="/customer/security" className={getLinkClass("/customer/security")}>
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>Security</span>
            </Link>
          </li>
          <li>
            <Link to="/customer/apikeys" className={getLinkClass("/customer/apikeys")}>
              <Key className="w-5 h-5 shrink-0" />
              <span>Api Keys</span>
            </Link>
          </li>
        </ul>

        {/* Footer Actions */}
        <div className="mt-auto border-t border-outline-variant/15 pt-4">
          <Link
            to="/login"
            className="flex items-center gap-3 px-3 py-2 text-on-secondary-container hover:bg-secondary-container/50 rounded-xl font-medium font-body text-sm transition-all hover:bg-surface-variant active:translate-x-1"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span>Logout</span>
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 flex flex-col h-full bg-surface-container-lowest overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
