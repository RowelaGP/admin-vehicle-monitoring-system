"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center px-6 py-3 border-b bg-white">
        <div className="flex items-center gap-3">
          <img src="/GPI Logo Horizontal Black.png" alt="Gakken Philippines Inc. logo" className="h-12" />
        </div>
      </div>

      {/* Banner */}
      <div className="w-full bg-[#005652] px-6 py-6 flex flex-col items-center justify-center">
        <img src="/30 Years logo_Official Tagline.png" alt="30 Years Anniversary Logo" className="h-48" />
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
            className="px-6 py-2 bg-[#00877F] text-white rounded-lg hover:bg-[#005652]"
          >
            Employee
          </button>

          <button
            onClick={() => router.push("/admin-dashboard")}
            className="px-6 py-2 bg-[#00877F] text-white rounded-lg hover:bg-[#005652]"
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}
