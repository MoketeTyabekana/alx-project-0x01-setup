import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

export default function UserModal() {
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
  };


  return <div></div>;
}
