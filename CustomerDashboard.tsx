import { CheckCircle2, PackageSearch, Clock, ShieldCheck, ArrowRight, Activity } from "lucide-react";
import { Link } from "react-router-dom";

export function CustomerDashboard() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
      <header className="mb-10">
        <h1 className="font-headline text-3xl font-bold text-on-surface mb-2 tracking-tight">
          Welcome back, Alex
        </h1>
        <p className="font-body text-on-surface-variant text-sm">
          Here is the current status of your infrastructure and active service
          requests.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Dashboard Area */}
        <div className="lg:col-span-8 space-y-8">
          {/* Active Status Banner */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Activity className="w-32 h-32 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-semibold">
                  System Status
                </span>
              </div>
              <h2 className="font-headline text-3xl text-on-surface mb-2">
                All Systems Operational
              </h2>
              <p className="text-on-surface-variant max-w-md font-body">
                Your managed network and surveillance endpoints are communicating
                normally. No active alerts detected.
              </p>
            </div>
          </div>

          {/* Recent Service Requests */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline text-xl font-semibold text-on-surface">
                Active Requests
              </h3>
              <Link
                to="/customer/services"
                className="text-sm font-label text-primary hover:underline flex items-center gap-1"
              >
                View History <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {/* Request Item */}
              <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/15 hover:border-primary/30 transition-colors shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container/30 flex items-center justify-center text-tertiary shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-on-surface">
                      Server Maintenance (Q3)
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant">
                      Req ID: SRV-209 • Scheduled for Oct 28
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                  <span className="bg-tertiary-container/30 text-tertiary px-3 py-1 rounded-full text-xs font-label font-medium">
                    Pending
                  </span>
                </div>
              </div>

              {/* Request Item */}
              <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/15 hover:border-primary/30 transition-colors shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary shrink-0 mt-1">
                    <PackageSearch className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-on-surface">
                      New CCTV Node Deployment
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant">
                      Req ID: CCT-892 • Hardware procurement
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                  <span className="bg-primary-container text-primary px-3 py-1 rounded-full text-xs font-label font-medium">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Actions */}
          <div className="bg-surface-container-low rounded-xl p-6 shadow-sm border border-outline-variant/10">
            <h3 className="font-headline text-lg font-semibold text-on-surface mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Link
                to="/request"
                className="w-full block text-center bg-primary text-on-primary font-label py-3 rounded-lg hover:opacity-95 transition-opacity shadow-sm"
              >
                Request New Service
              </Link>
              <button className="w-full text-center bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-label py-3 rounded-lg hover:bg-surface-bright transition-colors shadow-sm">
                View Invoice
              </button>
            </div>
          </div>

          {/* Managed Assets Snippet */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline text-lg font-semibold text-on-surface">
                Managed Assets
              </h3>
              <ShieldCheck className="w-5 h-5 text-secondary" />
            </div>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex justify-between items-center pb-2 border-b border-surface-container">
                <span className="text-on-surface font-medium">Workstations</span>
                <span className="text-on-surface-variant">24 Active</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-surface-container">
                <span className="text-on-surface font-medium">Surveillance</span>
                <span className="text-on-surface-variant">12 Nodes</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-on-surface font-medium">Network</span>
                <span className="text-on-surface-variant">3 Switches</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
