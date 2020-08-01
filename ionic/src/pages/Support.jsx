import React from "react";
import {
  IonImg,
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Support.css";

const Support = ({ support }) => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent>
        <IonHeader collapse="condense"></IonHeader>
        <div className="support-tab">
          <h3>Support</h3>
          <div className="support-tab-message">
            Sometimes everyone needs more assistance.<br />
            <span> Find the below support if you need.</span>
          </div>
        </div>
        <IonGrid>
          <HelpAndSupport
            text="IBD Helpline - 1800 138 029"
            description="I understand that sometimes life's ups and downs are tougher when living with IBD. However, I am not a substitute for healthcare. If you are in a dark place please don't hesitate in contacting the following support. You are not alone."
          />
          <IonRow>
            <HomeTabBigButton image="ccA" history={support} page="/tabs/activities" />
            <HomeTabBigButton image="bblogo" />
          </IonRow>
          <IonRow>
            <HomeTabBigButton image="lifeline" />
            <HomeTabBigButton image="hub" />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

function HomeTabBigButton(props) {
  const { page, history, title, image } = props;
  function onClick(e) {
    e.preventDefault();
    history.push(page)
  }
  return (
    <IonCol size="6" onClick={page ? onClick : undefined}>
      <div className="support-page-big-button">
        <IonImg
          style={{ height: "10em", width: "90%" }}
          src={`assets/${image}.png`}
        />
        {title}
      </div>
    </IonCol>
  );
}

function HelpAndSupport(props) {
  const { text, description } = props;
  return (
    <IonCol size="12">
      <div className="support-page-quote-of-the-day">
        <div>{text}</div>
        <div>{description}</div>
        <IonImg
          style={{ height: "10em", width: "100%" }}
          src={`assets/cloudss.png`}
        />
      </div>

    </IonCol>
  );
}

export default Support;
