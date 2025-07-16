import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard:React.FC<UserProps> = ({name, username, email, phone, website, address, company}) => {

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">{name} ({username})</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-gray-700 mb-1">{phone}</p>
      <p className="text-gray-700 mb-1">{website}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Address:</h3>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
        <p>📍 Lat: {address.geo.lat}, Lng: {address.geo.lng}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Company:</h3>
        <p>{company.name}</p>
        <p><em>{company.catchPhrase}</em></p>
        <p>{company.bs}</p>
      </div>
    </div>
  );

};

export default UserCard;
