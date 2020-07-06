import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonHeader,
  IonBadge,
  IonButton,
  IonAvatar,
  IonSplitPane,
} from "@ionic/react";
import React from "react";
import "../pages/Mytestfinal.css";
import { withRouter } from "react-router-dom";
import {
  videocam,
  notifications,
  barChart,
  cart,
  bookmark,
  helpBuoy,
  logOut,
  ellipsisHorizontalOutline,
} from "ionicons/icons";

const Menu: React.FunctionComponent = () => {
  return (
    
          
    <IonMenu side="start" contentId="main" type="overlay">
      <IonHeader>
        <IonItem lines="none">
          <IonAvatar slot="start">
            <img src="/assets/img/jee-1.png" alt="" />
          </IonAvatar>

          <IonLabel class="ion-text-wrap">
            <h2>Raksha Raikar</h2>

            <p>19 quizzes remaining</p>
          </IonLabel>
          <IonButton slot="end" fill="clear" onClick={() => { }}>
            <IonIcon
              slot="icon-only"
              color="dark"
              icon={ellipsisHorizontalOutline}
            />
          </IonButton>
        </IonItem>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonItem lines="none">
            <IonIcon slot="start" icon={videocam} color="dark" />
            <IonLabel>Video Lessons</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonButton slot="start" fill="clear" class="qapp-menu-notification-btn" size="large" color="light">
              <IonIcon class="qapp-menu-notification-icon-size"  icon={notifications} color="dark"></IonIcon>
              <IonBadge color="danger" class="qapp-menu-notification-badge" item-end>2</IonBadge>
            </IonButton>
            Notifications
          </IonItem>

          <IonItem lines="none">
            <IonIcon slot="start" icon={barChart} color="dark" />
            My Chances
          </IonItem>
          <IonItem lines="none">
            <IonIcon slot="start" icon={cart} color="dark" />
            My Purchase
          </IonItem>
          <IonItem lines="none">
            <IonIcon slot="start" icon={bookmark} color="dark" />
            Bookmarks
          </IonItem>
          <IonItem lines="none">
            <IonIcon slot="start" icon={helpBuoy} color="dark" />
            Support
          </IonItem>
          <IonItem lines="none">
            <IonIcon slot="start" icon={logOut} color="dark" />
            Logout
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
 
  );
};

export default withRouter(Menu);
