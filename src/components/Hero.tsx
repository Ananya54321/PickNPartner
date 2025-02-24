import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-slate-50 py-32 pt-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Grow Your Newsletter{" "}
            <span className="relative">
              <span className="relative z-10 text-blue-600">4x Faster</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12  mx-auto leading-relaxed">
            Connect with other newsletter creators and exchange audiences to
            grow your subscriber base organically. Save up to{" "}
            <span className="font-bold">100%</span> compared to traditional
            advertising.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <button
              onClick={() =>
                (window.location.href = "https://discord.gg/tGZAgPZjgz")
              }
              className="group w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Fix your growth, yesterday
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
