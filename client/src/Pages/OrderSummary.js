/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const OrderSummary = () => {
  function gstDetails(dis){
    document.getElementById("details-gst").style.display = dis;
    document.getElementById("edit-gst").style.display = dis;
    var gstin = document.getElementById("input-gstin").value;
    document.getElementById("GSTIN").innerHTML = gstin;
    var company_name = document.getElementById("input-cname").value;
    document.getElementById("company-name").innerHTML = company_name;
  }

    function changeOk() {
      var check = document.getElementById('switch');
      if(check.checked){
        check.setAttribute('data-toggle', 'modal')
        check.setAttribute('data-target', '#exampleModal')
        gstDetails('block');
      } else {
        check.setAttribute('data-toggle', '')
        check.setAttribute('data-target', '')
        gstDetails('none')
        }
    } 

  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <div class='container' style={{height: '100vh'}}>
            <Navbar></Navbar>
            <section className="bodypanelmian aboutseller text-left" style={{ marginBottom: '20%', paddingBottom: '10px',height: 'calc(100% - 137px)',overflow: 'scroll' }}>
              <div className="container-for-progress" style={{ padding: "4px", boxShadow: "0px 0px 4px 1px gainsboro", margin: "10px 14px auto 14px",position: 'relative' }}>
                <ul className="progressbar-progress" style={{ display: "flex !important", justifyContent: "center", flexDirection: "row" }}>
                  <li className="Progress-Active" style={{ fontSize: "12px" }}>Add Address</li>
                  <li className="Progress-Active" style={{ fontSize: "12px" }}>Order Summary</li>
                  <li style={{ fontSize: "12px" }}>Payment</li>
                </ul>
              </div>
              <div className='sellerlocation'>
                <h3>
                  <b>Neeraj Sharma <span className='text-right' style={{ backgroundColor: 'lightgray', padding: '2px 10px', fontSize: '10px' }}>Office</span></b>
                </h3>
                <p>
                  Rzg-91, Park Street Avenue, Lokhandwala, Delhi 110045
                  </p>
                <p>
                  +91-9123-4101-01
                  </p>
                <button type="button" class="btn" style={{ padding: '10px 0', width: '100%',color: '#000',border: '1px solid #000' }}><span style={{ fontSize: '12px' }}>Change or Add Address</span></button>
              </div>
              <div className='sellerlocation'>
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      <img src="https://images.bewakoof.com/t540/the-traveller-full-sleeve-t-shirt-men-s-printed-full-sleeve-t-shirt-276528-1604378760.jpg" alt="Product Image"></img>
                    </div>
                    <div className="col-7" style={{
                      marginTop: "3%",
                    }}>
                      <h3>Snitch Tiger White Satin Mandarin Collar Shirt</h3>
                      <h6 style={{
                        color: "gray",
                        fontSize: "10px",
                      }}>Exclusive</h6>
                    </div>
                    <div className="col-2">
                    </div>
                  </div>
                </div>
                <div classname='d-flex align-items-center w-100'>
                  <div className='d-flex align-items-center float-left' >
                      <h5 style={{fontSize: "15px",color: "lightgray",margin: '0'}}>Quantity</h5>
                      <select id="cars" name="cars">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </div>
                  <div className='d-flex align-items-center ' style={{float: 'right'}}>
                      <h5><b><span>&#8377;</span>5899</b></h5>
                      <h5 style={{marginTop: "7px", marginLeft: "5px", color: "gray", fontSize: "12px"}}><strike><span>&#8377;</span>8999</strike></h5>
                      <h6 style={{ color: "#000", fontSize: "12px", marginTop: "7px" }}>50% OFF</h6>
                  </div>
                </div>
                {/* <div className="container" style={{ marginTop: "5%" }}> */}
                      

                  {/* <div className="row">
                    <div className="col-3">
                      <h5 style={{
                        fontSize: "15px",
                        color: "lightgray",
                      }}>Quantity</h5>
                    </div>
                    <div className="col-4">
                      <select id="cars" name="cars">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="col-5"></div>
                  </div> */}
                {/* </div> */}
                {/* <div className="container" style={{ marginTop: "5%" }}>
                  <div className="row">
                    <div className="col-3">
                      <h5 style={{
                        fontSize: "15px",
                        color: "gray",
                        paddingTop:"5px"
                      }}>Condition</h5>
                    </div>
                    <div className="col-4">
                      <button type="button" style={{
                        fontSize: "12px",
                        backgroundColor: "darkgreen",
                        color: "white",
                        borderRadius: "2px",
                        padding: "5px",
                        width: "96px"
                      }} class="btn">Renewed</button>
                    </div>
                    <div className="col-5"></div>
                  </div>
                </div> */}
                {/* <div className="container" style={{ marginTop: "5%" }}>
                  <div className="row">
                    <div className="col-2">
                      <h5><b><span>&#8377;</span>5899</b></h5>
                    </div>
                    <div className="col-2">
                      <h5 style={{
                        marginTop: "7px",
                        marginLeft: "5px",
                        color: "gray",
                        fontSize: "12px"
                      }}><strike><span>&#8377;</span>8999</strike></h5>
                    </div>
                    <div className="col-3">
                      <h6 style={{ color: "#000", fontSize: "12px", marginTop: "7px" }}>50% OFF</h6>
                    </div>
                  </div>
                </div> */}
                
                <h5 style={{
                  marginTop: "37px",
                  marginLeft: "5px",
                  color: "gray",
                  fontSize: "12px"
                }}>Free Delivery in 0-2 Days</h5>
                <h5 style={{
                  marginTop: "7px",
                  marginLeft: "5px",
                  color: "gray",
                  fontSize: "10px"
                }}>Buying From</h5>
                <i class='bx bxs-cart'></i><span style={{
                  fontSize: "12px",
                  marginLeft: "5px",
                }}>Cart-N-You Pvt Ltd.</span>
                <br></br>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <i class='bx bxs-x-circle' style={{ color: "#c2172e", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>Cash On Delivery</span><br></br>
                      <i class='bx bxs-check-circle' style={{ color: "green", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>10 day Replacement Policy</span><br></br>
                      <i class='bx bxs-check-circle' style={{ color: "green", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>Free Shopping</span><br></br>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" sellerlocation">
               
                <div>
                  <input type="checkbox" id='switch' style={{ margin: "0.12rem 0.5rem", height: "1rem", backgroundColor: "#c2172e", float: "left" }} onClick={changeOk}></input>
                  <span style={{ float: "left", fontSize: "14px" }}>Add GST details</span>
                  <span style={{ float: "right", color: "#000", fontSize: "15px", display:"none", cursor:'pointer' }}id="edit-gst"  data-toggle="modal" data-target="#exampleModal">Edit</span>
                  <br />
                </div>
                  <p style={{display:"none"}} id="details-gst">
                    <p style={{ color: "#ACA7A6", fontSize: "12px",  marginLeft: '0.5rem'}} id="GSTIN"></p>
                    <p style={{ color: "#ACA7A6", fontSize: "12px",  marginLeft: '0.5rem'}} id="company-name"></p>
                  </p>
              </div>

              <div className='sellerlocation'>
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
                    <span className='text-right' style={{ float: 'right', color: '#000' }}> Free Shipping </span>
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
                  You will save<span className='text-right' style={{ color: '#000',fontWeight: 'bold' }}>  &#8377; 4500 </span> in this order
                  </p>
              </div>              
            </section>
            <div class="footer" style={{
                position: 'fixed',
                bottom: '0',
                width: '576px',
                backgroundColor: '#ffffff',
                height: '72px',
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
                        <p class="left-foot">Total</p>
                        <p style={{ color: '#000' }}>₹5899</p>
                      </div>
                    </div>
                    <div class="col-6">
                      <button type="button" class="btn right-foot proceed-to-payment" style={{
                        float: 'right', width: '60%',background: '#000',color: '#fff'
                      }}>
                        Proceed to Payment
                    </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ top: "30%" }}>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" style={{ color: "gray", fontSize: "18px" }}>Add GST Details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <input type="text" class="form-control" id="input-gstin" aria-describedby="emailHelp" placeholder="GSTIN" style={{ marginBottom: "10px", border: "none", borderBottom: "1px solid gainsboro", borderRadius: "0px" }} />
                <input type="text" class="form-control" id="input-cname" aria-describedby="emailHelp" placeholder="Business Name" style={{ marginTop: "10px", border: "none", borderBottom: "1px solid gainsboro", borderRadius: "0px" }} />
                <small id="emailHelp" class="form-text text-muted"><i class='bx bxs-info-circle'></i>Incorrect GST details will lead to order Cancellation</small>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" id="save-modal-btn" style={{ backgroundColor: "#000", color: "white", width: "100%" }} data-dismiss="modal" onClick={gstDetails}>Confirm and Save</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
