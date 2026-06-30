import { Menu, Wrench, AlertTriangle, CheckCircle, ArrowRight, Plus, Edit3 } from "lucide-react";
import { Link } from "react-router-dom";

export function AdminDashboard() {
  return (
    <>
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="font-headline text-3xl font-bold text-on-surface mb-2">
            System Overview
          </h1>
          <p className="font-body text-on-surface-variant text-sm">
            Real-time metrics and recent activity across Parbadiya Infotech
            services.
          </p>
        </div>
        {/* Mobile Menu Toggle */}
        <button className="md:hidden w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Bento Grid Layout for Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        {/* Key Metric Cards */}
        <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between h-32 border border-outline-variant/15 shadow-sm">
          <div className="flex justify-between items-center text-on-surface-variant mb-4">
            <span className="font-label text-sm uppercase tracking-widest">
              Active Requests
            </span>
            <Wrench className="w-5 h-5 text-primary" />
          </div>
          <div className="font-headline text-4xl text-on-surface">14</div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between h-32 border border-outline-variant/15 shadow-sm">
          <div className="flex justify-between items-center text-on-surface-variant mb-4">
            <span className="font-label text-sm uppercase tracking-widest">
              Inventory Alerts
            </span>
            <AlertTriangle className="w-5 h-5 text-tertiary" />
          </div>
          <div className="font-headline text-4xl text-on-surface">3</div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between h-32 border border-outline-variant/15 shadow-sm">
          <div className="flex justify-between items-center text-on-surface-variant mb-4">
            <span className="font-label text-sm uppercase tracking-widest">
              System Health
            </span>
            <CheckCircle className="w-5 h-5 text-primary" />
          </div>
          <div className="font-headline text-4xl text-on-surface text-primary">
            99.9%
          </div>
        </div>

        {/* Recent Service Inquiries (Span 2 cols) */}
        <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-6 min-h-[400px] border border-outline-variant/15 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline text-xl text-on-surface">
              Recent Service Inquiries
            </h3>
            <Link
              to="/admin/requests"
              className="font-label text-sm text-primary hover:underline flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body text-sm">
              <thead className="text-on-surface-variant border-b border-surface-container-highest">
                <tr>
                  <th className="pb-3 font-medium">Client</th>
                  <th className="pb-3 font-medium">Service</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-on-surface">
                <tr className="border-b border-surface-container-highest hover:bg-surface-bright transition-colors">
                  <td className="py-4">Alpha Corp</td>
                  <td className="py-4">CCTV Installation</td>
                  <td className="py-4 text-on-surface-variant">Oct 24, 2023</td>
                  <td className="py-4">
                    <span className="bg-tertiary-container/30 text-tertiary px-2 py-1 rounded-full text-xs font-label">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-surface-container-highest hover:bg-surface-bright transition-colors">
                  <td className="py-4">Beta Logistics</td>
                  <td className="py-4">Network Setup</td>
                  <td className="py-4 text-on-surface-variant">Oct 23, 2023</td>
                  <td className="py-4">
                    <span className="bg-primary-container text-primary px-2 py-1 rounded-full text-xs font-label">
                      In Progress
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-surface-container-highest hover:bg-surface-bright transition-colors">
                  <td className="py-4">Gamma Retail</td>
                  <td className="py-4">Printer Repair</td>
                  <td className="py-4 text-on-surface-variant">Oct 21, 2023</td>
                  <td className="py-4">
                    <span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded-full text-xs font-label">
                      Resolved
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright transition-colors">
                  <td className="py-4">Delta Tech</td>
                  <td className="py-4">Server Maintenance</td>
                  <td className="py-4 text-on-surface-variant">Oct 20, 2023</td>
                  <td className="py-4">
                    <span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded-full text-xs font-label">
                      Resolved
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & Inventory Snippet (Span 1 col) */}
        <div className="flex flex-col gap-6">
          {/* Quick Actions */}
          <div className="bg-primary text-on-primary rounded-xl p-6 relative overflow-hidden group shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-80 z-0"></div>
            <div className="relative z-10">
              <h3 className="font-headline text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-on-primary text-primary font-label text-sm py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-surface-bright transition-colors">
                  <Plus className="w-5 h-5" /> New Request
                </button>
                <button className="w-full bg-primary-container/20 text-on-primary font-label text-sm py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-primary-container/40 transition-colors">
                  <Edit3 className="w-5 h-5" /> Update Content
                </button>
              </div>
            </div>
          </div>

          {/* Inventory Snapshot */}
          <div className="bg-surface-container-lowest rounded-xl p-6 flex-1 border border-outline-variant/15 shadow-sm">
            <h3 className="font-headline text-lg text-on-surface mb-4">
              Inventory Alerts
            </h3>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span>CCTV Domes</span>
                </div>
                <span className="text-on-surface-variant">Low (5)</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-error"></span>
                  <span>Cat6 Cable</span>
                </div>
                <span className="text-error">Critical (1 box)</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span>Toner Cartridges</span>
                </div>
                <span className="text-on-surface-variant">Low (2)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
