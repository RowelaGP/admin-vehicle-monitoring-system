"use client";

import { useRouter } from "next/navigation";

export default function ChooseVehicleType() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full flex items-center px-6 py-3 border-b bg-white">
        <div className="flex items-center gap-2 font-bold text-green-900">
          <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-white">
            GPI
          </div>
          GAKKEN PHILIPPINES INC.
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-teal-900 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          {/* Title Bar */}
          <div className="bg-teal-800 text-white px-6 py-4 rounded-t-lg font-semibold">
            Enroll Vehicle
          </div>

          {/* Content */}
          <div className="bg-teal-900 text-white px-6 py-12 rounded-b-lg flex flex-col items-center justify-center gap-8">
            <h2 className="text-2xl font-semibold text-center">
              What type of vehicle do you own?
            </h2>

            <div className="flex gap-6">
              <button
                onClick={() => router.push("/enroll-vehicle/form?type=car")}
                className="px-8 py-3 bg-white text-teal-900 font-bold rounded-md hover:bg-gray-200 transition"
              >
                CAR
              </button>

              <button
                onClick={() => router.push("/enroll-vehicle/form?type=motorcycle")}
                className="px-8 py-3 bg-white text-teal-900 font-bold rounded-md hover:bg-gray-200 transition"
              >
                MOTORCYCLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
