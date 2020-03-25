
import './ExploreContainer.css';
import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption, IonPage, IonItemDivider } from '@ionic/react';
import React, { useState } from 'react';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const [fiyesta, setFiyesta] = useState<string>();

  return (
    <div className="container">
      <IonList>
          <IonListHeader>
            <IonLabel>
              Which FiYESta have you been on?
            </IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>FiYESta</IonLabel>
            <IonSelect value={fiyesta} placeholder="Select One" onIonChange={e => setFiyesta(e.detail.value)}>
              <IonSelectOption value="rotterdam">Rotterdam</IonSelectOption>
              <IonSelectOption value="hamburg">Hamburg</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>FiYESta: {fiyesta ?? '(none selected)'}</IonItem>
        </IonList>
    </div>
  );
};

export default ExploreContainer;
