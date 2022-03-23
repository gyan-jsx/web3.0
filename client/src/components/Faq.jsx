import React, {useState} from "react";
import './css/main.css'

import faq_logo from '../../images/que.png'
const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div style={{background: ' rgb(32, 18, 78)'}} className="border rounded-lg mt-3">
        <button
      
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p   style={{olor: '#fff'}} className="text-lg text-white font-medium">{title}</p>
          <svg
          style={{color: '#fff'}}
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p  style={{color: 'rgb(190, 171, 223)'}} className=" whitep">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faq = () => {
    return (
        <div style={{display: 'flex'}} className="">
      <div style={{marginLeft: '5%'}}  class=" lg:max-w-screen-xl md:px-24  lg:py-20 ">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div style={{marginLeft: -50}} class="sectiontitlestyle mb-10 ">
          
            <h2 class=" text-white   font-sans text-3xl font-bold sm:text-4xl ml-3">
                
          Frequently asked <br /> questions.
            </h2>
          
          </div>
        
          <div style={{marginLeft: '-10%'}} class="space-y-4">
            <Item  title="What is a crypto currency ?">
            Cryptocurrency is basically a digital form of currency 
            <br />
             with the support of cryptographic security for conducting 
             <br /> 
             trusted transactions. The underlying technology which 
             <br />
              runs cryptocurrencies is blockchain, and it offers a ledger 
              <br />
               for documenting all transactions. 
            </Item>
            <Item title="How do crypto currency work ?">
            Popular cryptocurrencies such as Ethereum and Bitcoin <br /> work by using three basic pieces of information. The first <br /> important aspect in the working of cryptocurrencies is the <br /> address related to a specific account. The second important <br /> piece of information is the balance you would use for sending <br /> and receiving funds. 
            </Item>
            <Item title="How can I purchase crypto currencies ?">
            Interestingly, you could purchase some cryptocurrencies such as <br /> Bitcoin directly with fiat currency like US dollars. On the other hand, <br /> you might also find some cryptocurrencies which you have to purchase <br /> with Bitcoins or other cryptocurrencies.You can buy cryptocurrencies  <br /> through a wallet, which is basically an online app for holding your <br /> crypto assets.
            </Item>
            <Item title="What are crypto wallets ?">
            The crypto wallets are basically platforms for secure storage of digital assets in comparison to exchanges. Users could hold a wallet through an exchange account or a custody wallet and even from outside the exchange. As a matter of fact, cryptocurrency wallets help in storing the private keys to your cryptocurrency on the blockchain.
            </Item>
            <Item title="What is a blockchain">
            A blockchain is a growing list of records called blocks which are interconnected by utilizing cryptography. Each block contains a cryptographic hash of the previous block, a time stamp, and exchange information. Utilizing blockchain we can safely store information over the shared system, where everybody can see but can’t do any alteration. Blockchain will track all information trade called ledger and it uses a distributed system to verify every exchange.
            </Item>
          </div>
        </div>
      </div>
  
      </div>
    );
  };
  export default Faq