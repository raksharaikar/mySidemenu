import {
  IonButtons,
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
  IonChip,
  IonBadge,
  IonAvatar,
  IonDatetime,
  IonSpinner,
  IonButton,
} from "@ionic/react";
import {
  barChart,
  barbell,
  arrowForward,
  notifications,
  search,
} from "ionicons/icons";


import React, { useState } from "react";
import "./Mytestfinal.css";

const MytestPage: React.FC = () => {
  const [] = useState("");

  return (
    <IonPage>

      
      <IonHeader>
        <IonToolbar>


          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>My Tests </IonTitle>
          
          <IonButtons slot="primary">
            <IonButton shape="round" fill="clear">
              <IonIcon color="dark" slot="icon-only" icon={search} />
            </IonButton>
           
            <IonButton class="badge1" data-badge="6" shape="round" fill="clear" >
              <IonIcon color="dark" slot="icon-only" icon={notifications} />
              
            </IonButton>

            <IonButton shape="round" fill="clear" >
              <IonIcon color="dark" slot="icon-only" icon={notifications} />
              <IonBadge color="danger" class="qapp-header-notification-badge" item-end>
                123
              </IonBadge>
            </IonButton>

            <IonButton shape="round" fill="clear" >
            <IonBadge color="danger" class="qapp-header-notification-badge" item-end>
                123
              </IonBadge>
              <IonIcon color="dark" slot="icon-only" icon={notifications} />
              
            </IonButton>


            <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>

     
        <IonList>

      

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/img/jee-1.png"  />
            </IonAvatar>
           
            <IonList>
              <IonLabel class="qapp-my-test-item-text-wrap">
                <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
                <h3>Total 450 questions, 45 papers</h3>
                <p>
                  Topics include Mathematics, General Intelligence and
                  Reasoning, General Awareness, General Science
                </p>
              </IonLabel>
              <IonItem class="ion-no-padding" lines="none">
                <IonGrid class="ion-no-padding qapp-my-test-icon-row">
                  <IonRow>
                    <IonCol class="ion-no-padding" size="4">
                      <img
                        className="features"
                        src="/assets/img/trustspotnew.png"
                        alt=""
                      />
                    </IonCol>
                    <IonCol class="ion-no-padding" size="4">
                      <IonIcon icon={barChart} />
                    </IonCol>
                    <IonCol class="ion-no-padding" size="4">
                      <IonIcon icon={barbell} />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              <IonItem class="ion-no-padding" lines="none">
                <IonLabel class="qapp-my-test-item-text-wrap ion-no-margin ">
                  <IonBadge color="danger">FREE</IonBadge>&nbsp;
                  <IonBadge color="success">LATEST PATTERN</IonBadge>
                  <IonIcon name="bar-chart-outline"></IonIcon>
                </IonLabel>
              </IonItem>
            </IonList>

            <IonIcon icon={arrowForward} slot="end"></IonIcon>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/img/jee-1.png" alt="" />
            </IonAvatar>
            <IonList>
              <IonLabel class="qapp-my-test-item-text-wrap">
                <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
                <h3>Total 450 questions, 45 papers</h3>
                <p>
                  Topics include Mathematics, General Intelligence and
                  Reasoning, General Awareness, General Science
                </p>
              </IonLabel>
              <IonItem class="ion-no-padding " lines="none">
                <IonGrid class="ion-no-padding ">
                  <IonRow>
                    <IonCol class="ion-no-padding" size="12">
                      <IonChip class="ion-no-margin" outline color="success">
                        <IonLabel>Valid till:</IonLabel> &nbsp;
                        <IonDatetime
                          class="ion-no-padding"
                          displayFormat="MM/DD/YYYY"
                          min="1994-03-14"
                          max="2012-12-09"
                          value="2012-12-09"
                        ></IonDatetime>
                        &nbsp; &nbsp;
                        <IonDatetime
                          class="ion-no-padding"
                          displayFormat="HH:mm"
                          value="23:55"
                        ></IonDatetime>
                      </IonChip>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>

              <IonItem class="ion-no-padding" lines="none">
                <IonLabel class="qapp-my-test-item-text-wrap ion-no-margin ">
                  <IonBadge color="danger">FREE</IonBadge>&nbsp;
                  <IonBadge color="success">LATEST PATTERN</IonBadge>
                  <IonIcon name="bar-chart-outline"></IonIcon>
                </IonLabel>
              </IonItem>
            </IonList>
            <IonIcon icon={arrowForward} slot="end"></IonIcon>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/img/jee-1.png" alt="" />
            </IonAvatar>
            <IonList>
              <IonLabel class="qapp-my-test-item-text-wrap">
                <h2>JEE 2020 - Jumbo pack, 6 Model question papers</h2>
                <h3>Total 450 questions, 45 papers</h3>
                <p>
                  Topics include Mathematics, General Intelligence and
                  Reasoning, General Awareness, General Science
                </p>
              </IonLabel>
              <IonItem class="ion-no-padding " lines="none">
                <IonGrid class="padding-left-none ">
                  <IonRow>
                    <IonCol class="ion-no-padding">
                      <IonSpinner color="danger" name="lines" />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>

              <IonItem class="ion-no-padding" lines="none">
                <IonLabel class="qapp-my-test-item-text-wrap ion-no-margin ">
                  <IonBadge color="danger">FREE</IonBadge>&nbsp;
                  <IonBadge color="primary">LATEST PATTERN</IonBadge>
                  <IonIcon name="bar-chart-outline"></IonIcon>
                </IonLabel>
              </IonItem>
            </IonList>

            <IonIcon icon={arrowForward} slot="end"></IonIcon>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MytestPage;
