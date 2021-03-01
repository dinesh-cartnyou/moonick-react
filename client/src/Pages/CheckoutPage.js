import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import {
    fade,
    ThemeProvider,
    withStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#000',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'gainsboro',
        },
        '&:hover fieldset': {
          borderColor: 'gainsboro',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#000',
        },
      },
    },
  })(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
            width: '34ch',
        },
    },
}));

export const CheckoutPage = () => {
    const classes = useStyles();

    return (

        <Fragment>
            <div class="badydiv">
                <div class="universalDiv">
                    <div class="container h-100">
                        <Navbar></Navbar>
                        <div style={{height: 'calc(100% - 137px)',overflow: 'scroll'}}>
                            <section className="bodypanelmian aboutseller text-left" style={{height: '76px'}}>
                                <div className="container-for-progress checkout-container" style={{ zIndex:'1000',background: '#fff',padding: "4px", boxShadow: "0px 0px 4px 1px gainsboro", margin: "10px 14px auto 14px" }}>
                                    <ul className="progressbar-progress" style={{ display: "flex !important", justifyContent: "center", flexDirection: "row" }}>
                                        <li className="Progress-Active" style={{ fontSize: "12px" }}>Add Address</li>
                                        <li className="Progress-Active" style={{ fontSize: "12px" }}>Order Summary</li>
                                        <li style={{ fontSize: "12px" }}>Payment</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="bodypanelmian aboutseller text-left">
                            <div id='profile-description'>
                            <div className="sellerlocation">
                            <div className='offer-section text-left text show-more-height'>
                            <h3 style={{marginBottom: '5px'}}>Offers</h3>
                            <div className='br'>
                                <div className='tc'>
                                <div className='centerdiv d-flex justify-content-between'>
                                    <p>
                                    <img src='image/Tag.svg' style={{width: '13px', marginRight: '8px', marginTop: '10px'}} /> No Cost EMI: No
                                    cost EMI available on select cards.
                                    <br /> Please check'EMI options'{' '}
                                    </p>
                                    <p>
                                    <b>T&amp;C</b>
                                    </p>
                                </div>
                                </div>
                                <div className='tc'>
                                <div className='centerdiv d-flex justify-content-between'>
                                    <p>
                                    <img src='image/Tag.svg' style={{width: '13px', marginRight: '8px', marginTop: '10px'}}/> No Cost EMI: No
                                    cost EMI available on select cards.
                                    <br /> Please check'EMI options'{' '}
                                    </p>
                                    <p>
                                    <b>T&amp;C</b>
                                    </p>
                                </div>
                                </div>
                                <div className='tc'>
                                <div className='centerdiv d-flex justify-content-between'>
                                    <p>
                                    <img src='image/Tag.svg' style={{width: '13px', marginRight: '8px', marginTop: '10px'}}/> No Cost EMI: No
                                    cost EMI available on select cards.
                                    <br /> Please check'EMI options'{' '}
                                    </p>
                                    <p>
                                    <b>T&amp;C</b>
                                    </p>
                                </div>
                                </div>
                                <div className='tc'>
                                <div className='centerdiv d-flex justify-content-between'>
                                    <p>
                                    <img src='image/Tag.svg' style={{width: '13px', marginRight: '8px', marginTop: '10px'}}/> No Cost EMI: No
                                    cost EMI available on select cards.
                                    <br /> Please check'EMI options'{' '}
                                    </p>
                                    <p>
                                    <b>T&amp;C</b>
                                    </p>
                                </div>
                                </div>
                                <div className='tc'>
                                <div className='centerdiv d-flex justify-content-between'>
                                    <p>
                                    <img src='image/Tag.svg'style={{width: '13px', marginRight: '8px', marginTop: '10px'}} /> No Cost EMI: No
                                    cost EMI available on select cards.
                                    <br /> Please check'EMI options'{' '}
                                    </p>
                                    <p>
                                    <b>T&amp;C</b>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <p className='moreoffer show-more'>
                            +5 More Offer Available{' '}
                            </p>
                            </div>
                            </div>
                            
                            <div className="bodypanelmian aboutseller text-left" id="cart-items-dropdown-content" style={{ backgroundColor: "white", width: "93%", margin: "-1rem auto 0 auto", display: "none" }}>

                                <div className='sellerlocation' style={{ padding: "none", margin: "none", boxShadow: "none" }}>
                                    <div className='container'>
                                        <div className='row' style={{backgroundColor: '#f5f5f5', fontSize:'10px', margin: '0.5rem 0.5rem'}}>
                                            <div className="col-1"><i class='bx bxs-purchase-tag bx-rotate-90' style={{color:'#000', fontSize:'20px', marginTop: '2px'}}></i></div>
                                            <div className="col-9">No Cost EMI: No cost EMI available on selected cards. Please check 'EMI Options'</div>
                                            <div className="col-1"><b>T&C</b></div>
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <div className='row' style={{backgroundColor: '#f5f5f5', fontSize:'10px', margin: '0.5rem 0.5rem'}}>
                                            <div className="col-1"><i class='bx bxs-purchase-tag bx-rotate-90' style={{color:'#000', fontSize:'20px', marginTop: '2px'}}></i></div>
                                            <div className="col-9">No Cost EMI: No cost EMI available on selected cards. Please check 'EMI Options'</div>
                                            <div className="col-1"><b>T&C</b></div>
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <div className='row' style={{backgroundColor: '#f5f5f5', fontSize:'10px', margin: '0.5rem 0.5rem'}}>
                                            <div className="col-1"><i class='bx bxs-purchase-tag bx-rotate-90' style={{color:'#000', fontSize:'20px', marginTop: '2px'}}></i></div>
                                            <div className="col-9">No Cost EMI: No cost EMI available on selected cards. Please check 'EMI Options'</div>
                                            <div className="col-1"><b>T&C</b></div>
                                        </div>
                                    </div> 
                                    <div className='container'>
                                        <div className='row' style={{backgroundColor: '#f5f5f5', fontSize:'10px', margin: '0.5rem 0.5rem'}}>
                                            <div className="col-1"><i class='bx bxs-purchase-tag bx-rotate-90' style={{color:'#000', fontSize:'20px', marginTop: '2px'}}></i></div>
                                            <div className="col-9">No Cost EMI: No cost EMI available on selected cards. Please check 'EMI Options'</div>
                                            <div className="col-1"><b>T&C</b></div>
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <div className='row' style={{backgroundColor: '#f5f5f5', fontSize:'10px', margin: '0.5rem 0.5rem'}}>
                                            <div className="col-1"><i class='bx bxs-purchase-tag bx-rotate-90' style={{color:'#000', fontSize:'20px', marginTop: '2px'}}></i></div>
                                            <div className="col-9">No Cost EMI: No cost EMI available on selected cards. Please check 'EMI Options'</div>
                                            <div className="col-1"><b>T&C</b></div>
                                        </div>
                                    </div>                               
                                </div>
                            </div>
                            </section>
                            
                            
                            <section className="bodypanelmian aboutseller text-left">
                                <div className="sellerlocation" style={{ backgroundColor: "white" }}>
                                    <h5 style={{ textAlign: "center" }}>Payment Option</h5>
                                    <hr></hr>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-1">
                                                <input class="" type="radio" name="exampleRadios" value="Online" />
                                            </div>
                                            <div className="col-10">
                                                <h5 style={{ fontSize: "12px", color: "gray" }}>Pay via With C#000it or Debit Card, Netbanking, Wallet, UPI, EMI</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", border: "dotted #000 1px", borderRadius: "5px", fontSize: "16px", margin: "4%", height: "2.5rem", padding: "0.3rem 0", textAlign: "center" }}>
                                        Get <b style={{ color: "#000" }}>100Rs</b> Off on Prepaid Order
                                    </div>
                                    <div className="container">
                                        <div className="row" style={{ marginLeft: "5px" }}>
                                            <div className="col">
                                                <div className="row">
                                                    <i class='bx bx-c#000it-card' style={{ color: "#000", fontSize: "24px" }}></i>
                                                </div>
                                                <div className="row">
                                                    <h6 style={{ fontSize: "11px" }}>Card</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row">
                                                    <i class='bx bxs-bank' style={{ color: "#000", fontSize: "24px" }}></i>
                                                </div>
                                                <div className="row">
                                                    <h6 style={{ fontSize: "11px" }}>Net<br></br>Banking</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row">
                                                    <i class='bx bxs-calculator' style={{ color: "#000", fontSize: "24px" }}></i>
                                                </div>
                                                <div className="row">
                                                    <h6 style={{ fontSize: "11px" }}>EMI</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row">
                                                    <i class='bx bxs-right-arrow' style={{ color: "#000", fontSize: "24px" }}></i>
                                                </div>
                                                <div className="row">
                                                    <h6 style={{ fontSize: "11px" }}>BHIM<br></br>UPI</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row">
                                                    <i class='bx bxs-wallet' style={{ color: "#000", fontSize: "24px" }}></i>
                                                </div>
                                                <div className="row">
                                                    <h6 style={{ fontSize: "11px" }}>Wallet</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-1">
                                                <input class="" type="radio" name="exampleRadios" value="Online" />
                                            </div>
                                            <div className="col-10">
                                                <h5 style={{ fontSize: "12px", color: "gray" }}>Cash On Delivery</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 style={{ color: "#000", fontSize: "9px" }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h6>
                                    </div>
                                </div>
                            </section>
                            <section className="bodypanelmian aboutseller text-left">
                                <div className="sellerlocation" style={{ backgroundColor: "white" }}>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-8">
                                            <CssTextField
                                                className={classes.margin}
                                                label="Enter Coupen Code"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{width:"15rem"}}
                                            />                                            
                                            </div>
                                            <div class="col-4">
                                                <button class="btn" style={{
                                                    margin: "8% 2%",
                                                    float: 'right',
                                                    padding: "10px",
                                                    width: '80%',
                                                    color: '#000',
                                                    border: '1px solid #000'
                                                }}>
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="bodypanelmian aboutseller text-left">
                            <div className='sellerlocation' style={{ backgroundColor: "white" }}>
                                <p style={{ color: 'lightgrey' }}>
                                    Price Details
                        </p>
                                <hr style={{ margin: '1% 0' }} />
                                <p>
                                    Price (9 Items)
                            <span className='text-right' style={{ float: 'right' }}>&#8377; 5000</span>
                                </p>

                                <p>
                                    Shipping Cost
                            <span className='text-right' style={{ float: 'right', color: '#000',fontWeight: 'bold' }}> Free Shipping </span>
                                </p>

                                <p>
                                    Discount
                            <span className='text-right' style={{ float: 'right' }}>- &#8377; 5000</span>
                                </p>

                                <p>
                                    Discount
                            <span className='text-right' style={{ float: 'right' }}>- &#8377; 500</span>
                                </p>
                                <hr style={{ margin: '2% 0' }} />
                                <p>
                                    Total
                            <span className='text-right' style={{ float: 'right' }}> &#8377; 4500</span>
                                </p>
                                <hr style={{ margin: '2% 0' }} />
                                <p>
                                    You will save<span className='text-right' style={{ color: '#000' }}>  &#8377; 4500 </span> in this order
                                </p>
                            </div>
                        </section>
                        </div>
                        <div class="footer" style={{
                            zIndex: "100",
                            position: 'fixed',
                            bottom: '0',
                            width: '576px',
                            backgroundColor: '#ffffff',
                            height: '4.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            boxShadow: '4px -5px 6px rgba(207, 207, 207, 0.5)'
                        }}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <div style={{
                                            float: 'left',
                                            margin: '0 1rem'
                                        }}>
                                            <p className='left-foot'>Total</p>
                                            <p style={{ color: '#000',fontWeight: 'bold' }}>₹5899</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <button type="button" class="btn right-foot" style={{
                                            float: 'right',
                                            width: '50%',
                                            background: '#000',
                                            color: '#fff'
                                        }}>
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
};