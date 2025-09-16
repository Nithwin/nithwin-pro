import Image from 'next/image'
import React from 'react'

const DeFiSuperpowers = () => {
  const Boxed = [
    {
     name:"Wallet +" ,
     content:`Robust multi-chain wallet support: Trade directly from your own wallet. Be your own bank.
Launch`,
img:'/trigger-img-1.svg'
    },
    {
     name:"THORYield" ,
     content:`Stay on top of your portfolio through tracking your THORChain LPs, staking and wallet balances.
Launch App`,
img:'/trigger-img-2.svg'
    },
    {
     name:"THORName" ,
     content:`Easily manage all of your personal wallet addresses with THORChain's Cross-Chain Name Service.`,
img:'/trigger-img-3.svg'
    },
    {
     name:"THORSafe" ,
     content:`Create and manage THORChain multi-sig wallets for enhanced self-custody and governance.`,
img:'/trigger-img-4.svg'
    },
  ]
  return (
    <section className='bg-[#1C2037] py-20 px-4 sm:px-6 lg:px-8 text-white'>
      <div className='container gap-12 mx-auto max-w-7xl w-full flex flex-col'>
        <div>
          <p className='text-3xl lg:text-6xl text-center font-black'>Giving <span className="bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] text-transparent bg-clip-text">
                You{" "}
              </span> DeFi Superpowers</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
         {
          Boxed.map((item) => (
             <div key={item.name} className='flex max-w-xl bg-[#202c49] p-10 rounded-xl shadow items-center'>
            <div className='flex flex-col justify-between w-3/5 gap-4 '>
              <p className='text-2xl font-bold'>{item.name}</p>
              <p className='text-sm pe-5 text-gray-400'>{item.content}</p>
              <button className='border border-blue-400 hover:bg-blue-400 text-white px-5 py-2 me-auto rounded-full'>Launch App</button>
            </div>
            <div className='w-2/5'>
              <Image
              alt='img'
              src={item.img}
              height={200}
              width={200}
              />
            </div>
          </div>
          ))
         }
        </div>
      </div>
    </section>
  )
}

export default DeFiSuperpowers