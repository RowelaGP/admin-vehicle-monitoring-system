"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-6 py-3 border-b bg-white">
        <div className="flex items-center gap-3">
          <img src="/GPI Logo Horizontal Black.png" alt="Gakken Philippines Inc. logo" className="w-10 h-10" />
          <div className="font-bold text-[#005652]">GAKKEN PHILIPPINES INC.</div>
        </div>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-[#00877F] text-white rounded-lg hover:bg-[#005652]"
        >
          Back to Home
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Admin dashboard coming soon...</p>
        </div>
      </div>
    </div>
  );
}
