import React from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="flex justify-center items-center py-5 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-3 items-center">
          <p className="text-indigo-100">
            For queries, Please reach out to us at:
          </p>
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6 text-indigo-200" />
            <a
              href="mailto:hello@pickandpartner.com"
              className="text-indigo-100 hover:text-white">
              hello@pickandpartner.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
