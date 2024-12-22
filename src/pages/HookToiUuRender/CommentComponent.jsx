import React, { memo } from "react";

const CommentComponent = (props) => {
    console.log("CommentComponent");

    return (
        <div>
            <h1>CommentComponent</h1>

            {props.renderLike()}
        </div>
    );
};

export default memo(CommentComponent);
