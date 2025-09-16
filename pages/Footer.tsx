import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'THORYield', href: '#' },
      { name: 'THORChads', href: '#' },
      { name: 'THORNames', href: '#' },
    ],
  },
  {
    title: 'App',
    links: [
      { name: 'Mainnet', href: '#' },
      { name: 'Stagenet', href: '#' },
      { name: 'Testnet', href: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Discord', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Telegram', href: '#' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { name: 'YouTube', href: '#' },
      { name: 'Medium', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1C2037] text-white py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-9xl">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
                <Image
                  src="/header_logo.png" 
                  alt="THORSwap Logo"
                  width={180}
                  height={40}
                />
            </Link>
            <p className="text-gray-400 max-w-sm">
              THORSwap is the leading decentralized exchange (DEX) powered by
              multi-chain THORChain. Perform cross-chain swaps in a
              permissionless, trustless, and non-custodial manner.
            </p>
          </div>

          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-5 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <div className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                        {link.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;