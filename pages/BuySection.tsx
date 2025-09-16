import Image from "next/image";
import React from "react";

const BuySection = () => {
  return (
    <section className="bg-[#1C2037] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="container gap-12 mx-auto max-w-7xl w-full flex flex-col">
        <div className="flex justify-between w-full items-center">
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-5xl font-bold">
              Full{" "}
              <span className="bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] text-transparent bg-clip-text">
                Self-custody
              </span>
            </p>
            <p className="text-xl text-gray-400">
              Swap from your own wallet. Be your own bank. No centralized
              bridges or wrapping assets
            </p>
          </div>
          <div className="w-1/2 ">
            <Image
              alt="img"
              width={400}
              height={400}
              className="mx-auto"
              src={"/wallet.png"}
            />
          </div>
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="w-1/2 ">
            <Image
              alt="img"
              width={500}
              height={500}
              className="mx-auto"
              src={"/with-us-img-3.png"}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <p className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] text-transparent bg-clip-text">
                Earn REAL Yields{" "}
              </span>
              on your Native Assets
            </p>
            <p className="text-xl text-gray-400">
              Provide Liquidity and Earn Yield on your Native Assets with <span className="text-white">Impermanent Loss Protection</span>
            </p>
            <div>
                <button className="bg-cyan-400 text-white px-8 py-4 rounded-full text-sm hover:opacity-85 delay-150 ease-linear cursor-pointer">Deposit</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full items-center">
          
          <div className="w-1/2 flex flex-col gap-5">
            <p className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] text-transparent bg-clip-text">
                $THOR{" "}
              </span>
              Value Accrual
            </p>
            <p className="text-xl text-gray-400">
              Stake $THOR token and earn <span className="text-white">75%</span> of protocol revenues, trading discounts and other community perks.
            </p>
            <div className="flex gap-5">
                <button className="bg-cyan-400 text-white font-semibold px-8 py-4 rounded-full text-sm hover:opacity-85 delay-150 ease-linear cursor-pointer">Buy $THOR</button>
                <button className="bg-blue-400 text-white font-semibold px-8 py-4 rounded-full text-sm hover:opacity-85 delay-150 ease-linear cursor-pointer">Stake</button>
            </div>
          </div>
          <div className="w-1/2 ">
            <Image
              alt="img"
              width={500}
              height={500}
              className="mx-auto"
              src={"/with-us-img-4.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
