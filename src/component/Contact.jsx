import React from 'react'

function Contact() {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="conatainer">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
