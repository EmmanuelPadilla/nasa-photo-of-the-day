import React from 'react';


const Photo = data => {
    console.log(data)
    return(
        <div className="photo">
            <img src = {data.url} alt='pic of stars'></img>
        </div>
    );
};


export default Photo;