import Link from "next/link";

interface PolicySidebarProps {
  currentPath: string;
}

const policies = [
  { path: "/policies/privacy", title: "Privacy Policy" },
  { path: "/policies/cookies", title: "Cookie Policy" },
  { path: "/policies/terms", title: "Terms & Conditions" },
  // Add other policy pages here as needed
];

export default function PolicySidebar({ currentPath }: PolicySidebarProps) {
  return (
    <div className="w-full rounded-lg bg-gray-800/30 p-4 md:w-64 md:p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-200">Policies</h3>
      <nav>
        <ul className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-0 md:space-y-2">
          {policies.map(policy => (
            <li key={policy.path} className="w-auto md:w-full">
              <Link
                href={policy.path}
                className={`block rounded px-3 py-2 transition-colors ${
                  currentPath === policy.path
                    ? "bg-blue-600/20 text-blue-400"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-gray-100"
                }`}
              >
                {policy.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
