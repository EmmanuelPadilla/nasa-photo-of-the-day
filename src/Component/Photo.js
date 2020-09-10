import React from 'react';

// export default Photo;

const Photo = props => {
    console.log(props.data, 'lookit')
    return (
      <div className="photo">
        <img src={props.photo} alt="pic of stars"></img>
      </div>
    );
  };
  export default Photo;