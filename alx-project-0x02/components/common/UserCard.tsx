import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address, phone, website, company }) => {
  return (
    <div className="p-4 border rounded shadow mb-4 hover:shadow-lg transition">
      <h2 className="font-bold text-xl mb-2">{name}</h2>
      <p>Email: {email}</p>
      <p>Address: {address.street}, {address.city}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Company: {company.name}</p>
    </div>
  );
};

export default UserCard;
