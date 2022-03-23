import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
//import ethereumCard from '../../images/ethereum_card.jpg'

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div id="transactions" className="flex flex-column">
      <a
      
        href="/"
        style={{marginLeft: '20px'}}
        aria-label="View Item"
        className=" overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex flex-col h-full">
          <img
            src={ethereumCard}
            className="object-cover w-full h-48"
            alt=""
          />
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <a
                href={`https://ropsten.etherscan.io/address/${addressFrom}`}
                target="_blank"
                rel="noreferrer"
                
              >
                <p className="text-black text-base">
                  From: {shortenAddress(addressFrom)}
                </p>
              </a>
              <a
              href={`https://ropsten.etherscan.io/address/${addressTo}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-black text-base">
                To: {shortenAddress(addressTo)}
              </p>
            </a>
            <p className="text-black text-base">Amount: {amount} ETH</p>
            </div>
          </div>
          <div className="ml-50 bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timestamp}</p>
          </div>
        </div>
       
      </a>

     

          
        
      
    </div>
  );
};

const Transaction = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);
  return (
    <div>
    <div style={{}} className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-20  ">
        <div>
          
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Here</span>
          </span>{' '}
          are the latest transactions done with your account
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Here it shows the address of the sender and reciever and also time
        </p>
      </div>
     
    

    <div>
      {currentAccount ? (
        <h3 className="passero text-black text-3xl text-center my-2">
        
        </h3>
      ) : (
        <h3 className="text-black text-3xl text-center my-2">
          Connect your account to see the latest transactions
        </h3>
      )}

      <div className="flex flex-wrap justify-center items-center mt-10">
        {[ ...transactions].reverse().map((transaction, i) => (
          <TransactionsCard key={i} {...transaction} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Transaction;
