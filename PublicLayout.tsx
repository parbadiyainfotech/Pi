import { Outlet, Link } from "react-router-dom";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="w-full top-0 sticky bg-surface-container-lowest z-50 shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img
              alt="Parbadiya Infotech Logo"
              className="h-10 w-10 object-contain rounded"
              src="https://lh3.googleusercontent.com/aida/AP1WRLt8u4idBevCIiDXDivoBWQHV5F_HVXF88yEpysoiMXdhJQo6eJ2gwEaR9467EL3UeE-c_QTSZKrpNItdwNeop1amg_083ITfrwFOd0ei-Ixtxs_KnUkCjT5JSqTjjv_68Y85X3va2T-SYb5G9v3Ug8zvTMxV3gS79iUlNAbgdOSSNfUDEfo6nr_CsdpV7hcWk9q_fYlQhxMBNGCCSdghplUjlQY6b0qUlIGLJbT8KOI_sSRZpuwsmIc0A"
            />
            <Link to="/" className="text-2xl font-headline font-bold text-primary">
              Parbadiya Infotech
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 font-label">
            <Link
              to="/"
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70"
            >
              CCTV
            </Link>
            <Link
              to="/"
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70"
            >
              Computing
            </Link>
            <Link
              to="/"
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70"
            >
              Printers
            </Link>
            <Link
              to="/login"
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70"
            >
              Dashboard
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/request" className="btn-primary py-2.5 px-6 rounded-full">
              Service Request
            </Link>
          </div>
          <button className="md:hidden text-primary p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container-highest mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Parbadiya Infotech Logo"
                className="h-8 w-8 object-contain rounded"
                src="https://lh3.googleusercontent.com/aida/AP1WRLt8u4idBevCIiDXDivoBWQHV5F_HVXF88yEpysoiMXdhJQo6eJ2gwEaR9467EL3UeE-c_QTSZKrpNItdwNeop1amg_083ITfrwFOd0ei-Ixtxs_KnUkCjT5JSqTjjv_68Y85X3va2T-SYb5G9v3Ug8zvTMxV3gS79iUlNAbgdOSSNfUDEfo6nr_CsdpV7hcWk9q_fYlQhxMBNGCCSdghplUjlQY6b0qUlIGLJbT8KOI_sSRZpuwsmIc0A"
              />
              <span className="text-xl font-headline font-bold text-on-surface">
                Parbadiya Infotech
              </span>
            </div>
            <p className="text-sm text-on-surface-variant font-body mt-4 max-w-xs">
              Premium security and computing solutions, architected for reliability.
            </p>
          </div>
          {/* Contact */}
          <div className="space-y-4 font-body">
            <h4 className="font-label font-semibold text-on-surface tracking-wide uppercase text-sm">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-on-surface-variant">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Karnala para, Post ghodiyal, Taluka Vadgam, District
                  Banaskantha, Pin 385421
                </span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Phone className="w-5 h-5 shrink-0" />
                <a
                  href="tel:8849183347"
                  className="text-sm hover:underline hover:text-primary transition-opacity duration-200"
                >
                  8849183347
                </a>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Mail className="w-5 h-5 shrink-0" />
                <a
                  href="mailto:parbadiyainfotech@gmail.com"
                  className="text-sm hover:underline hover:text-primary transition-opacity duration-200"
                >
                  parbadiyainfotech@gmail.com
                </a>
              </li>
            </ul>
          </div>
          {/* Legal/Copy */}
          <div className="space-y-4 md:text-right font-body flex flex-col justify-end">
            <p className="text-sm text-on-surface-variant">
              © 2024 Parbadiya Infotech Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
