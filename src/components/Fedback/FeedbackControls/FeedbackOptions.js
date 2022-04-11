import React from "react";
import s from "./feedbackControls.module.css"

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className="button-holder">
            {options.map(option =>
                <button
                    key={option}
                    type="button"
                    className={s.button__feedback}
                    onClick={() => { onLeaveFeedback({ type: option, payload: 1 }) }}
                >
                    {option}
                </button>
            )}
        </div>
    )
}


export default FeedbackOptions;