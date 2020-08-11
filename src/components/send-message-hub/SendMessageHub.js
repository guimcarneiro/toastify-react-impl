import React from 'react';

import './SendMessageHub.css';
import Axios from 'axios';
import AlertContext from '../alert-context/AlertContext';

function SendMessageHub() {

    //Consumes de AlertContext method
    const { toast } = React.useContext(AlertContext);

    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState("No data yet");

    const doRequest = () => {
        setLoading(true);
        Axios.get('https://api.github.com')
        .then(res => {
            setData(res.data);
            setLoading(false);
        });
    }

    const showToast = () => {
        toast('Sent through AlertContext Callback!');
    }

    return (
        <div className="send-message-hub">
            <div className="loaded-content">
                {loading? "loading...":`${JSON.stringify(data).substring(0, 15)}...`}
            </div>
            <div className="button-container">
                <button type="button" onClick={ doRequest }>Do a Request!</button>
                <button type="button" onClick={ showToast }>Just Open Toast!</button>
            </div>
        </div>
    );
}

export default SendMessageHub;
