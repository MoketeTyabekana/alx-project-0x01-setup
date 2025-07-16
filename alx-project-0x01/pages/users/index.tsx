import PostCard from "@/components/common/PostCard";
import React from "react";
import UserCard from '../../components/common/UserCard';
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const posts: React.FC<UserProps[]> = ({posts}) => {
     console.log(posts)
  return (
      <div className="flex flex-col h-screen">
    <Header />
    <main className="py-4 px-10">
      <div className="flex justify-between mb-4">
      <h1 className=" text-2xl font-semibold">posts Content</h1>
      <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
      </div>

      <div className="grid grid-cols-3 gap-2 p-0 ">
        {
          posts?.map(({  name, username, email,address }: UserProps, key: number) => (
            <UserCard name={name} username={username} email={email} address={address} key={key} />
          ))
        }
      </div>
    </main>
  </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

 export default posts;