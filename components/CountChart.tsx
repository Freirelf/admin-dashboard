"use client";

import Image from "next/image";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#FFFFFF",
  },

  {
    name: "homens",
    count: 50,
    fill: "#83a6ed",
  },
  
  {
    name: "mulheres",
    count: 40,
    fill: "#ffc658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Estudantes</h1>
        <Image 
          src="/icons/moreDark.png"
          alt="more"
          width={20}
          height={20}
        />
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={32}
              data={data}
            >
              <RadialBar background dataKey="count" />
            </RadialBarChart>
          </ResponsiveContainer>
          <Image
            src="/icons/maleFemale.png"
            alt=""
            width={50}
            height={50}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-blue-300 rounded-full"/>
          <h1 className="font-bold">185</h1>
          <h2 className="text-sm text-gray-300">homens (55%)</h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-pink-300 rounded-full"/>
          <h1 className="font-bold">185</h1>
          <h2 className="text-sm text-gray-300">mulheres (55%)</h2>
        </div>


      </div>
    </div>
  );
};

export default CountChart;
