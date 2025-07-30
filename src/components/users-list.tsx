import useUsers from "../hooks/use-users";

export default function UsersList() {
  const { users, isLoadingUsers } = useUsers();

  if (isLoadingUsers) {
    return <div>Carregadndo os usuários</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          ID:{user.id} | Name: {user.name}
        </li>
      ))}
    </ul>
  );
}
