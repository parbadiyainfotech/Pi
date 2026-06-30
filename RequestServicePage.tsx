import React from "react";
import { User, Wrench, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function RequestServicePage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <div className="flex-grow flex flex-col w-full max-w-7xl mx-auto px-8 py-16 md:py-24">
      {/* Header Section */}
      <div className="mb-16 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-on-surface leading-tight mb-6 tracking-tight">
          Request Service
        </h1>
        <p className="text-xl text-on-surface-variant font-body leading-relaxed">
          Expert attention for your technical infrastructure. Describe your
          requirements below, and our specialists will formulate a precise
          intervention plan.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Form Column */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-sm border border-surface-variant/30">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Contact Details Group */}
            <div className="space-y-6">
              <h2 className="text-xl font-headline font-semibold text-on-surface flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="block text-sm font-label font-medium text-on-surface-variant"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest input-ghost-border rounded-lg px-4 py-3 text-on-surface transition-colors font-body"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g., Jane Doe"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-sm font-label font-medium text-on-surface-variant"
                    htmlFor="company"
                  >
                    Company (Optional)
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest input-ghost-border rounded-lg px-4 py-3 text-on-surface transition-colors font-body"
                    id="company"
                    name="company"
                    placeholder="e.g., Acme Corp"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-sm font-label font-medium text-on-surface-variant"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest input-ghost-border rounded-lg px-4 py-3 text-on-surface transition-colors font-body"
                    id="email"
                    name="email"
                    placeholder="jane@example.com"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-sm font-label font-medium text-on-surface-variant"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest input-ghost-border rounded-lg px-4 py-3 text-on-surface transition-colors font-body"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    required
                    type="tel"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-surface-variant/50 w-full"></div>

            {/* Request Details Group */}
            <div className="space-y-6">
              <h2 className="text-xl font-headline font-semibold text-on-surface flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Service Details
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    className="block text-sm font-label font-medium text-on-surface-variant"
                    htmlFor="serviceType"
                  >
                    Category of Service
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-surface-container-lowest input-ghost-border rounded-lg px-4 py-3 text-on-surface transition-colors font-body appearance-none cursor-pointer"
                      id="serviceType"
                      name="serviceType"
                      required
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select a category...
                      </option>
                      <option value="cctv">CCTV Installation & Maintenance</option>
                      <option value="computing">
                        Computing Diagnostics & Repair
                      </option>
                      <option value="printers">
                        Printer Service & Optimization
                      </option>
                      <option value="network">Network Infrastructure</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-sm font-label font-medium text-on-surface-variant"
                    htmlFor="description"
                  >
                    Detailed Description
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest input-ghost-border rounded-lg px-4 py-3 text-on-surface transition-colors font-body resize-none"
                    id="description"
                    name="description"
                    placeholder="Please describe the issue or your specific requirements in detail..."
                    required
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex items-center justify-between">
              <p className="text-sm text-on-surface-variant font-label max-w-sm">
                By submitting this request, you agree to our processing of your
                data for service fulfillment.
              </p>
              <button
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3.5 rounded-full font-label font-medium hover:opacity-90 transition-opacity shadow-sm"
                type="submit"
              >
                Submit Request
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          {/* Contact Card */}
          <div className="bg-surface-container-low rounded-xl p-8 shadow-sm">
            <h3 className="text-lg font-headline font-semibold text-on-surface mb-6">
              Direct Contact
            </h3>
            <ul className="space-y-6 font-body text-sm text-on-surface-variant">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <strong className="block text-on-surface font-medium mb-1">
                    Headquarters
                  </strong>
                  Karnala para, Post ghodiyal<br />
                  Taluka Vadgam<br />
                  District Banaskantha, Pin 385421
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <strong className="block text-on-surface font-medium mb-1">
                    Telephone
                  </strong>
                  8849183347
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <strong className="block text-on-surface font-medium mb-1">
                    Email Support
                  </strong>
                  parbadiyainfotech@gmail.com
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <strong className="block text-on-surface font-medium mb-1">
                    Operating Hours
                  </strong>
                  Monday - Saturday<br />
                  09:00 AM - 06:00 PM
                </div>
              </li>
            </ul>
          </div>

          {/* Reassurance / Image Context */}
          <div className="rounded-xl overflow-hidden shadow-sm relative h-64 bg-surface-container-high">
            <img
              alt="Technical expertise illustration"
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm7vYHJ2MjEyFa4aCytnKlnvdjzvG6lGr9-S1t680kaBmFj2ieDCxmr1P3xWaQeLRO6xIDHfNqC4lBwQZgoNHXWxt2Xu3Lr4MWqHEmbXk_Kc5_TFU3F1_lyjECYGqU6NGp8kd9ZZRG7eKKGkjspyLelqVik3__uL-E43yOL_NOZ_z48T_00FGvwRf7epvhmILERq1Or35MT5DnSFaLRsxkAOqEV4Sq8KvX92RCSbbjEbUH00G-IWRFWrrytOaqOtAGFZNFSGGLrA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-on-tertiary font-headline font-semibold mb-1">
                Precision Guaranteed
              </h4>
              <p className="text-on-tertiary/80 font-body text-sm">
                Our certified technicians ensure rigorous standards for every
                deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
