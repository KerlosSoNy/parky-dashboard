import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: 'Jan', value: 300000 },
  { name: 'Feb', value: 600000 },
  { name: 'Mar', value: 450000 },
  { name: 'Apr', value: 500000 },
  { name: 'May', value: 400000 },
  { name: 'Jun', value: 682500 },
  { name: 'Jul', value: 350000 },
  { name: 'Aug', value: 650000 },
  { name: 'Sep', value: 500000 },
  { name: 'Oct', value: 300000 },
  { name: 'Nov', value: 400000 },
  { name: 'Dec', value: 450000 },
];

const BarChartComponent: React.FC = () => {
  return (
    <div className="w-full min-h-[350px] max-h-[600] bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-[14px] font-medium text-[#A3AED0]">Total Spent</h2>
      <p className="text-[34px] font-bold text-primary">EGP 682.5K</p>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fill: '#A0AEC0' }} />
          <YAxis tickFormatter={(value) => `${value / 1000}K`} tick={{ fill: '#A0AEC0' }} />
          <Tooltip formatter={(value: number) => `EGP ${value.toLocaleString()}`} />
          <ReferenceLine y={682500} label="682.5K" stroke="#2F855A" strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#2F855A" radius={[20, 20, 0, 0]} className='pt-2' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
