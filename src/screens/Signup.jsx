import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

  const [credentials, setcredentials] = useState({name:"",email:"",password:"",geoLocation:""})


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geoLocation })

    });
    const json = await response.json()
    if(json.msg==='Email Already in use') alert('email already in use');
    else if (!json.success) {
      if(json.errors[0].msg) alert(json.errors[0].msg)
      else
      alert("enter valid credit")
    }
    else
    alert("account created now log in with same credentials")
    }


  const onChange=(event)=>{

    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <>
<div className="container">
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" id="Name" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Address" className="form-label">Address</label>
    <input type="text" className="form-control" id="Address" name='geoLocation' value={credentials.geoLocation} onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
<Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>
</div>
    </>
  )
}
