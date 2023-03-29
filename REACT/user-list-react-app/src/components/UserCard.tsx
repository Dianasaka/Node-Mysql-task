export const UserCard = ({ user }: any) => {
    console.log(user);
    return <div>
        <p>{user.login}</p>
        <p>{user.type}</p>
        <p>{user.url}</p>
    </div>
}