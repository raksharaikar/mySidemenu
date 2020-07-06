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
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
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
  IonBadge,
  IonText,
  IonAvatar,
  IonBackButton,
  IonThumbnail,
  IonImg,
  IonNote,
  IonDatetime
  } from '@ionic/react';
import React from 'react';
import './instructions.css';

import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';

import Tab2 from './Tab2';
import Tab3 from './Tab3';

import { newspaper, copy, arrowForward, checkbox, informationCircle, cartOutline } from 'ionicons/icons';



const InstructionsPage: React.FC = () => {
  return (
    <IonPage>


    {/*-- Back button with a default href --*/}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="home" />
        </IonButtons>
        <IonTitle>Instructions</IonTitle>
       
      </IonToolbar>
    </IonHeader>

   
  
    {/* 
  
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
  
        <IonChip class="qapp-timer-chip" outline color="dark" slot="secondary">
      <IonIcon icon={stopwatch} />
            <IonLabel>55:55</IonLabel>
            
          </IonChip>
      </IonToolbar>
  
  
  
   */}
     
  
        <IonContent>
  
  
       

    
    <IonCard class="ion-text-center"  text-center>
         <IonCardHeader>
      

           
          <IonThumbnail class="instruction-top-img">
            <IonImg src="/assets/img/jee-1.png" alt=""/>
   
          </IonThumbnail>
         
        


       
        </IonCardHeader>


        
        <IonChip color="danger">
          <IonLabel>M 555</IonLabel>
        </IonChip>


      <IonCardContent text-center class="qapp-instr-card-content">
      <IonItem class="ion-text-center"  lines="none">
                <h3>Keep close to Nature's heart... and break cc clear away,
        and climb </h3>
              </IonItem>  </IonCardContent>

             

    </IonCard>


  




    <IonCard>
    <IonCardHeader>
      <IonItem>
      <IonAvatar class="instruction-card-1" slot="start">
      <IonIcon color="danger" class="instruction-card-left-img" icon={newspaper} />
      
            </IonAvatar>  <IonLabel> <h3  className="content-style">Loreum Ipsum</h3>
           </IonLabel>
        </IonItem></IonCardHeader>

        <IonCardContent class="outer-content">
          <IonList>
            
          <IonItem>
        <h3>About</h3>
        <IonNote color="dark" slot="end">55555</IonNote><br />
             </IonItem>

        <IonItem>
        <h3>About</h3>
              <IonLabel  class="ion-text-end" slot="end"><h3>999</h3></IonLabel>
        </IonItem>
            <IonItem>
          <IonLabel><h3>sdfsdfsdfsdf fsdf fsdf fsdf fsdf fsdf fsdf fsdf fsdf fsdf fsdf</h3></IonLabel>
          <h3 className="left-margin" slot="end" color="danger">9dfdfg9999</h3>
        </IonItem>

        <IonItem>

        <IonLabel class="text-wrap"><h3>sdfsdfsdfsdf fg dfd dfg df dfsdf fsdf fsdf fsdf fsdf fsdf fsdf fsdf fsdf fsdf</h3></IonLabel>
        <IonNote  class="ion-text-end instruction-note" color="dark" slot="end">   
        999
        </IonNote>
        </IonItem>

        


          </IonList>
        </IonCardContent>

        
      </IonCard>

   
    
      <IonCard>
    <IonCardHeader>
      <IonItem>
      <IonAvatar class="instruction-card-1" slot="start">
       <IonIcon color="danger" class="instruction-card-left-img"  icon={copy}   />
      
            </IonAvatar>  <IonLabel> <h3  className="content-style">Sections</h3>
           </IonLabel>
        </IonItem></IonCardHeader>

        <IonCardContent class="outer-content">

      


      <IonGrid class="instruction-section-table-size ion-no-padding">
      <IonItem>
    <IonRow class="section-table">
      <IonCol size="4" >
       
      <h3  className="content-style">Subject</h3>
      </IonCol>
      <IonCol size="4">
       
      <h3  className="content-style">Qs</h3>
     </IonCol>
      <IonCol size="4">
      <h3  className="content-style">Marks</h3>
     </IonCol>
      
      

    </IonRow>


    </IonItem>

    <IonItem lines="none">
    <IonRow class="section-table">
      <IonCol size="4" >
       
      sdfsdf
       </IonCol>
      <IonCol size="4">
       
      sdfsdf
      </IonCol>
      <IonCol size="4">
       
      sdfsdf
      </IonCol>
      
      

    </IonRow>


    </IonItem>
    <IonItem lines="none">
    <IonRow class="section-table">
      <IonCol size="4" >
      sdfsdf
      </IonCol>
      <IonCol size="4">
       
      sdfsdf
      </IonCol>
      <IonCol size="4">
       
      sdfsdf
      </IonCol>
      
      

    </IonRow>


    </IonItem>
    <IonItem lines="none">
    <IonRow class="section-table">
      <IonCol size="4" >
       
      sdfsdf
      </IonCol>
      <IonCol size="4">
       
      sdfsdf
      </IonCol>
      <IonCol size="4">
       
      sdfsdf
      </IonCol>
      
      

    </IonRow>


    </IonItem>

    
</IonGrid>
         
        </IonCardContent>

        
      </IonCard>



      <IonCard>
    <IonCardHeader>
      <IonItem>
      <IonAvatar class="instruction-card-1" slot="start">
      <IonIcon color="danger" class="instruction-card-left-img"  icon={checkbox} />
    
            </IonAvatar>  <IonLabel> <h3  className="content-style">Marking scheme</h3>
           </IonLabel>
        </IonItem></IonCardHeader>

        <IonCardContent class="outer-content">
          <IonList>
          
            <IonItem lines="none">
          <IonLabel><h3>Right answer</h3></IonLabel>
            {/* <h3 className="left-margin" slot="end" color="danger">+ 4</h3>*/}
            <IonBadge color="light">+ 4</IonBadge>
        </IonItem>

        
        <IonItem lines="none">
          <IonLabel><h3>Wrong answer</h3></IonLabel>
            {/*  <h3 className="left-margin" slot="end" color="danger">- 0.25</h3> */}
            <IonBadge color="light">- 0.25</IonBadge>
        </IonItem>

        
     



          </IonList>
        </IonCardContent>

        
      </IonCard>





      <IonCard>
    <IonCardHeader>
      <IonItem>
      <IonAvatar class="instruction-card-1" slot="start">
       <IonIcon color="danger" class="instruction-card-left-img"  icon={informationCircle} />
      
            </IonAvatar>  <IonLabel> <h3  className="content-style">Desclaimer</h3>
           </IonLabel>
        </IonItem></IonCardHeader>

        <IonCardContent class="outer-content">
          
          <IonItem lines="none">
            <h3>Keep close to Nature's heart... and break cc clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.</h3>
          </IonItem>
      
     
    </IonCardContent>


        
      </IonCard>




   
























      

    
    
     
  
  
  
  






  
  
        </IonContent>
  
        <IonFooter>
        <IonToolbar>
          
  
  
            <IonGrid>
        <IonRow>
          <IonCol > <IonTabButton class="new2" >
            <IonIcon icon={arrowForward}></IonIcon>
             <IonLabel>Next</IonLabel>
            </IonTabButton> </IonCol>
        </IonRow>
  
  
       
      </IonGrid>
        </IonToolbar>
      </IonFooter>
      
    </IonPage>
  );
};

export default InstructionsPage;
