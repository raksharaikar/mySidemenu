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
  IonItemSliding,
  IonItemOptions,
  IonInput,
  IonToggle,
  IonCheckbox,
  IonItemOption,
  IonThumbnail,
  IonImg
  } from '@ionic/react';
import React from 'react';

import './mytest.css';

import { book, build, colorFill, grid, apps, checkmarkCircleOutline, refresh, save, square, stopwatch, pause, arrowForward } from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';

import Tab2 from './Tab2';
import Tab3 from './Tab3';


const InstructionsPage: React.FC = () => {
  return (
    <IonPage>


    {/*-- Back button with a default href --*/}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="home" />
        </IonButtons>
        <IonTitle>My Tests </IonTitle>
         
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
  
  
        
  

          

 

   
    
       
    <IonList>
		



    <IonItem>
   
   <IonAvatar  slot="start">
   <img  src="/assets/img/jee-1.png" alt=""/>
         </IonAvatar>
        
         <IonLabel class="text-wrap-my-test">
            <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
            <h3>Total 450 questions, 45 papers</h3>
            <p>Topics include Mathematics, General Intelligence and Reasoning, General Awareness, General Science</p>
           
           
            <IonItem class="ion-no-padding " lines="none">
            
     

            <IonGrid class="padding-left-none">
      <IonRow >
        <IonCol class="ion-no-padding" size="4"> <img  className="features" src="/assets/img/trustspotnew.png" alt=""/>
     </IonCol>
        <IonCol  class="ion-no-padding" size="4">   <img  className="features" src="/assets/img/trustspotnew.png" alt=""/></IonCol>
        <IonCol  class="ion-no-padding" size="4">   <img  className="features" src="/assets/img/trustspotnew.png" alt=""/></IonCol>
        
      </IonRow>
      
    
    
      </IonGrid>



         </IonItem>



           
            <IonItem class="ion-no-padding" lines="none">
            <IonLabel class="text-wrap-my-test ion-no-margin ">
           
             <IonBadge color="danger">FREE</IonBadge>&nbsp;
            <IonBadge color="success">LATEST PATTERN</IonBadge>



            <IonIcon name="bar-chart-outline"></IonIcon>


             </IonLabel>
 </IonItem>
          
          </IonLabel>




          <IonIcon icon={arrowForward}  slot="end"></IonIcon>
          
      
         </IonItem>




         <IonItem>
   
   <IonAvatar  slot="start">
   <img  src="/assets/img/jee-1.png" alt=""/>
         </IonAvatar>
        
         <IonLabel class="text-wrap-my-test">
            <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
            <h3>Total 450 questions, 45 papers</h3>
            <p>Topics include Mathematics, General Intelligence and Reasoning, General Awareness, General Science</p>
           
           
            <IonItem class="ion-no-padding " lines="none">
            
     

            <IonGrid class="padding-left-none">
      <IonRow >
        <IonCol class="ion-no-padding" size="4"> <img  className="features" src="/assets/img/trustspotnew.png" alt=""/>
     </IonCol>
        <IonCol  class="ion-no-padding" size="4">   <img  className="features" src="/assets/img/trustspotnew.png" alt=""/></IonCol>
        <IonCol  class="ion-no-padding" size="4">   <img  className="features" src="/assets/img/trustspotnew.png" alt=""/></IonCol>
        
      </IonRow>
      
    
    
      </IonGrid>



         </IonItem>



           
            <IonItem class="ion-no-padding" lines="none">
            <IonLabel class="text-wrap-my-test ion-no-margin ">
           
             <IonBadge color="danger">FREE</IonBadge>&nbsp;
            <IonBadge color="success">LATEST PATTERN</IonBadge>



            <IonIcon name="bar-chart-outline"></IonIcon>


             </IonLabel>
 </IonItem>
          
          </IonLabel>




          <IonIcon icon={arrowForward}  slot="end"></IonIcon>
          
      
         </IonItem>


         <IonItem>
   
   <IonAvatar  slot="start">
   <img  src="/assets/img/jee-1.png" alt=""/>
         </IonAvatar>
        
         <IonLabel class="text-wrap-my-test">
            <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
            <h3>Total 450 questions, 45 papers</h3>
            <p>Topics include Mathematics, General Intelligence and Reasoning, General Awareness, General Science</p>
           
           
            <IonItem class="ion-no-padding " lines="none">
            
     

            <IonGrid class="padding-left-none">
      <IonRow >
        <IonCol class="ion-no-padding" size="4"> <img  className="features" src="/assets/img/trustspotnew.png" alt=""/>
     </IonCol>
        <IonCol  class="ion-no-padding" size="4">   <img  className="features" src="/assets/img/trustspotnew.png" alt=""/></IonCol>
        <IonCol  class="ion-no-padding" size="4">   <img  className="features" src="/assets/img/trustspotnew.png" alt=""/></IonCol>
        
      </IonRow>
      
    
    
      </IonGrid>



         </IonItem>



           
            <IonItem class="ion-no-padding" lines="none">
            <IonLabel class="text-wrap-my-test ion-no-margin ">
           
             <IonBadge color="danger">FREE</IonBadge>&nbsp;
             <IonChip outline>
       <IonLabel>Default</IonLabel>
    </IonChip>



            

             </IonLabel>
 </IonItem>
          
          </IonLabel>




          <IonIcon icon={arrowForward}  slot="end"></IonIcon>
          
      
         </IonItem>











    <IonItem>
   
    <IonThumbnail slot="start">
    <img  src="/assets/img/jee-1.png" alt=""/>
          </IonThumbnail>
         
          <IonLabel class="text-wrap-my-test">
            <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
            <h3>Total 450 questions, 45 papers</h3>
            <p>Topics include Mathematics, General Intelligence and Reasoning, General Awareness, General Science</p>
          </IonLabel>
         
        </IonItem>

        <IonItem>
   
   <IonAvatar class="square-thumb" slot="start">
   <img  src="/assets/img/jee-1.png" alt=""/>
         </IonAvatar>
        
         <IonLabel>
            <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
            <h3>Total 450 questions, 45 papers</h3>
            <p>Topics include Mathematics, General Intelligence and Reasoning, General Awareness, General Science</p>
          
            
            <IonItem lines="none">
            <IonLabel class="text-wrap-my-test">
           
             <IonBadge color="danger">ANALYSIS</IonBadge>&nbsp;
             <IonBadge color="danger">loreum</IonBadge>&nbsp;
             <IonBadge color="danger">FREE</IonBadge>&nbsp;
            <IonBadge color="success">LATEST PATTERN</IonBadge>



            </IonLabel>


    <IonAvatar  slot="end">
   <img  src="/assets/img/trustspot.jpg" alt=""/>
          </IonAvatar> </IonItem>

          </IonLabel>
          <IonIcon icon={arrowForward}  slot="end"></IonIcon>
          
       
       </IonItem>


       




       <IonItem>
   
   <IonAvatar  slot="start">
   <img  src="/assets/img/jee-1.png" alt=""/>
         </IonAvatar>
        
         <IonLabel>
            <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
            <h3>Total 450 questions, 45 papers</h3>
            <p>Topics include Mathematics, General Intelligence and Reasoning, General Awareness, General Science</p>
            
          
          </IonLabel>




          <IonIcon icon={arrowForward}  slot="end"></IonIcon>
          
      
         </IonItem>


         <IonItem>
         
         <IonAvatar class="square-thumb" slot="start">
   <img  src="/assets/img/jee-1.png" alt=""/>
          </IonAvatar>
        
         <IonLabel class="text-wrap-my-test">
            <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
            <h3>Total 450 questions, 45 papers</h3>
            <p>Topics include Mathematics, General Intelligence and Reasoning, General Awareness, General Science</p>
            
            <IonItem class="padding-left-none" lines="none">
            <IonLabel class="text-wrap-my-test">
           
             <IonBadge color="danger">ANALYSIS</IonBadge>&nbsp;
             <IonBadge color="danger">loreum</IonBadge>&nbsp;
             <IonBadge color="danger">FREE</IonBadge>&nbsp;
            <IonBadge color="success">LATEST PATTERN</IonBadge>



            </IonLabel>


    <IonAvatar  slot="end">
   <img  src="/assets/img/trustspot.jpg" alt=""/>
          </IonAvatar> </IonItem>


          </IonLabel>




          <IonIcon icon={arrowForward}  slot="end"></IonIcon>
          
      
         </IonItem>



	</IonList>

     
   
    



























      

    
    
     
  
  
  
  






  
  
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

export default InstructionsPage;
