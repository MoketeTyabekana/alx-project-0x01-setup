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
  };

  return <div></div>;
}
