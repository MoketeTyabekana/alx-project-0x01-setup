import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard:React.FC<UserProps> = ({name, username, email,  address}) => {

  return (
    <div className="max-w-xl  my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-2">{name} ({username})</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Address:</h3>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
        <p> Lat: {address.geo.lat}, Lng: {address.geo.lng}</p>
      </div>
    </div>
  );

};

export default UserCard;
