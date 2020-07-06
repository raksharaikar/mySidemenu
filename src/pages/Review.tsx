import { IonTabs, IonTabBar, IonTabButton, IonBadge, IonFab, IonFabButton, IonBackButton } from '@ionic/react';
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
import { book, build, colorFill, grid,  checkmarkCircleOutline, refresh, save, square, stopwatch, pause, timeOutline, stopwatchOutline, arrowDown, heart, chevronDownOutline, camera, chevronUpOutline, bookmarkOutline, bookmark, arrowRedo, clipboardOutline, arrowBack, arrowForward } from 'ionicons/icons';


import { IonReactRouter } from '@ionic/react-router';
import { apps, flash, send } from 'ionicons/icons';

import Tab2 from './Tab2';
import Tab3 from './Tab3';



import React from 'react';
import './Review.css';

const ReviewPage: React.FC = () => {
  return (
    <IonPage>


 
<IonHeader>
          <IonToolbar>
          
            <IonTitle>Session - Railway model paper - CBT sdfgsdgsdgsdgsdg</IonTitle>
          </IonToolbar>
        </IonHeader>
  
  
   
  
  
  
  
    
  
      <IonToolbar class="qapp-qs-time-toolbar-style" >
        
      
      
          <IonChip slot="primary"  color="danger">
          <IonLabel>360</IonLabel>/<IonLabel>360</IonLabel>
        </IonChip>
     
        <IonItem  lines="none">
          <IonSelect class="new"  interface="popover" placeholder="Subject....." >
            <IonSelectOption value="brown">Numerical Aptitude</IonSelectOption>
            <IonSelectOption value="blonde">Reasoning and quiz</IonSelectOption>
            <IonSelectOption value="black">General awareness</IonSelectOption>
            <IonSelectOption value="red">Computer awareness</IonSelectOption>
          </IonSelect>
        </IonItem>
  
        <IonChip class="qapp-timer-chip" outline color="dark" slot="secondary">
        <IonIcon icon={stopwatchOutline} />
            <IonLabel>130:55</IonLabel>
            
          </IonChip>
      </IonToolbar>
  
  
  
  
     
  
        <IonContent>
  
  
        
  
      <IonCard>
        
      
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

       <IonText class="ion-text-end">
         
          
          <h3 className="content-style">Awarded: <IonLabel color="danger">0.00</IonLabel></h3> 
          </IonText>
        

        
          <IonItem lines="none" class="padding-none">
          <IonLabel class="text-wrap">
          <h3 className="content-style">Options</h3>
            </IonLabel> 
        
      </IonItem>
         

      <IonText class="ion-text-start">
         
          
        <IonLabel color="success">A.</IonLabel>&nbsp; <IonLabel color="success">Loreum ipsum</IonLabel>
         </IonText>
   

            

      </IonCardContent>

      <IonRow justify-content-center>
          <IonCol text-left size="6" size-md="4">
            
          <IonButton size="small" fill="clear" color="dark"><IonIcon slot="start"  icon={bookmark} />
              Bookmark</IonButton>
          </IonCol>
          <IonCol text-left size="6" size-md="4">
          <IonButton size="small"  fill="clear" color="dark"><IonIcon slot="start"  icon={arrowRedo} />
              WRONG Q/A</IonButton>
          </IonCol>
         
        </IonRow>
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
          <IonCol > <IonTabButton href="/ReviewBubble" class="new2" >
              <IonIcon icon={clipboardOutline} />
              <IonLabel>Summery</IonLabel>
            </IonTabButton> </IonCol>
          <IonCol >  <IonTabButton  >
              <IonIcon icon={apps} />
              <IonLabel>Select</IonLabel>
            </IonTabButton></IonCol>
          <IonCol ><IonTabButton>
              <IonIcon icon={arrowBack} />
              <IonLabel>Previous</IonLabel>
            </IonTabButton></IonCol>
          <IonCol ><IonTabButton>
              <IonIcon icon={arrowForward} />
              <IonLabel>Next</IonLabel>
            </IonTabButton></IonCol>
        </IonRow>
  
  
       
      </IonGrid>
        </IonToolbar>
      </IonFooter>
      
    </IonPage>
  );
};

export default ReviewPage;
