import React, { useState } from 'react'

const Login = () => {
    const [person, setPerson]=useState({
        name:'',
        email:'',
        address:''
    });
    const [error ,setError]=useState('');
    const handlername=(e)=>{
      setPerson({...person, name:e.target.value});
    }
    const handleremail=(e)=>{
      setPerson({...person, email:e.target.value});
    }
    const handleraddress=(e)=>{
      setPerson({...person , address:e.target.value});
    }
    const formhandler=(e)=>{
        e.preventDefault();
        console.log(person.name,person.email,person.address)
        // setName('');
        // setEmail('');
        // setAddress('')
        setPerson('');
        if(person.name ==='' || person.email ==='' || person.address === ''){
          setError('please provide the required information')
          return error
        }
    }
  return (
    <div className='container'>
<div className='row'>
    <div className='col-md-8'>
    <p style={{color:"red"}}>{error}</p>
    <form className="row g-3" onSubmit={formhandler}>
    
  <div className="col-md-12">
    <label htmlFor="inputEmail4" className="form-label">Name</label>
    <input type="text" className="form-control" placeholder='input name' onChange={handlername}  value={person.name}  name="name"  />
  </div>
  <div className="col-md-12">
    <label htmlFor="inputPassword4" className="form-label">Email</label>
    <input type="text" className="form-control"  onChange={handleremail}  value={person.email}  name="email" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" onChange={handleraddress}   value={person.address}  name="address"  placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
    </div>
</div>
    </div>
  )
}
export default Login