"use client";

import { useState } from "react";

export default function EnrollVehiclePage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    department: "",
    branch: "",
    email: "",
    issuanceCategory: "",
    plateNumber: "",
    vin: "",
    engineNumber: "",
    yearModel: "",
    vehicleModel: "",
    tplPolicyNumber: "",
    moaDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Vehicle Enrolled!");
  };

    return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Enroll Vehicle</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#005652] text-white p-6 rounded-xl shadow-lg max-w-5xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Employee Information */}
          <div>
            <h2 className="font-semibold mb-3">Employee Information</h2>

            <div className="grid grid-cols-2 gap-3">
              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="input"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="input"
              />
            </div>

            <input
              name="designation"
              placeholder="Designation"
              value={form.designation}
              onChange={handleChange}
              className="input mt-3"
            />

            <input
              name="department"
              placeholder="Department"
              value={form.department}
              onChange={handleChange}
              className="input mt-3"
            />

            <input
              name="branch"
              placeholder="Branch"
              value={form.branch}
              onChange={handleChange}
              className="input mt-3"
            />

            <input
              name="email"
              placeholder="Company Email"
              value={form.email}
              onChange={handleChange}
              className="input mt-3"
            />
          </div>

          {/* Vehicle Information */}
          <div>
            <h2 className="font-semibold mb-3">Vehicle Information</h2>

            <input
              name="issuanceCategory"
              placeholder="Issuance Category"
              value={form.issuanceCategory}
              onChange={handleChange}
              className="input"
            />

            <div className="grid grid-cols-2 gap-3 mt-3">
              <input
                name="plateNumber"
                placeholder="Plate No."
                value={form.plateNumber}
                onChange={handleChange}
                className="input"
              />
              <input
                name="vin"
                placeholder="Chassis No / VIN"
                value={form.vin}
                onChange={handleChange}
                className="input"
              />
            </div>

            <input
              name="engineNumber"
              placeholder="Engine No."
              value={form.engineNumber}
              onChange={handleChange}
              className="input mt-3"
            />

            <div className="grid grid-cols-2 gap-3 mt-3">
              <input
                name="yearModel"
                placeholder="Year Model"
                value={form.yearModel}
                onChange={handleChange}
                className="input"
              />
              <input
                name="vehicleModel"
                placeholder="Vehicle Model"
                value={form.vehicleModel}
                onChange={handleChange}
                className="input"
              />
            </div>

            <input
              name="tplPolicyNumber"
              placeholder="TPL Policy No."
              value={form.tplPolicyNumber}
              onChange={handleChange}
              className="input mt-3"
            />

            <input
              type="date"
              name="moaDate"
              value={form.moaDate}
              onChange={handleChange}
              className="input mt-3"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="reset"
            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
          >
            Clear Entries
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-[#00877F] hover:bg-[#005652] text-white rounded-md font-semibold"
          >
            Enroll
          </button>
        </div>
      </form>
    </div>
  );
}
