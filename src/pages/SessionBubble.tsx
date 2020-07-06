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
import './SessionBubble.css';

const SessionPage: React.FC = () => {
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
        <IonButtons slot="primary">
          <IonButton shape="round" class="qapp-qs-toolbar-pause-btn">
            <IonIcon icon={pause} />
          </IonButton>
          <IonButton shape="round" class="qapp-qs-toolbar-stop-btn">

            <IonIcon icon={square} />
          </IonButton>


        </IonButtons>

        <IonItem lines="none">
          <IonSelect class="new" interface="popover" placeholder="Subject....." >
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


          <IonGrid>
            <IonRow class="session-bubble-info">
              <IonCol> Answered</IonCol>
              <IonCol>Answered and for review</IonCol>
              <IonCol>Skipped</IonCol>
              <IonCol>Skipped and for review</IonCol>
              <IonCol>not visited</IonCol>
            </IonRow>

            <IonRow class="session-bubble-info">
              <IonCol>

                <IonIcon class="session-bubble-icon" icon={checkmarkCircle} color="success" />
                <IonBadge color="light">555</IonBadge>


              </IonCol>
              <IonCol>

                <IonIcon class="session-bubble-icon" icon={eye} color="success" />


                <IonBadge color="light">555</IonBadge>


              </IonCol>

              <IonCol>

                <IonIcon class="session-bubble-icon" icon={checkmarkCircle} color="warning" />
                <IonBadge color="light">555</IonBadge>


              </IonCol>
              <IonCol>

                <IonIcon class="session-bubble-icon" icon={eye} color="warning" />
                <IonBadge color="light">555</IonBadge>


              </IonCol>

              <IonCol>

                <IonIcon class="session-bubble-icon" icon={alertCircle} color="medium" />
                <IonBadge color="light">555</IonBadge>


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

              <IonChip outline color="success" >
              <IonIcon icon={checkmarkCircle} color="success" />
              <IonLabel color="dark">555</IonLabel></IonChip>

              </IonCol>
              <IonCol size="4">

              <IonChip outline color="medium"  >
              <IonIcon  icon={alertCircle} color="medium" />
                 <IonLabel color="dark">555</IonLabel>
           </IonChip>
              </IonCol>

              <IonCol size="4">

              <IonChip outline color="warning" >
              <IonIcon  icon={eye} color="warning" />
              <IonLabel color="dark">555</IonLabel> </IonChip>
              </IonCol>
              




            </IonRow>

            <IonRow class="session-bubbles">
              <IonCol size="4">

              <IonChip outline color="medium"  >
              <IonIcon  icon={alertCircle} color="medium" />
              <IonLabel color="dark">555</IonLabel></IonChip>

              </IonCol>
              <IonCol size="4">

              <IonChip outline color="success" >
              <IonIcon icon={checkmarkCircle} color="success" />
              <IonLabel color="dark">555</IonLabel>
           </IonChip>
              </IonCol>

              <IonCol size="4">

              <IonChip outline color="success" >
              <IonIcon  icon={eye} color="success" />
              <IonLabel color="dark">555</IonLabel>
           </IonChip>
              </IonCol>
              




            </IonRow>

            <IonRow class="session-bubbles">
              <IonCol size="4">

              <IonChip outline color="warning" >
              <IonIcon icon={arrowRedoCircleOutline}></IonIcon> 
              <IonLabel color="dark">555</IonLabel>
           </IonChip>

              </IonCol>
              <IonCol size="4">

              <IonChip outline color="success" >
              <IonIcon  icon={eye} color="success" />
              <IonLabel color="dark">555</IonLabel>
           </IonChip>
              </IonCol>

              <IonCol size="4">

              <IonChip outline color="success" >
              <IonIcon icon={checkmarkCircle} color="success" />
              <IonLabel color="dark">555</IonLabel>
           </IonChip>
              </IonCol>
              




            </IonRow>

            <IonRow class="session-bubbles">
              <IonCol size="4">

              <IonChip outline color="success" >
              <IonIcon  icon={eye} color="success" />
              <IonLabel color="dark">555</IonLabel>
           </IonChip>

              </IonCol>
              <IonCol size="4">

              <IonChip outline color="success" >
              <IonIcon icon={checkmarkCircle} color="success" />
              <IonLabel color="dark">555</IonLabel>
           </IonChip>
              </IonCol>

              <IonCol size="4">

              <IonChip outline color="success" >
              <IonIcon icon={checkmarkCircle} color="success" />
              <IonLabel color="dark">555</IonLabel>
           </IonChip>
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
