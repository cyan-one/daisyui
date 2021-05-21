import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

//Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Pages
import AccordionList from "./pages/AccordionList";
import AlertList from "./pages/AlertList";
import AvatarList from "./pages/AvatarList";
import BadgeList from "./pages/BadgeList";
import BreadcrumbsList from "./pages/BreadcrumbsList";
import ButtonList from "./pages/ButtonList";
import ButtonGroupList from "./pages/ButtonGroupList";

function App() {
  return (
    <Router>
      <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden">
        <div class="flex items-start justify-between">
          <Sidebar />
          <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Header />
              <Switch>
                <Route path="/accordion" component={AccordionList} />
                <Route path="/alert" component={AlertList} />
                <Route path="/avatar" component={AvatarList} />
                <Route path="/badge" component={BadgeList} />
                <Route path="/breadcrumbs" component={BreadcrumbsList} />
                <Route path="/button" component={ButtonList} />
                <Route path="/button-group" component={ButtonGroupList} />
              </Switch>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
