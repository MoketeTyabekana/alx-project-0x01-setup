import React from "react";
import UserCard from '../../components/common/UserCard';
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({users}) => {
     console.log(users)
  return (
      <div className="flex flex-col h-screen">
    <Header />
    <main className="py-4 px-10">
      <div className="flex justify-between mb-4">
      <h1 className=" text-2xl font-semibold">Users Content</h1>
      <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
      </div>

      <div className="grid grid-cols-3 gap-2 p-0 ">
        {
          users.map(({  name, username, email,address,website,id,phone,company }: UserProps, key: number) => (
            <UserCard name={name} username={username} email={email} address={address} id={id} phone={phone} website={website} company={company} key={key} />
          ))
        }
      </div>
    </main>
  </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

 export default Users;