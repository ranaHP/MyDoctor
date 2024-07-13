import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  
const DoctorList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <div className='w-full flex'>
        {users.map((item, index) => (
            <div className='h-[200px] w-[300px] bg-slate-50 rounded-lg m-10 flex flex-col flex-nowrap items-center justify-center' key={index}>
                <div>{item.name}</div>
                <div>{item.email}</div>
                <div>{item.username}</div>
            </div>
        ))}  

    </div>
  )
}

export default DoctorList