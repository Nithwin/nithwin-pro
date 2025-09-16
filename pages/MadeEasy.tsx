import React from "react";
import Image from "next/image";
import {
  FaPlay,
  FaDollarSign,
  FaLink,
  FaChartLine,
  FaUsers,
  FaGasPump,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const VideoCard = ({
  imgSrc,
  large = false,
}: {
  imgSrc: string;
  large: boolean;
}) => (
  <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300">
    <Image
      src={imgSrc}
      alt={"img"}
      width={large ? 800 : 400}
      height={large ? 450 : 225}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-bg duration-300" />
    <div
      className={`absolute inset-0 flex flex-col p-6 ${
        large ? "justify-center items-center text-center" : "justify-end"
      }`}
    >
      <div className="bg-black/40 p-3 rounded-full mb-4">
        <FaPlay className="text-white text-2xl" />
      </div>
    </div>
  </div>
);

const StatCard = ({ icon, title, value }:StatCardProps) => {
  return (
    <div
      className="group bg-white/5  rounded-xl p-4 flex items-center space-x-4
                  transition-all duration-300 ease-in-out
                  hover:bg-gradient-to-r hover:from-gray-600/10 hover:via-gray-700/10 hover:to-blue-600/30 hover:border-cyan-500
                  cursor-pointer"
    >
      <div
        className=" text-2xl
                      transition-colors duration-300
                      group-hover:text-cyan-400 text-white p-3 rounded-full bg-blue-400/20 backdrop-blur-3xl"
      >
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white font-bold text-lg">{value}</p>
      </div>
    </div>
  );
};
const MadeEasy = () => {
  return (
    <section className=" bg-gradient-to-b from-[#446385] via-[#324E7C] to-[#131627] py-20 px-4 sm:px-6 lg:px-8">
      <div className="container lg:max-w-[80rem] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          <span className="bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] bg-clip-text text-transparent">
            Cross-Chain
          </span>{" "}
          Made Easy
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <VideoCard imgSrc="/what-is-thorswap.jpeg" large />
          </div>

          <div className="flex flex-col gap-8">
            <VideoCard imgSrc="/thorswap-aggregator.jpeg" large={false} />
            <VideoCard imgSrc="/thorswap-v2.jpeg" large={false} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <StatCard
            icon={<FaDollarSign />}
            title="$ THOR Price"
            value="$0.06 USD"
          />
          <StatCard icon={<FaLink />} title="Supported" value="11 Chains" />
          <StatCard
            icon={<FaChartLine />}
            title="Total Liquidity"
            value="$169.23M"
          />
          <StatCard icon={<FaGasPump />} title="Total Trades" value="0" />
          <StatCard icon={<FaUsers />} title="Unique Users" value="0" />
        </div>
      </div>
    </section>
  );
};

export default MadeEasy;
