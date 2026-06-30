import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Wrench, Package, FileText, Settings, Menu, PackageOpen } from "lucide-react";

export function AdminLayout() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path || (path !== "/admin" && location.pathname.startsWith(path));
    if (isActive) {
      return "flex items-center gap-3 bg-primary-container text-on-primary-container font-bold rounded-xl px-4 py-3 mx-2 scale-95 active:scale-90 transition-all cursor-pointer";
    }
    return "flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl px-4 py-3 mx-2 hover:bg-surface-container-high transition-all scale-95 active:scale-90 cursor-pointer";
  };

  return (
    <div className="bg-background text-on-background font-body h-screen flex antialiased">
      {/* SideNavBar */}
      <nav className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-6 z-40 hidden md:flex">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container text-primary flex items-center justify-center font-headline font-bold text-xl overflow-hidden shrink-0">
            <img
              alt="Admin User"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHVV8wwe0wGVYPWzN3bcMBv4Fs0K39ifrCgATyL22sFj85kpyPn2XHCkXiuFQ7qT7qgSYf5MoXoPzuuEFd5MIkZD6lWGHTq0gffnri-lsp3a6fhOjJ7kWDy0w32-V5stfCES3Zp4XukebOzlQbQXz6tUEAcm7IGgWn2jYqsDDL_tm1hUYg0MGzu7ytbh-G1_hUSTJgBuP9-vFxZxGrZUZ-0n7pYMXCZ9uH7J5cr7N5kmBms4HwU2EQyr32-rT1Ot1ST0VE6JetCQ"
            />
          </div>
          <div>
            <h2 className="font-headline font-semibold text-on-surface leading-tight text-lg">
              Admin Panel
            </h2>
            <p className="font-label text-xs text-on-surface-variant">
              Parbadiya Infotech
            </p>
          </div>
        </div>
        <ul className="flex-1 overflow-y-auto font-label text-sm space-y-1">
          <li>
            <Link to="/admin" className={getLinkClass("/admin")}>
              <LayoutDashboard className="w-5 h-5" />
              Overview
            </Link>
          </li>
          <li>
            <Link to="/admin/requests" className={getLinkClass("/admin/requests")}>
              <Wrench className="w-5 h-5" />
              Service Requests
            </Link>
          </li>
          <li>
            <Link to="/admin/inventory" className={getLinkClass("/admin/inventory")}>
              <Package className="w-5 h-5" />
              Inventory
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className={getLinkClass("/admin/products")}>
              <PackageOpen className="w-5 h-5" />
              Product Management
            </Link>
          </li>
          <li>
            <Link to="/admin/content" className={getLinkClass("/admin/content")}>
              <FileText className="w-5 h-5" />
              Site Content
            </Link>
          </li>
          <li>
            <Link to="/admin/settings" className={getLinkClass("/admin/settings")}>
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 p-8 overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
