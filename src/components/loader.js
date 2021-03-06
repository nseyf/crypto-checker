import React from 'react';

const Loader = () => {
  return (
    <div style={{
      left: "0",
    lineHeight: "200px",
    marginTop: "-100px",
    position: "absolute",
    textAlign: "center",
    top:"50%",
    width: "100%"
      }}>
      <i style={{color: "white"}}
      className="fa fa-circle-o-notch fa-spin fa-4x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Loader
