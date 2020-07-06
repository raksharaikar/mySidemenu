import { IonTabs, IonTabBar, IonTabButton, IonBadge, IonFab, IonFabButton, IonBackButton, IonAvatar } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';


import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
 
  IonRouterOutlet,

  IonCol,
  IonRow,
  IonGrid,
  IonFooter,
  IonRadioGroup,
  IonRadio,
  IonButton,
  IonChip,
  IonSelect,
  IonSelectOption,
 
  IonText
  } from '@ionic/react';
import { book, build, colorFill, grid,  checkmarkCircleOutline, refresh, save, square, stopwatch, pause, timeOutline, stopwatchOutline, arrowDown, heart, chevronDownOutline, camera, chevronUpOutline } from 'ionicons/icons';


import { IonReactRouter } from '@ionic/react-router';
import { apps, flash, send } from 'ionicons/icons';

import Tab2 from './Tab2';
import Tab3 from './Tab3';



import React from 'react';
import './session.css';

const SessionPage: React.FC = () => {
  return (
    <IonPage>


 
<IonHeader>
          <IonToolbar>
          
            <IonTitle>Session - Railway model paper - CBT sdfgsdgsdgsdgsdg</IonTitle>
          </IonToolbar>
        </IonHeader>
  
  
   
  
  
  
  
    
  
      <IonToolbar class="qapp-qs-time-toolbar-style" >
        <IonButtons slot="primary">
          <IonButton shape="round" class="qapp-qs-toolbar-pause-btn">
          <IonIcon icon={pause} />
          </IonButton>
          <IonButton shape="round" class="qapp-qs-toolbar-stop-btn">
         
          <IonIcon icon={square} />
          </IonButton>
  
  
           </IonButtons>
  
        <IonItem  lines="none">
          <IonSelect class="new"  interface="popover" placeholder="Subject....." >
            <IonSelectOption value="brown">Numerical Aptitude</IonSelectOption>
            <IonSelectOption value="blonde">Reasoning and quiz</IonSelectOption>
            <IonSelectOption value="black">General awareness</IonSelectOption>
            <IonSelectOption value="red">Computer awareness</IonSelectOption>
          </IonSelect>
        </IonItem>
  
        <IonChip class="qapp-timer-chip" outline color="danger" slot="secondary">
        <IonIcon icon={stopwatchOutline} />
            <IonLabel>55:55</IonLabel>
            
          </IonChip>
      </IonToolbar>
  
  
  
  
     
  
        <IonContent>
  
  
        
  
      <IonCard class="quiz-session-card">
        
      
        <IonCardContent>

        
<IonCardHeader class="padding-left-none">
       <IonBadge color="dark">9999</IonBadge>
      </IonCardHeader>


        <IonItem lines="none" class="padding-none">
        <IonLabel class="text-wrap">
          <h3 className="content-style">Passage</h3>
          <p>Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.</p>
       
          <IonChip onClick={() =>  alert('test')}  class="passage" color="light" slot="end">
          <IonIcon icon={chevronUpOutline} color="dark" />
          <IonLabel color="dark">more</IonLabel>
       </IonChip>

        </IonLabel>
      </IonItem>


      <IonItem lines="none" class="padding-none">
        <IonLabel class="text-wrap-black">
          <h3 className="content-style">Passage</h3>
          <p>Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.</p>
        
          <IonChip onClick={() =>  alert('test')}  class="passage" color="light" slot="end">
          <IonIcon icon={chevronDownOutline} color="dark" />
          <IonLabel color="dark">more</IonLabel>
       </IonChip>
       
         


       
        </IonLabel>
        
         </IonItem>




      <IonItem lines="none" class="padding-none">
        <IonLabel class="text-wrap">
          <h3 className="content-style">Question</h3>
          <p>Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.</p>
       
        </IonLabel>

        
      </IonItem>
      

     


      <IonList>

      <IonItem lines="none" class="padding-none">
      <IonLabel class="text-wrap">
          <h3 className="content-style">Options</h3>
            </IonLabel>
        
      </IonItem>

          <IonRadioGroup class="session-radio-btn-numbers session-radio-btns"> 
           

            <IonItem class="padding-none">

            <IonAvatar  slot="start">
            <IonBadge color="light">1.</IonBadge>
            </IonAvatar> 
            
              <IonLabel>Biff</IonLabel>
              <IonRadio slot="end"  value="biff" />
            </IonItem>

            <IonItem class="padding-none">
            <IonAvatar  slot="start">
            <IonBadge color="light">2.</IonBadge>
            </IonAvatar> 
              <IonLabel>Griff</IonLabel>
              <IonRadio slot="end"  value="griff" />
            </IonItem>

            <IonItem class="padding-none">
            <IonAvatar  slot="start">
            <IonBadge color="light">3.</IonBadge>
            </IonAvatar> 
              <IonLabel>Buford</IonLabel>
              <IonRadio slot="end"  value="buford" />
            </IonItem>

            <IonItem class="padding-none">
            <IonAvatar  slot="start">
            <IonBadge color="light">4.</IonBadge>
            </IonAvatar> 
              <IonLabel>Grifff</IonLabel>
              <IonRadio slot="end"  value="grifff" />
            </IonItem>

            <IonItem class="padding-none">
            <IonAvatar  slot="start">
            <IonBadge color="light">5.</IonBadge>
            </IonAvatar> 
              <IonLabel>Bufordd</IonLabel>
              <IonRadio slot="end"  value="bufordd" />
            </IonItem>




          </IonRadioGroup>
           </IonList>







      </IonCardContent>

    
      </IonCard>



{/* 
   

<IonCard>

<IonItem lines="none">

        <IonBadge color="dark">9999</IonBadge>
        </IonItem>

<IonCardContent className="content-style">
<IonCardSubtitle>Passage</IonCardSubtitle>
         
<p>Mobile devices and browsers are now advanced enough
          that developers can build native-quality mobile apps 
          using open web technologies like HTML5, Javascript, 
          and CSS. In this talk,</p>
     
         

          </IonCardContent>

          <IonCardContent>
     
<IonCardSubtitle>Question</IonCardSubtitle>
<p>Mobile devices and browsers are now advanced enough
          that developers can build native-quality mobile apps 
          using open web technologies like HTML5, Javascript, 
          and CSS. In this talk,</p>

          </IonCardContent>
          <IonCardContent>
          <IonCardSubtitle>Options</IonCardSubtitle>

          <IonList >
        <IonRadioGroup>

          
        <IonItem class="padding-none radio-font">

        

      <IonButton className="serial-btn-style"  shape="round" slot="start">
      <IonLabel>A.</IonLabel>
      
      </IonButton>



      <IonLabel>Biff</IonLabel>
           <IonRadio slot="end" value="biff" checked />
         
    </IonItem>



          <IonItem class="padding-none">
         
     
          <IonButton className="serial-btn-style" shape="round" slot="start">
      <IonLabel>B.</IonLabel>
      
      </IonButton>

            <IonLabel>Biff</IonLabel>
            <IonRadio slot="end" value="biff" checked />
          </IonItem>
  
          <IonItem class="padding-none">
          <IonButton className="serial-btn-style"  shape="round" slot="start">
      <IonLabel>C.</IonLabel>
      
      </IonButton>
            <IonLabel>Griff</IonLabel>
            <IonRadio slot="end" value="griff" />
          </IonItem>
  
          <IonItem class="padding-none">
          <IonButton className="serial-btn-style"  shape="round" slot="start">
      <IonLabel>D.</IonLabel>
      
      </IonButton>
            <IonLabel>Buford</IonLabel>
            <IonRadio slot="end" value="buford" />
          </IonItem>
  
          <IonItem class="padding-none">
          <IonButton className="serial-btn-style"  shape="round" slot="start">
      <IonLabel>E.</IonLabel>
      
      </IonButton>
            <IonLabel>Griff</IonLabel>
            <IonRadio slot="end" value="griff" />
          </IonItem>
  
          
        </IonRadioGroup>
      </IonList>

      

    
    
     
  
  
  
  




</IonCardContent>








    </IonCard>
      

 */}



  
  
        </IonContent>
  
        <IonFooter>
        <IonToolbar>
          
  
  
            <IonGrid>
        <IonRow>
          <IonCol > <IonTabButton class="new2" >
              <IonIcon icon={apps} />
              <IonLabel>Progress</IonLabel>
            </IonTabButton> </IonCol>
          <IonCol >  <IonTabButton  >
              <IonIcon icon={checkmarkCircleOutline} />
              <IonLabel>Progress</IonLabel>
            </IonTabButton></IonCol>
          <IonCol ><IonTabButton>
              <IonIcon icon={refresh} />
              <IonLabel>Clear</IonLabel>
            </IonTabButton></IonCol>
          <IonCol ><IonTabButton>
              <IonIcon icon={save} />
              <IonLabel>Save/Next</IonLabel>
            </IonTabButton></IonCol>
        </IonRow>
  
  
       
      </IonGrid>
        </IonToolbar>
      </IonFooter>
      
    </IonPage>
  );
};

export default SessionPage;
