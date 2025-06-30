import React, { useState } from "react";

const FormSection = () => {
  const [form, setForm] = useState({ firstName: "Samyukthaa", lastName: "Murali", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.firstName && form.lastName && form.phone) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 max-w-md">
      <label className="block mb-1 text-sm text-gray-700">First name</label>
      <input
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-600 rounded bg-white"
      />
      <label className="block mb-1 text-sm text-gray-700">Last name</label>
      <input
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-600 rounded bg-white"
      />
      <label className="block mb-1 text-sm text-gray-700">Phone number</label>
      <input
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        className="w-full mb-3 p-2 border border-gray-600 rounded bg-white"
      />
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded font-semibold hover:opacity-90"
      >
        CONTINUE
      </button>
    </form>
  );
};

export default FormSection;