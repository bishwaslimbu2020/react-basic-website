import React, {useState} from 'react'

function Contact() {

const [data, setData] = useState({
    fullname:"",
    email:"",
    message:""
});

const inputEvent=(event)=>{
    const{name, value}=event.target;
    setData((preVal)=>{
        return{
            ...preVal,
            [name]: value
        }
    })
}

const formSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname}. My email is ${data.email}. message: ${data.message}`)
}

    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text"  className="form-control" id="exampleFormControlInput1" placeholder="bishwas limbu"
                                name="fullname" 
                                value={data.fullname} 
                                onChange={inputEvent} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2"  placeholder="name@example.com"
                                name="email" 
                                value={data.email} 
                                onChange={inputEvent} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="write here"
                                name="message" 
                                value={data.message} 
                                onChange={inputEvent} >           
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
