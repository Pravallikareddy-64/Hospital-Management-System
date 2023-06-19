import React from 'react';
const HeadingTitle = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h1>{props.para}</h1>
        </div>
    );
};
export default HeadingTitle;