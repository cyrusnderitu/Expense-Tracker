import React from "react";
import { BiDollar } from "react-icons/bi";
import { RiCoinsFill } from "react-icons/ri";
import { MdSavings } from "react-icons/md";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Bar,
  Legend,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const Main = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const info = [
  {
    "subject": "Rent",
    "A": 120,
    "B": 110,
    "fullMark": 150
  },
  {
    "subject": "Food",
    "A": 98,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Shop",
    "A": 86,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Trans",
    "A": 99,
    "B": 100,
    "fullMark": 150
  },
  {
    "subject": "bill",
    "A": 85,
    "B": 90,
    "fullMark": 150
  },
  {
    "subject": "Enter",
    "A": 65,
    "B": 85,
    "fullMark": 150
  }
]

  return (
    <div className="h-full p-4">
      <div className="grid md:grid-cols-3">
        <div className="">
          <div className="flex items-center gap-x-2 justify-start">
            <div className="border rounded-[50%] bg-gray-200 p-2 hover:bg-blue-500 hover:cursor-pointer transition-[4s] hover:text-white">
              <BiDollar className="text-xl" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-gray-500 capitalize text-[13px]">
                Total Income
              </h2>
              <p className="text-xl font-extrabold">
                $<span>42,500</span>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-x-2 justify-start">
            <div className="border rounded-[50%] bg-gray-200 p-2 hover:bg-blue-500 hover:cursor-pointer transition-[4s] hover:text-white">
              <RiCoinsFill className="text-xl" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-gray-500 capitalize text-[13px]">
                Total Expenses
              </h2>
              <p className="text-xl font-extrabold">
                $<span>27,650</span>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-x-2 justify-start">
            <div className="border rounded-[50%] bg-gray-200 p-2 hover:bg-blue-500 hover:cursor-pointer transition-[4s] hover:text-white">
              <MdSavings className="text-xl" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-gray-500 capitalize text-[13px]">
                Total Savings
              </h2>
              <p className="text-xl font-extrabold">
                $<span>17,350</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="chart h-[250px] mt-8 w-full m-auto">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <XAxis dataKey="name" />
            <YAxis hide="true" />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar
              dataKey="pv"
              barSize={25}
              fill="#413ea0"
              maxBarSize={40}
              legendType="square"
              background="#eff"
            />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="grid md:grid-cols-2 mt-4">
        <div className="">
          <h1 className="text-[18px] font-semibold">Basic Expense</h1>
          <div className="mt-2">
            <RadarChart outerRadius={80} width={250} height={200} data={info} className="text-[14px]">
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Lily"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </div>
        </div>
        <div className="">
          <h1>Transaction History</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
