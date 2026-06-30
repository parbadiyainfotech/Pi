import { ArrowRight, History } from "lucide-react";
import { Link } from "react-router-dom";

export function SuccessPage() {
  return (
    <div className="flex-grow flex items-center justify-center px-4 relative min-h-[calc(100vh-160px)]">
      {/* Background Atmospheric Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <section className="max-w-3xl w-full relative z-10">
        <div className="bg-surface-container-lowest glass-panel rounded-xl border border-outline-variant/15 p-8 md:p-16 text-center shadow-2xl shadow-on-surface/5">
          {/* Success Icon & Visual Anchor */}
          <div className="mb-10 flex justify-center">
            <div className="relative w-24 h-24 flex items-center justify-center bg-primary-container/10 rounded-full">
              <svg
                className="w-16 h-16 text-primary"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <polyline
                  className="animate-[dash_0.8s_ease-in-out_forwards]"
                  points="20 6 9 17 4 12"
                  style={{ strokeDasharray: 100, strokeDashoffset: 0 }}
                ></polyline>
              </svg>
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-25"></div>
            </div>
          </div>
          
          {/* Identity Content */}
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight mb-4">
            Request Submitted Successfully
          </h1>
          
          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="font-label text-sm uppercase tracking-widest text-secondary font-semibold">
              Reference ID
            </span>
            <div className="bg-surface-container-high px-6 py-2 rounded-lg inline-flex items-center gap-3">
              <code className="font-mono text-xl font-bold text-on-surface-variant tracking-tighter">
                REQ-8092
              </code>
            </div>
          </div>
          
          <div className="max-w-lg mx-auto mb-12">
            <p className="text-on-surface-variant text-lg leading-relaxed font-body">
              Thank you for choosing Parbadiya Infotech. Our technical team will
              review your request and contact you within{" "}
              <span className="font-semibold text-on-surface">24 hours</span> to
              discuss the next steps.
            </p>
          </div>
          
          {/* Action Matrix */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/customer"
              className="w-full sm:w-auto px-10 py-4 rounded-full font-label font-bold text-lg bg-gradient-to-r from-primary to-primary-container text-on-primary transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              Go to Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/customer/services"
              className="w-full sm:w-auto px-10 py-4 rounded-full font-label font-bold text-lg bg-surface-container-high text-primary transition-all hover:bg-surface-variant/80 active:scale-95 flex items-center justify-center gap-2"
            >
              <History className="w-5 h-5" />
              View My Requests
            </Link>
          </div>
        </div>
        
        {/* Contextual Help */}
        <div className="mt-8 text-center">
          <p className="font-label text-sm text-secondary uppercase tracking-[0.2em]">
            Need immediate assistance?
            <a
              href="#"
              className="text-primary font-bold hover:underline transition-all ml-2 underline-offset-4 decoration-1"
            >
              Contact Support
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
