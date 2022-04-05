import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const data = [
    {
      "month": "Mar",
      "investment": 10000,
      "sell": 241,
      "revenue": 10401
    },
    {
      "month": "Apr",
      "investment": 20000,
      "sell": 423,
      "revenue": 24500
    },
    {
      "month": "May",
      "investment": 50000,
      "sell": 726,
      "revenue": 67010
    },
    {
      "month": "Jun",
      "investment": 50000,
      "sell": 529,
      "revenue": 40405
    },
    {
      "month": "Jul",
      "investment": 60000,
      "sell": 601,
      "revenue": 50900
    },
    {
      "month": "Aug",
      "investment": 70000,
      "sell": 670,
      "revenue": 61000
    }
  ];

  return (
    <section className='py-10 px-5'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-5">
          <div>
            <h3 className='text-blue-500 font-bold text-2xl text-center mb-5'>Month wise sell</h3>
            <ResponsiveContainer width="100%" aspect={2}>
              <LineChart
                width={400}
                height={370}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis dataKey="sell" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className='text-blue-500 font-bold text-2xl text-center mb-5'>Invest VS Revenue</h3>
            <ResponsiveContainer width="100%" aspect={2}>
              <AreaChart
                width={400}
                height={350}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis dataKey="investment" />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className='text-blue-500 font-bold text-2xl text-center mb-5'>Invest VS Revenue</h3>
            <ResponsiveContainer width="100%" aspect={2}>
              <BarChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis dataKey="investment" />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className='text-blue-500 font-bold text-2xl text-center mb-5'>Invest VS Revenue</h3>
            <ResponsiveContainer width="100%" aspect={2}>
              <PieChart width={400} height={400}>
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;