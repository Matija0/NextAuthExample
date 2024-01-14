"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <div className="flex mx-auto items-center justify-center w-full mt-24">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-1/2 "
      >
        <h4 className="text-2xl font-light text-center">Create New User</h4>
        <label>Full Name</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          required
          type="text"
          value={formData.name}
          className="py-2 px-2 border border-blue-200 rounded-md outline-none"
        />
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          required
          value={formData.email}
          className="py-2 px-2 border border-blue-200 rounded-md outline-none"
        />
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          required
          value={formData.password}
          className="py-2 px-2 border border-blue-200 rounded-md outline-none"
        />
        <input type="submit" value={"Create User"} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer w-1/2 font-bold self-center" />
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </div>
  );
};

export default UserForm;
