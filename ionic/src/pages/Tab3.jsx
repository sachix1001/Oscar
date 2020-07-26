import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import * as Ion from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import WelcomePage from "../components/WelcomePage";

const Tab3 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <WelcomePage />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
