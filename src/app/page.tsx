"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center px-6 py-3 border-b bg-white">
        <div className="flex items-center gap-3">
          <img src="/gpi-logo.svg" alt="Gakken Philippines Inc. logo" className="w-10 h-10" />
          <div className="font-bold text-green-900">GAKKEN PHILIPPINES INC.</div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full bg-green-900 text-white py-16 flex flex-col items-center">
        <h1 className="text-6xl font-bold">30</h1>
        <p className="italic text-2xl">years</p>
        <p className="mt-2 text-sm">
          Your Trusted Partner in Printing, Business Innovation and Solution for Over 30 Years
        </p>
      </div>

      {/* Main Content */}
      <div className="text-center mt-10">
        <h2 className="font-bold text-lg">
          WELCOME TO GAKKEN PHILIPPINES INC. VEHICLE MONITORING SYSTEM
        </h2>

        <p className="mt-6 font-semibold">Continue as</p>

        <div className="flex gap-4 justify-center mt-4">
          <button
            onClick={() => router.push("/enroll-vehicle")}
            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Employee
          </button>

          <button
            onClick={() => router.push("/admin-dashboard")}
            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}
