import React from 'react';
import MainPage from './components/mainPage/MainPage';
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from './components/modal/ModalContext/ModalContext';

export default function App() {
    return (
        <Router>
            <ModalProvider>
                <MainPage />
            </ModalProvider>
        </Router>

    )
}