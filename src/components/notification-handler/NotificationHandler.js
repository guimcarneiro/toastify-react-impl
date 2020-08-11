import React from 'react';
import Axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NotificationHandler() {

    Axios.interceptors.request.use((request) => {
        toast('Request sent!');
        return request;
    }, (err) => {
        toast('Request error!');
        return Promise.reject(err);
    })

    Axios.interceptors.response.use((response) => {
        toast('Response received!');
        return response;
    }, (err) => {
        toast('Response error!');
        return Promise.reject(err);
    });

  return (
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
  );
}

export default NotificationHandler;
