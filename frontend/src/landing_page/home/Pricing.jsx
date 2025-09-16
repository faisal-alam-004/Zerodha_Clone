import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration: "none"}}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className='col-1'></div>

                <div className='col-6 mb-5'>
                    <div className='row'>
                        <div className='col text-muted'>
                            <img src="media/images/pricing0.svg" alt="" style={{width: "70%", height: "70%"}} />
                            <p style={{fontSize: "12px"}}>Free account opening</p>
                        </div>
                        <div className='col text-muted'>
                            <img src="media/images/pricing0.svg" alt="" style={{width: "70%", height: "70%"}} />
                            <p style={{fontSize: "12px"}}>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col text-muted'>
                            <img src="media/images/other-trades.svg" alt="" style={{width: "70%", height: "70%"}} />
                            <p style={{fontSize: "12px"}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;