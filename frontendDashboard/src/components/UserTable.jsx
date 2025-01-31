import React, { useState} from 'react'


// User Table Component
const UserTable = () => {
    const [users, setUsers] = useState([
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'inactive' }
    ]);
  
    const handleDelete = (userId) => {
      setUsers(users.filter(user => user.id !== userId));
    };
  
    return (
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Email</th>
            <th className="text-left py-2">Role</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.role}</td>
              <td className="py-2">
                <span className={`px-2 py-1 rounded ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {user.status}
                </span>
              </td>
              <td className="py-2">
                <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                <button 
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default UserTable;
