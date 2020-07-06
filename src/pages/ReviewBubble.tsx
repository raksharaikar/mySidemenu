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
import { book, build, colorFill, grid, checkmarkCircleOutline, refresh, save, square, stopwatch, pause, timeOutline, stopwatchOutline, arrowDown, heart, chevronDownOutline, camera, chevronUpOutline, checkmarkCircle, eye, alertCircle, logoTwitter, pin, arrowRedoCircleOutline } from 'ionicons/icons';


import { IonReactRouter } from '@ionic/react-router';
import { apps, flash, send } from 'ionicons/icons';

import Tab2 from './Tab2';
import Tab3 from './Tab3';



import React from 'react';
import './Review.css';

const ReviewBubblePage: React.FC = () => {
  return (
    <IonPage>



      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
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




        <IonCard class="quiz-session-card">


          <IonGrid>
            <IonRow class="session-bubble-info">
              <IonCol>Correct</IonCol>
              <IonCol>Incorrect</IonCol>
              <IonCol>Skipped</IonCol>
               </IonRow>

            <IonRow class="session-bubble-info">
              <IonCol>

              <IonButton class="badges" color="success" disabled shape="round"></IonButton><br></br>
              <IonLabel color="dark">555</IonLabel>

              </IonCol>
              <IonCol>

              <IonButton class="badges" color="danger" disabled shape="round"></IonButton><br></br>
              <IonLabel color="dark">555</IonLabel>

             
              </IonCol>

              <IonCol>

              <IonButton class="badges" color="warning" disabled shape="round"></IonButton><br></br>
              <IonLabel color="dark">555</IonLabel>


              </IonCol>
              



            </IonRow>
          </IonGrid>

          <hr className="session-bubble-hr"></hr>

        </IonCard>



        <IonCard className="speaker-card">
          <IonCardHeader>
            <IonItem >
              <IonLabel> <h3 className="content-style">Physics</h3>
              </IonLabel>
            </IonItem>
          </IonCardHeader>

          <IonCardContent class="outer-content">
          <IonGrid>
           

            <IonRow class="session-bubbles">
              <IonCol size="4">

              <IonButton class="review-btns" color="success"  shape="round">555</IonButton>
             
              </IonCol>
              <IonCol size="4">

              <IonButton class="review-btns" color="success"  shape="round">555</IonButton>
             
              </IonCol>

              <IonCol size="4">
              <IonButton class="review-btns" color="warning"  shape="round">555</IonButton>
            
              </IonCol>
              




            </IonRow>

            <IonRow class="session-bubbles">
              <IonCol size="4">

              <IonButton class="review-btns" color="warning"  shape="round">555</IonButton>
             
              </IonCol>
              <IonCol size="4">

              <IonButton class="review-btns" color="danger"  shape="round">555</IonButton>
             
              </IonCol>

              <IonCol size="4">

              <IonButton class="review-btns" color="warning"  shape="round">555</IonButton>
             
              </IonCol>
              




            </IonRow>

            <IonRow class="session-bubbles">
            <IonCol size="4">

<IonButton class="review-btns" color="success"  shape="round">555</IonButton>

</IonCol>
<IonCol size="4">

<IonButton class="review-btns" color="success"  shape="round">555</IonButton>

</IonCol>

<IonCol size="4">
<IonButton class="review-btns" color="warning"  shape="round">555</IonButton>

</IonCol>
              




            </IonRow>

            <IonRow class="session-bubbles">
            <IonCol size="4">

<IonButton class="review-btns" color="success"  shape="round">555</IonButton>

</IonCol>
<IonCol size="4">

<IonButton  class="review-btns" color="danger"  shape="round">555</IonButton>
             
</IonCol>

<IonCol size="4">
<IonButton class="review-btns" color="danger"  shape="round">555</IonButton>
             
</IonCol>
             
              




            </IonRow>
          </IonGrid>
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

      

    </IonPage>
  );
};

export default ReviewBubblePage;
