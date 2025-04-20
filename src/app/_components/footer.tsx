"use client";

import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const policies = [
    { path: "/policies/privacy", title: "Privacy Policy" },
    { path: "/policies/cookies", title: "Cookie Policy" },
    { path: "/policies/terms", title: "Terms & Conditions" },
  ];

  return (
    <footer className="border-t border-white/10 p-4 text-center text-gray-300">
      <div>
        <p>&copy; {currentYear} Galleria. All rights reserved.</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          {policies.map(policy => (
            <Link key={policy.path} href={policy.path} className="text-gray-400 transition hover:text-gray-200">
              {policy.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
