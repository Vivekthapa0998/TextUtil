import React from 'react';

export default function Alerts(props) {
const conupper= (str)=>{
  const temp= str.toLowerCase();
  return temp.charAt(0).toUpperCase() + temp.slice(1);
}

  return(
    
    <div style={{height:'50px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{conupper(props.alert.type)}</strong>: {props.alert.msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
    
    
  );
}
