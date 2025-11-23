import React from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return { props: { users } };
}

export default Users;
