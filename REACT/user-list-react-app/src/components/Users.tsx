import { useEffect, useState } from "react";
import axios from "axios";

export const Users = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [isIdShow, setIsShow] = useState(true);
};

const getData = async () => {
    const { data } = await axios.get(' https://api.github.com/users');
    setUsers(data);
    //try catch
};

useEffect(() => {
    getData();
}, []);

return (
    <div>
        <h2>Content</h2>
    </div>
)

{
    Users.map((user) => (
        <UserCard key={user.id} user={user} />

    ))
}
<button>
} 
