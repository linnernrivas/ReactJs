import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './componemts/pages/HomePage';

const App = () => <div>
    <Route path="/" exact componemt={HomePage} />
</div>;

export default App;
 