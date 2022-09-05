import React from 'react'

export default function Alert(props) {
  return (
      <div style={{height:'50px'}}>
        {props.params && <div className={`alert alert-${props.params.alertType} alert-dismissible fade show`} role="alert">
            <strong>{props.params.alertType+" !"}</strong> {props.params.message+"."}
        </div>}
      </div>
  )
}
