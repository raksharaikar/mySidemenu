import {
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
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonText,
  IonFooter,
  IonGrid,
  IonTabButton,
  IonRadioGroup,
  IonRadio,
  IonChip,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
  IonFab,
  IonFabButton,
  IonThumbnail,
  IonImg,
  IonMenu
} from '@ionic/react';
import { book, build, colorFill, grid, square, stopwatch, pause,  refresh, save, logoFacebook,checkmarkCircleOutline, apps, logoGoogle } from 'ionicons/icons';
import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
        
      <IonContent>
      <IonMenu side="start" menuId="first">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>






    
  {/* 


      <IonCard class="ion-text-center"  text-center>

      <img className="login-logo" width=" 220px;"src="assets/img/app_neet_logo.png" alt="Ionic logo" />
    

         <IonCardHeader>
      

            <IonCardTitle>Questionbang</IonCardTitle>
        
        
         
        


       
        </IonCardHeader>


        


      <IonCardContent text-center >
      
      <IonLabel> <h3  className="content-style">Sign in to Questionbang. You may use your Google or Facebook account.</h3>
           </IonLabel>

          <IonRow>
            <IonCol>
            <IonButton className="login-google"  expand="block">
            <IonIcon icon={logoGoogle} ></IonIcon>
             &nbsp;
            
             
                Sign in using Google
  
                 </IonButton>  </IonCol>
            
          </IonRow>
          <IonRow>
            <IonCol>
            <IonButton className="login-fb"   type="submit" expand="block">    
              
            <IonIcon icon={logoFacebook} ></IonIcon>
            &nbsp;
            Sign in using Facebook
              
            
         </IonButton>  </IonCol>
            
          </IonRow> 
          
          
          
          
          <IonRow>
            <IonCol>
            <IonText >
  <h5>Sign in to Questionbang. You may use your Google or Facebook account.</h5>
</IonText></IonCol>
            
          </IonRow> 
          <IonRow>
            <IonCol>
            <IonText >
  <h5>Sign in to Questionbang. You may use your Google or Facebook account.</h5>
</IonText></IonCol>
            
          </IonRow> 
          </IonCardContent>

             

    </IonCard>



  */}









<div className="card-content-center">

    <IonCard class="ion-text-center login-card"  text-center>

<img className="login-logo" width=" 220px;"src="assets/img/app_neet_logo.png" alt="Ionic logo" />


   <IonCardHeader>


      <IonCardTitle>Questionbang</IonCardTitle>
  
  
   
  


 
  </IonCardHeader>


  


<IonCardContent text-center >
<IonGrid>

<IonRow justify-content-center>
<IonCol>
		
	
<IonLabel> <h3  className="content-style">Sign in to Questionbang. You may use your Google or Facebook account.</h3>
           </IonLabel>
           </IonCol>
	</IonRow>

	

  <IonRow class="Login-btn-center ion-margin-top" >
            <IonCol size-md="6" size-lg="5" size-xs="12" >
            <IonButton className="login-google"  expand="block">
            <IonIcon icon={logoGoogle} ></IonIcon>
             &nbsp;
            
             
                Sign in using Google
  
                 </IonButton>  </IonCol>
            
          </IonRow >

        
          <IonRow class="Login-btn-center ion-margin-bottom" >
            <IonCol  size-md="6" size-lg="5" size-xs="12">
            <IonButton className="login-fb"   type="submit" expand="block">    
              
            <IonIcon icon={logoFacebook} ></IonIcon>
            &nbsp;
            Sign in using Facebook
              
            
         </IonButton>  </IonCol>
            
          </IonRow> 


          <IonRow justify-content-center>
<IonCol>
		
	
<IonLabel> <h3  className="content-style">Sign in to Questionbang. You may use your Google or Facebook account.</h3>
           </IonLabel>
           </IonCol>
	</IonRow>

  <IonRow justify-content-center>
<IonCol>
		
	
<IonLabel> <h3  className="content-style">Sign in to Questionbang. You may use your Google or Facebook account.</h3>
           </IonLabel>
           </IonCol>
	</IonRow>

</IonGrid>
    </IonCardContent>

       

</IonCard>


</div>


























    













  {/* 











      <IonCard className="card-padding">

      <img className="login-logo" width="100px"src="assets/img/app_neet_logo.png" alt="Ionic logo" />
      <IonRow>
      
            <IonCol>
              <IonButton className="login-fb"   type="submit" expand="block">    
              
              Facebook
              
            
         </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="login-google"  expand="block">
                
             
              Google

              <IonIcon name="logo-facebook"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
     


          
<h1>or</h1>




      <IonCardContent className="form">
       
        <form noValidate >
          <IonList>
            <IonItem>
         <IonLabel position="stacked" color="dark">Username </IonLabel>
              <IonInput name="username" type="text" spellCheck={false} autocapitalize="off" 
                required>
              </IonInput>
            </IonItem>

         

            <IonItem>
            <IonLabel position="stacked" color="dark">Username </IonLabel>
              <IonInput name="password" type="password"  >
              </IonInput>
            </IonItem>

           
          </IonList>


          <IonLabel> <h3  className="content-style">Sign in to Questionbang. You may use your Google or Facebook account.</h3>
           </IonLabel>

          <IonRow>
            <IonCol>
            <IonButton className="login-google"  expand="block">
            <IonIcon icon={logoGoogle} ></IonIcon>
             &nbsp;
            
             
                Sign in using Google
  
                 </IonButton>  </IonCol>
            
          </IonRow>
          <IonRow>
            <IonCol>
            <IonButton className="login-fb"   type="submit" expand="block">    
              
            <IonIcon icon={logoFacebook} ></IonIcon>
            &nbsp;
            Sign in using Facebook
              
            
         </IonButton>  </IonCol>
            
          </IonRow>
         


        </form>

        <IonRow>
            <IonCol className="right-align">
            <p>
  <a href="#">Forgot password?</a>
</p></IonCol>
            
          </IonRow>
<br></br>
          <IonRow>
            <IonCol className="center-align">
            <p>
  Don't have an account? <a href="#">Sign up</a>
</p></IonCol>
            
          </IonRow>

      </IonCardContent>

     
    
    </IonCard>

  */}
     
   

      </IonContent>

    </IonPage>
  );
};

export default Login;
