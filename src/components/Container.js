import React from 'react';
import List from './List';
import SelectDay from './SelectDay';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectDay2 from './SelectDay2';
const Container = () => {
    return (
        <BrowserRouter>
            <div className="container_">
                <Header />
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/day/" element={<SelectDay2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
export default Container;
