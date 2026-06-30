import { ArrowRight, CheckCircle2, Monitor, Printer, Camera } from "lucide-react";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-8 overflow-hidden bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary-container/20 text-tertiary font-label text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-tertiary" />
              Trusted Regional Partner
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-on-surface">
              Precision <br />
              <span className="text-gradient">Security & Computing</span> <br />
              Solutions.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Elevating infrastructure with high-end surveillance and elite
              computing hardware. We architect reliable systems for modern
              environments demanding uncompromising performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/request" className="btn-primary flex items-center justify-center gap-2">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn-secondary">Explore Services</button>
            </div>
          </div>
          <div className="relative z-10 lg:h-[600px] w-full rounded-lg overflow-hidden ghost-border bg-surface-container-lowest p-4">
            <div
              className="bg-cover bg-center w-full h-full rounded"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiF-CILVDTvFb7Qb9qqjRtdS0PGi4JRNVdR8nkjeEV5m3QVxHow2byvFWy1xgcxwOPR5ndhzCiBAffj3YlbuCcxmGMhHESZRq_i8n7nEVEBFhKhfi82twnT8GkxF8kJu4P1AoCmLsCnS1xQZcqSHn1DUqz3GwVX8S5CP-FxNIjYWJNdTrEejGFkDTRTPOQrq-OcLseORTZKfF_vonW9TeT5zuG7YVgen-E6vi8q8S9kMrZOqr5U7Hi67ehTIWSQdNo2rHsSVfblw')",
              }}
            ></div>
          </div>
        </div>
        {/* Atmospheric background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl font-bold text-on-surface">
              Architected for Reliability
            </h2>
            <p className="text-on-surface-variant text-lg">
              Our core disciplines combine rigorous technical standards with
              premium hardware procurement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(300px,_auto)]">
            {/* Service 1: CCTV */}
            <div className="md:col-span-8 bg-surface-container-low rounded-lg p-10 flex flex-col justify-between group transition-all duration-300 hover:bg-surface-container">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <Camera className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                    CCTV Camera Sale & Installation
                  </h3>
                  <p className="text-on-surface-variant max-w-xl leading-relaxed">
                    Comprehensive surveillance architecture. From high-resolution
                    IP camera procurement to strategic deployment and secure
                    network integration, ensuring total environmental visibility.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center text-primary font-label font-semibold group-hover:translate-x-2 transition-transform cursor-pointer">
                View Surveillance Specs
                <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </div>

            {/* Service 2: Computing */}
            <div className="md:col-span-4 bg-surface-dim rounded-lg p-10 flex flex-col justify-between group transition-all duration-300 hover:bg-surface-variant">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                  <Monitor className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                    Computer Sale & Repair
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Elite workstations and enterprise fleet management.
                    Diagnostic repair and component upgrades for sustained peak
                    performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3: Printers */}
            <div className="md:col-span-12 bg-surface-container rounded-lg p-10 flex flex-col md:flex-row items-center gap-12 group">
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <Printer className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                    New Printer & Repair
                  </h3>
                  <p className="text-on-surface-variant max-w-2xl leading-relaxed">
                    High-volume printing solutions and precise maintenance
                    protocols. We supply leading brand hardware and execute rapid
                    intervention repairs to minimize workflow disruption.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3 aspect-video md:aspect-square bg-surface-container-lowest rounded-lg overflow-hidden ghost-border">
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_L4NI00Cjt2IfMDIFKI3Nr1XTIRyc638Uvo4Qj-ZVwX1Eg4xIrXjbi1I3xUsC_iZAVob6MrLgWp1qGaBu5GDuLugvaPdQfkcoVSB7quRU-qx71Vnzy6x2RfqE_dQo0W76An5S6j26q4mamZn8to2mkZQZ5Y6OCW6JGah7JxX2CCP8rdJ0YOkqn3SzbBacBSJs4mXyyDKYL189C0oc3yrvVbJGcQsSVbP-kqooat6hpbOIPyZ0Cq6-DZGtfocuanppFAjaetCidg')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-surface-container-high relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">
            Secure Your Operations Today
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Consult with our technical specialists to design a custom
            infrastructure solution tailored to your operational demands.
          </p>
          <div className="pt-8">
            <Link to="/request" className="btn-primary text-lg px-12 py-4 shadow-sm hover:shadow-md inline-block">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
