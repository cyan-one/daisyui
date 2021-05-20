import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

//Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Pages
import AccordionList from "src/pages/AccordionList";
import AlertList from "src/pages/AlertList";

function App() {
  return (
    <Router>
      <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden">
        <div class="flex items-start justify-between">
          <Sidebar />
          
          {/* Body */}                                    
          <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Header />
              <Switch>
                <Route path="/accordion" exact component={AccordionList} />
                <Route path="/alerts" component={AlertList} />
              </Switch>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
