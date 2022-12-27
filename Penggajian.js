import React, {Component} from 'react';



const Penggajian = () => {
    return(

    <div className='container '>
        <div className='row'>
            <div className='col-6'>
                <div className='card'>
                    <div className='card-header'>
                    <form>
                        <div className="mb-4" ></div> 
                        <label htmlFor="honor" >Honor</label> 
                        <input className="mb-4" ></input> 
                        <label htmlFor="slip_gaji" >Slip Gaji</label> 
                        <input className="mb-4" ></input> 
                        <label htmlFor="gaji pokok" ></label> 
                        <input className="mb-4" ></input> 
                    </form>
                    </div>
                    <button className="btn btn-success">
              Submit
            </button>
                </div>
            </div>
        </div>
    </div>

);
}

export default Penggajian