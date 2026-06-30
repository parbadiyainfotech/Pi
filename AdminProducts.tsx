import { Plus, Search, Filter, MoreVertical, Edit2, Trash2 } from "lucide-react";

export function AdminProducts() {
  return (
    <>
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold text-on-surface mb-2">
            Product Management
          </h1>
          <p className="font-body text-on-surface-variant text-sm">
            Catalog and inventory control for hardware and service packages.
          </p>
        </div>
        <button className="bg-primary text-on-primary font-label text-sm py-2.5 px-5 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm">
          <Plus className="w-5 h-5" /> Add Product
        </button>
      </header>

      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg pl-10 pr-4 py-2 font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-lg font-label text-sm text-on-surface hover:bg-surface-bright transition-colors">
            <Filter className="w-4 h-4" /> Category
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-lg font-label text-sm text-on-surface hover:bg-surface-bright transition-colors">
            Status
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body text-sm">
            <thead className="bg-surface-container-low text-on-surface-variant uppercase tracking-wider text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Product Name</th>
                <th className="px-6 py-4">SKU</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-on-surface divide-y divide-surface-container-highest">
              {/* Row 1 */}
              <tr className="hover:bg-surface-bright transition-colors group">
                <td className="px-6 py-4 font-medium flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center shrink-0">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_L4NI00Cjt2IfMDIFKI3Nr1XTIRyc638Uvo4Qj-ZVwX1Eg4xIrXjbi1I3xUsC_iZAVob6MrLgWp1qGaBu5GDuLugvaPdQfkcoVSB7quRU-qx71Vnzy6x2RfqE_dQo0W76An5S6j26q4mamZn8to2mkZQZ5Y6OCW6JGah7JxX2CCP8rdJ0YOkqn3SzbBacBSJs4mXyyDKYL189C0oc3yrvVbJGcQsSVbP-kqooat6hpbOIPyZ0Cq6-DZGtfocuanppFAjaetCidg"
                      alt="Printer"
                      className="w-full h-full object-cover rounded opacity-80"
                    />
                  </div>
                  Enterprise Laser Printer X1
                </td>
                <td className="px-6 py-4 text-on-surface-variant font-mono">
                  PRN-X1-001
                </td>
                <td className="px-6 py-4">Printers</td>
                <td className="px-6 py-4">$1,299.00</td>
                <td className="px-6 py-4">12</td>
                <td className="px-6 py-4">
                  <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-label">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 rounded transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-surface-bright transition-colors group">
                <td className="px-6 py-4 font-medium flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center shrink-0">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiF-CILVDTvFb7Qb9qqjRtdS0PGi4JRNVdR8nkjeEV5m3QVxHow2byvFWy1xgcxwOPR5ndhzCiBAffj3YlbuCcxmGMhHESZRq_i8n7nEVEBFhKhfi82twnT8GkxF8kJu4P1AoCmLsCnS1xQZcqSHn1DUqz3GwVX8S5CP-FxNIjYWJNdTrEejGFkDTRTPOQrq-OcLseORTZKfF_vonW9TeT5zuG7YVgen-E6vi8q8S9kMrZOqr5U7Hi67ehTIWSQdNo2rHsSVfblw"
                      alt="CCTV"
                      className="w-full h-full object-cover rounded opacity-80"
                    />
                  </div>
                  4K IP Dome Camera Set
                </td>
                <td className="px-6 py-4 text-on-surface-variant font-mono">
                  CAM-4K-SET
                </td>
                <td className="px-6 py-4">CCTV</td>
                <td className="px-6 py-4">$850.00</td>
                <td className="px-6 py-4">
                  <span className="text-tertiary font-medium">5</span>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-label">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 rounded transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-surface-bright transition-colors group">
                <td className="px-6 py-4 font-medium flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center shrink-0">
                    <div className="w-full h-full bg-surface-variant rounded"></div>
                  </div>
                  Cat6 Ethernet Spool (1000ft)
                </td>
                <td className="px-6 py-4 text-on-surface-variant font-mono">
                  NET-C6-1K
                </td>
                <td className="px-6 py-4">Networking</td>
                <td className="px-6 py-4">$185.00</td>
                <td className="px-6 py-4">
                  <span className="text-error font-medium">0</span>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-error/10 text-error px-2.5 py-1 rounded-full text-xs font-label">
                    Out of Stock
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 rounded transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-surface-container-highest flex items-center justify-between text-sm text-on-surface-variant">
          <div>Showing 1 to 3 of 42 products</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-primary/10 text-primary font-medium">
              1
            </button>
            <button className="px-3 py-1 rounded hover:bg-surface-container transition-colors">
              2
            </button>
            <button className="px-3 py-1 rounded hover:bg-surface-container transition-colors">
              3
            </button>
            <button className="px-3 py-1 rounded hover:bg-surface-container transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
