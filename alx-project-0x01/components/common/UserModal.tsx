import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2/3 ">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New user</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-gray-700 font-medium mb-2"
            >
              User ID
            </label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={user.id}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
focus:ring-blue-500"
              placeholder="Enter Your Firstname"
            />
          </div>

                    <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Surname
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
focus:ring-blue-500"
              placeholder="Enter Your Lastname"
            />
          </div>

<div className="mb-4">
  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={user.email}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter your email"
  />
</div>

<div className="mb-4">
  <label htmlFor="street" className="block text-gray-700 font-medium mb-2">
    Street
  </label>
  <input
    type="text"
    id="street"
    name="street"
    
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter street address"
  />
</div>

<div className="mb-4">
  <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
    City
  </label>
  <input
    type="text"
    id="city"
    name="city"
   
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter city"
  />
</div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Add user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
