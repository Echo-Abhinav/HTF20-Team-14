import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css";

function Message() {
    return (
        <div className="messages">
            <Avatar />
            <div className="message__info">
                <h4>
                    chireg
                    <span className="message__timestamp">this is a timestamp
                    </span>
                </h4>

                <p>This is the message</p>
            </div>
            
        </div>
    )
}

export default Message
