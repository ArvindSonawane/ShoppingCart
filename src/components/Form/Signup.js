import React from 'react'

const Signup = () => {
  return (
    <>
    <div children="container" >
    <form>

    <div class="col-md-4 offset-md-4" style={{height:"90vh",fontWeight:"bold"}}>
    <div class="form-group">
    
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Re-Enter Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
      <br/>
      <br/>
      
      <button type="submit" class="btn btn-primary" style={{width:"28vw"}}>Submit</button>
     
    </div>
    </div>
    
  </form>
  </div>
  
  </>
   )
}

export default Signup