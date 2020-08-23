import React from 'react';

const ClassworkCharger = ProspectiveComponent => {
    const color =['red lighten-2', 'purple lighten-3', 'indigo', 'blue accent-1', 'teal darken-3', 'yellow darken-4'];
    const randomColor = color[Math.floor(Math.random() * 5)];


    const className = "card-panel " + randomColor;

    return (props) => {
        return(
           <div className={className}>
                <ProspectiveComponent {...props} />
           </div> 
        )
    }
}

export default ClassworkCharger;