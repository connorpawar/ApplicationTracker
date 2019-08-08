import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViewEntries from './components/ViewEntries';
import NewEntry from './components/NewEntry';

 export default function App(){

     return(
        <Router>
            <div>
                <Route exact path='/' component={NewEntry} />
                <Route path='/ViewEntries' component={ViewEntries} />
            </div>
        </Router>
     );
 }
