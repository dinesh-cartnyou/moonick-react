/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import WrapperDiv from '../Components/wrapper-div';

export const Emptycart = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor:"#f5f5f5", height:"calc(100vh)"}}>
                    <div class="container" style={{ backgroundColor: "white" }}></div>
                    <Navbar />
                    <WrapperDiv>
                    {/* <section class="bodypanelmian"> */}
                        <div style={{textAlign:"center", marginTop:"40%"}}>
                            <img style={{width:"50%"}} src="/icons/Group 4357.png"></img>
                            <h3 style={{color:"#000", fontSize:"18px", marginTop:"10%"}}><b>YOUR CART IS EMPTY</b></h3>
                            <h6 style={{color:"gray",fontSize:"12px",marginTop:"2%"}}><b>Looks like you haven't Added any product to Your Cart</b></h6>
                            <button className="btn" style={{marginTop:"8%", padding: "2% 9%", border: "#000 solid 2px", borderRadius:"2px", backgroundColor: "white", color: "#000",height:"3rem" }}><b><span style={{float:"left"}}>Continue Shopping</span> <i style={{fontSize:"24px",float:"left"}} class='bx bx-right-arrow-alt'></i></b></button>
                        </div>
                    {/* </section> */}
                    </WrapperDiv>
                </div>
            </div>
        </Fragment>
    );
};