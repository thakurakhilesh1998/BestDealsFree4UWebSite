import React from 'react';

const Contact_Form=()=>{

    const onFormSubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <>
            <h3 className="text-center mt-5">Contact Us</h3>
            <hr></hr>
            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6 my-2">
                            <input type="text" class="form-control" id="inputPassword" placeholder="First Name"></input>
                        </div>
                        <div className="col-md-6 my-2">
                            <input type="text" class="form-control" id="inputPassword" placeholder="Last Name"></input>
                        </div>
                        <div className="col-md-12 my-2">
                            <input type="email" class="form-control" id="inputPassword" placeholder="Email"></input>
                        </div>
                        <div className="col-md-12 my-2">
                            <textarea type="email" class="form-control" id="inputPassword" placeholder="Write Comment Here" rows="5"></textarea>
                        </div>
                        <div className="col-md-12 my-2">
                            <button className="btn btn-primary w-100">Submit Comment</button>

                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
export {Contact_Form};