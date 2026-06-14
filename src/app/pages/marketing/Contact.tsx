import React from "react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Get in touch.
            </h1>
            <p className="text-lg text-zinc-600 mb-10">
              Have questions about pricing, features, or want a personalized demo? Our team is here to help you scale.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">Email Us</h3>
                  <p className="text-zinc-600">sales@tiffora.com</p>
                  <p className="text-zinc-600">support@tiffora.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">Call Us</h3>
                  <p className="text-zinc-600">+1 (800) 555-0199</p>
                  <p className="text-zinc-500 text-sm">Mon-Fri, 9am to 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">HQ</h3>
                  <p className="text-zinc-600">100 Logistics Way, Suite 400</p>
                  <p className="text-zinc-600">New York, NY 10011</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" placeholder="Jane" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              <Input label="Work Email" type="email" placeholder="jane@company.com" />
              <Input label="Company Name" placeholder="Fresh Meals Inc." />
              <div className="space-y-1.5">
                <label className="text-sm font-medium leading-none text-zinc-700">How can we help?</label>
                <textarea 
                  className="flex w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm min-h-[120px] resize-y"
                  placeholder="Tell us about your current operational volume..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full mt-4" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
