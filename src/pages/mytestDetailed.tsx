import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow,
  IonGrid,
  IonFooter,
  IonButton,
  IonBadge,
  IonAvatar,
  IonThumbnail,
  IonImg  } from '@ionic/react';
import React from 'react';

import './mytest.css';





const InstructionsPage: React.FC = () => {
  return (
    <IonPage>
<IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
            
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
     
    {/*-- Back button with a default href --*/}
    

   
  
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


        
        

      <IonCardContent text-center>

      <IonItem class=""  lines="none">
      <IonThumbnail slot="start" >
            <IonImg src="/assets/img/jee-1.png" alt=""/>
   
          </IonThumbnail>
      <IonLabel class="text-wrap-my-test">
            <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
             </IonLabel>
         
              </IonItem>
      <IonItem class=""  lines="none">
      <IonLabel class="text-wrap-my-test">
            <p>Topics include Mathematics, General Intelligence and Reasoning, General Awareness, General Science</p>
          </IonLabel>
         
              </IonItem> 
             
      <IonItem class=""  lines="none">
      
          <IonButton expand="block">Block Button</IonButton>
              </IonItem> 
            
 </IonCardContent>

            

    </IonCard>

   
    
       
    <IonList>
		


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
          <IonIcon name="arrow-forward" slot="end"></IonIcon>
          
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




          <IonIcon name="arrow-forward" slot="end"></IonIcon>
        
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




          <IonIcon name="arrow-forward" slot="end"></IonIcon>
        
         </IonItem>



         <IonItem>
   
         <IonBadge  slot="start" color="dark">999</IonBadge>

  
   <IonLabel class="text-wrap-my-test">

      <h3>Reasoning & computer aptitude (1)</h3>
      
      <IonItem  class="padding-none" lines="none">
      <IonLabel class="text-wrap-my-test ">
      <p>Questions - 35</p>
       <p>Total duration - 45Mins</p>
       <p>Total marks - 60</p>
      

      </IonLabel>


 </IonItem>


    </IonLabel>




    <IonIcon name="arrow-forward" slot="end"></IonIcon>
  
   </IonItem>



   <IonItem>
   
   <IonBadge  slot="start" color="dark">999</IonBadge>


<IonLabel class="text-wrap-my-test">

<h3>Reasoning & computer aptitude (1)</h3>

<IonItem  class="padding-none" lines="none">
<IonLabel class="text-wrap-my-test ">
<p>Questions - 35 Questions - 35 Questions - 35</p>
 <p>Total duration - 45Mins Questions - 35</p>
 <p>Total marks - 60 Questions - 35</p>

</IonLabel>


</IonItem>


</IonLabel>




<IonIcon name="arrow-forward" slot="end"></IonIcon>

</IonItem>







<IonItem>
   
   <IonBadge  slot="start" color="dark">999</IonBadge>


<IonLabel class="text-wrap-my-test">

<h3>Reasoning & computer aptitude (1)</h3>


<p className="">Questions - 35</p>
 <p>Total duration - 45Mins</p>
 <p>Total marks - 60</p>


</IonLabel>








<IonIcon name="arrow-forward" slot="end"></IonIcon>

</IonItem>



<IonItem>
   
   <IonBadge  slot="start" color="dark">999</IonBadge>


<IonLabel class="text-wrap-my-test">

<h3>Reasoning & computer aptitude (1)</h3>


<p className="">Questions - 35</p>
 <p>Total duration - 45Mins</p>
 <p>Total marks - 60</p>


</IonLabel>








<IonIcon name="arrow-forward" slot="end"></IonIcon>

</IonItem>




<IonItem>
   
   <IonBadge  slot="start" color="dark">999</IonBadge>


<IonLabel class="text-wrap-my-test">

<h3>Reasoning & computer aptitude (1)</h3>



<IonGrid class="padding-left-none">
      <IonRow >
        <IonCol class="ion-no-padding" size="2"> <IonIcon /></IonCol>
        <IonCol  class="ion-no-padding" size="10">  <IonLabel><p>Questions - 30</p></IonLabel></IonCol>
        
      </IonRow>
      <IonRow>
      <IonCol class="ion-no-padding" size="2"> <IonIcon  /></IonCol>
      <IonCol  class="ion-no-padding" size="10">  <IonLabel><p>Total duration - 45Mins</p></IonLabel></IonCol>
        
      </IonRow>
      <IonRow>
      <IonCol class="ion-no-padding" size="2"> <IonIcon /></IonCol>
        <IonCol  class="ion-no-padding" size="10">  <IonLabel><p>Total marks - 60</p></IonLabel></IonCol>
        
      </IonRow>
    

      </IonGrid>

</IonLabel>








<IonIcon name="arrow-forward" slot="end"></IonIcon>

</IonItem>



<IonItem>
   
   <IonBadge  class="badge-position" slot="start" color="dark">999</IonBadge>


<IonLabel class="text-wrap-my-test">

<h3>Reasoning & computer aptitude (1)</h3>



<IonGrid class="padding-left-none">
      <IonRow >
        <IonCol class="ion-no-padding" size="2"> <IonIcon /></IonCol>
        <IonCol  class="ion-no-padding" size="10">  <IonLabel><p>Questions - 30</p></IonLabel></IonCol>
        
      </IonRow>
      <IonRow>
      <IonCol class="ion-no-padding" size="2"> <IonIcon  /></IonCol>
      <IonCol  class="ion-no-padding" size="10">  <IonLabel><p>Total duration - 45Mins</p></IonLabel></IonCol>
        
      </IonRow>
      <IonRow>
      <IonCol class="ion-no-padding" size="2"> <IonIcon  /></IonCol>
        <IonCol  class="ion-no-padding" size="10">  <IonLabel><p>Total marks - 60</p></IonLabel></IonCol>
        
      </IonRow>
    

      </IonGrid>

</IonLabel>








<IonIcon name="arrow-forward" slot="end"></IonIcon>

</IonItem>


<IonItem>
   
   <IonBadge  slot="start" color="dark">999</IonBadge>


<IonLabel class="text-wrap-my-test">

<h3>Reasoning & computer aptitude (1)</h3>



<IonGrid class="padding-left-none">
      <IonRow >
       <IonCol  class="ion-no-padding" size="10">  <IonLabel><p>Questions - 30</p></IonLabel></IonCol>
        
      </IonRow>
      <IonRow>
      <IonCol  class="ion-no-padding" size="10">  <IonLabel><p>Total duration - 45Mins</p></IonLabel></IonCol>
        
      </IonRow>
      <IonRow>
       <IonCol  class="ion-no-padding" size="10">  <IonLabel><p>Total marks - 60</p></IonLabel></IonCol>
        
      </IonRow>
    

      </IonGrid>

</IonLabel>








<IonIcon name="arrow-forward" slot="end"></IonIcon>

</IonItem>


<IonItem>
   
   <IonBadge  slot="start" color="dark">999</IonBadge>


<IonLabel class="text-wrap-my-test">

<h3>Reasoning & computer aptitude (1)</h3>





<p className=""> <IonIcon />&nbsp;&nbsp;Questions - 35</p>
 <p> <IonIcon  />&nbsp;&nbsp;Total duration - 45Mins</p>
 <p> <IonIcon   />&nbsp;&nbsp;Total marks - 60</p>


</IonLabel>








<IonIcon name="arrow-forward" slot="end"></IonIcon>

</IonItem>

	</IonList>

     
   
    



























      

    
    
     
  
  
  
  






  
  
        </IonContent>
  
        <IonFooter>
        <IonToolbar>
          
  
  
        </IonToolbar>
      </IonFooter>
      
    </IonPage>
  );
};

export default InstructionsPage;
