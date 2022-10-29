import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

 const Footer=()=> {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg--' style={{  position: "fixed",bottom:"0",width:"100vw"}} >
      <div className='text-center p-3' style={{ color: 'white' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;