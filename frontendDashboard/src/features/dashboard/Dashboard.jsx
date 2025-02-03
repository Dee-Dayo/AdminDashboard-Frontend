import React, {useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import UserTable from '../../components/UserTable';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


Chart.register(...registerables);

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  // Mock data - replace with API calls
  const stats = {
    totalUsers: 2453,
    activeUsers: 1892,
    newSignups: 124,
    revenue: 45230
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const userActivityData = {
    labels: ['Admins', 'Regular Users'],
    datasets: [{
      label: 'User Activity',
      data: [12, 19],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
    }]
  };

  return (
    <div className="flex">
      
      
      <div className="flex-1">

        
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-500">Total Users</h3>
              <p className="text-2xl font-bold">{stats.totalUsers}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-500">Active Users</h3>
              <p className="text-2xl font-bold">{stats.activeUsers}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-500">New Signups</h3>
              <p className="text-2xl font-bold">{stats.newSignups}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-500">Revenue</h3>
              <p className="text-2xl font-bold">${stats.revenue.toLocaleString()}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex gap-4">
            <select 
              className="p-2 border rounded"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="year">Last Year</option>
            </select>

            <div className="flex gap-2">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="p-2 border rounded"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="p-2 border rounded"
              />
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold mb-4">Revenue Trends</h3>
              <Line data={revenueData} />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold mb-4">User Activity</h3>
              <Bar data={userActivityData} />
            </div>
          </div>

          {/* User Management Table */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-4">User Management</h3>
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
