import React from 'react';
import List from './List';
import SelectDay from './SelectDay';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Container = () => {
    return (
        <BrowserRouter>
            <div className="container_">
                <Header />
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/day/" element={<SelectDay />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
export default Container;
