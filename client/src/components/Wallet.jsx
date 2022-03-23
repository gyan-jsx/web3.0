import React from 'react'
import './css/main.css'

import walletbg from '../../images/wallet.png'

import { useNavigate } from 'react-router-dom'



const Wallet = () => {
const navigate = useNavigate();
  return (
    <div id='wallet-style' style={{marginTop: '10%'}}>
        <div className="wallet-container-style">
            <div className="wallet-row-style">
                <div className="wallet-col-style">
                    <div style={{}} className="wallet-box-wrapper">
                        <img style={{width: '100%', height: 'auto', display: 'block'}} src={walletbg} alt="" />
                    </div>
                </div>    
                <div className="wallet-col-style">
                    <div style={{marginTop: '-10px'}} className="wallet-box-wrapper">
                        <div className="wallet-section-title-style">
                            <h1 className="wallet-heading">
                                Crypto Managemet Wallet
                            </h1>
                        </div>
                        <p style={{color: 'rgb(190, 171, 223)', marginTop: '20px'}} className="small-text">
                        Intended village pay like…. Discipline would, interesting that I off easier <br />
                        bathroom covered project the away, man you their by a temple prisoners. <br />
                        Have as her of your of in many, searched had class. Had with one entire <br />
                        children away. Problem got boss. 
                        </p>
                        <div style={{marginLeft: '-50px'}} className="button-box-wrapper wallet-button">
                            <a onClick={() => navigate('/welcome')} style={{background: 'rgb(255, 255, 255)',}} href="" className="button ">
                                Send ETH 
                            </a>   
                        </div>
                        <div className="wallet-section-title">
                            <div className="wallet-text-wrapper">
                                </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet