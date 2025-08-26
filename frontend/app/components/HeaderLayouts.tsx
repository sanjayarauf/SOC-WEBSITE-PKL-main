"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbDynamic } from "./navbar/BreadcrumbDynamic";
import DashboardNavbar from "./navbar/DashboardNavbar";

export default function HeaderLayout() {
  const pathname = usePathname();

  // Jangan render navbar saat di halaman login/khusus
  if (["/", "/login", "/activate", "/pembayaran"].includes(pathname)) return null;

  return (
    <div className="relative z-0 pb-4">
      {/* Background animasi */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#0a1120] to-[#050a15] overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Header content */}
      <header className="relative z-10">
        <DashboardNavbar />
        <BreadcrumbDynamic />
      </header>

      {/* Separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-4"></div>
    </div>
  );
}
