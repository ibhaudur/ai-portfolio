"use client";
import React from "react";
import Form from "./Form";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { RiPhoneLine } from "react-icons/ri";
import { Icons } from "../utils/data";

const Contact = () => {
  return (
    <footer id="contact" className="px-4 pb-10 pt-4 sm:pb-12">
      <div className="section-shell">
        <div className="panel-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.15fr]">
            {/* Left Column - Branding & Contact Info */}
            <div className="space-y-6 border-r border-white/10 pr-0 lg:pr-8">
              <div>
                <p className="text-2xl font-bold text-amber-300">IR.</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Crafting scalable, secure, and beautiful digital products.
                  Let&apos;s build something extraordinary together.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-start gap-3">
                  <IoLocationOutline className="mt-1 flex-shrink-0 text-xl text-emerald-400" />
                  <p className="text-sm text-slate-300">
                    112, Pidari Kovil St, near Kunjamal School, Kudavasal,
                    612601, Tiruvarur district, Tamil Nadu.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineMail className="flex-shrink-0 text-lg text-emerald-400" />
                  <p className="text-sm text-slate-300">
                    ibhaudurrahman1999@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <RiPhoneLine className="flex-shrink-0 text-lg text-emerald-400" />
                  <p className="text-sm text-slate-300">+91 9715 106 426</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {Icons.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => window.open(item.link, "_blank")}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-800/70 text-lg text-emerald-400 transition hover:-translate-y-1 hover:border-emerald-400 hover:text-white"
                  >
                    <item.tag />
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  Get in touch
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Send me a message
                </h3>
              </div>
              <p className="text-sm text-slate-300">
                Have a project in mind or want to collaborate? Drop me a line,
                and I&apos;ll get back to you as soon as possible.
              </p>
              <Form />
            </div>
          </div>
        </div>
        <div className="green-separator mt-12 mb-6">
          <p
            className="text-center text-muted pt-5"
            style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
          >
            &copy; 2024 Ibhaudur Rahman &mdash; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
