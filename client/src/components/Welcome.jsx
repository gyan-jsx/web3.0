import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

import ball1 from "../../images/ball1.png";
import ball2 from "../../images/ball2.png";
import ball3 from "../../images/ball3.png";
import ball4 from "../../images/ball4.png";
import ball5 from "../../images/ball5.png";
import "./css/main.css";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div>
      <img className="particleOne section-particle" src={ball1} alt="" />
      <img className="particleTwo section-particle" src={ball2} alt="" />
      <img className="particleThree section-particle" src={ball3} alt="" />
      <img className="particleFour section-particle" src={ball4} alt="" />
      <img className="particleFive section-particle" src={ball5} alt="" />
      <div style={{ display: "flex" }} className="main">
        <div className="containerStyle">
          <div className="rowStyle">
            <div className="colStyle">
              <div className="bannerContent">
                <h1
                  style={{
                    fontSize: "50px",
                    lineHeight: "65px",
                    marginTop: "25%",
                    fontWeight: 900,
                    marginLeft: "70px",
                    color: "#fff",
                  }}
                >
                  Send Ethereums <br /> across world on <br /> any network.
                </h1>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "3.5%" }} className="box-wrapper-span">
            <span className="about-list">Secure and fraud free.</span>
            <span className="about-list">Tranasction within seconds.</span>
            <span className="about-list">Uses blockchain technology.</span>
          </div>
          {!currentAccount && (
            <div className="button-box-wrapper">
              <button
                onClick={connectWallet}
                type="button"
                style={{ background: "#fff", marginLeft: "10%" }}
                class="donate-with-crypto button"
              >
                <AiFillPlayCircle
                  style={{ color: "rgb(31, 42, 213)", fontSize: "20px" }}
                  className=" mr-2"
                />
                <p style={{ color: "rgb(31, 42, 213)" }}> Connect Wallet</p>
              </button>
            </div>
          )}
        </div>
        <div
          style={{ marginLeft: "10%", marginTop: "7%" }}
          className="containerStyle"
        >
          <div className="rowStyle">
            <div className="colStyle">
              <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
            <Input placeholder="Type 'CONFIRM'" name="keyword" type="text" handleChange={handleChange} />

                <div className="h-[1px] w-full bg-gray-400 my-2" />

                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                  >
                    Send now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
