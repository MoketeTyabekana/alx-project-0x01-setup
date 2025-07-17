import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({users}) => {
      const [isModalOpen, setModalOpen] = useState(false);
 const [user, setUser] = useState<UserData | null>(null);

       const handleAddUsers = (newUser: UserData) => {
  setUser({ ...newUser, id: users.length + 1 });
};

  return (
      <div className="flex flex-col h-screen">
    <Header />
    <main className="px-10 pt-20">
      <div className="flex justify-between mb-4">
      <h1 className=" text-2xl font-semibold">Users Content</h1>
      <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-10 py-2 rounded-full text-white hover:bg-blue-800 transition ease-in-out 0.3s">Add User</button>
      </div>

      <div className="grid grid-cols-3 gap-2 ">
        {
          users.map(({  name, username, email,address,website,id,phone,company }: UserProps, key: number) => (
            <UserCard name={name} username={username} email={email} address={address} id={id} phone={phone} website={website} company={company} key={key} />
          ))
        }
      </div>
    </main>

        {isModalOpen && (
      <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUsers} />
    )}
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