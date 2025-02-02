

import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import { images, square, triangle } from 'ionicons/icons';

import Instructions from './pages/Instructions';
import Mytest from './pages/mytest';
import MytestDetailed from './pages/mytestDetailed';
import Menu from './components/Menu';
import mytestfinal from './pages/Mytestfinal';
import List from './pages/List';
import Session from './pages/Session';
import SessionBubble from './pages/SessionBubble';
import Review from './pages/Review';
import ReviewBubble from './pages/ReviewBubble';
import gkca from './pages/gkca';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  
  

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane when="(min-width: 768px)" contentId="main">

          <Menu  />


          <IonRouterOutlet id="main">
            <Route path="/mytestfinal" component={mytestfinal} exact={true} />
            
            <Route path="/" render={() => <Redirect to="/mytestfinal" />} exact={true} />

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};




export default App;
