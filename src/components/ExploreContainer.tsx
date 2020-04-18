
import './ExploreContainer.css';
import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption, IonPage, IonItemDivider } from '@ionic/react';
import React, { useState } from 'react';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const [fiyesta,  setFiyesta, fiyesta2] = useState<string>();

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
            <IonSelect value={fiyesta}  multiple={true} onIonChange={e => setFiyesta(e.detail.value)}>
              <IonSelectOption value="Western Europe Interrail 2018 ">Western Europe Interrail 2018</IonSelectOption>
              <IonSelectOption value="Hamburg NYE 2018/2019 ">Hamburg NYE 2018/2019 </IonSelectOption>
              <IonSelectOption value="Phuket 2019 ">Phuket 2019 </IonSelectOption>
              <IonSelectOption value="Morocco 2019">Morocco 2019</IonSelectOption>
              <IonSelectOption value="Dublin 2019">Dublin 2019</IonSelectOption>
              <IonSelectOption value="Hamburg B-Day 2019 ">Hamburg B-Day 2019 </IonSelectOption>
              <IonSelectOption value="Rotterdam Chaos 2019">Rotterdam Chaos 2019</IonSelectOption>
              <IonSelectOption value="Ghent 2019">Ghent 2019</IonSelectOption>
              <IonSelectOption value="Hamburg Summer 2019 ">Hamburg Summer 2019  </IonSelectOption>
              <IonSelectOption value="Aachen 2019">Aachen 2019</IonSelectOption>
              <IonSelectOption value="Mittweida 2019 ">Mittweida 2019 </IonSelectOption>
              <IonSelectOption value="Warsaw 2019  ">Warsaw 2019  </IonSelectOption>
              <IonSelectOption value="Prague 2x21 2019 ">Prague 2x21 2019 </IonSelectOption>
              <IonSelectOption value="London B-Day 2019 ">London B-Day 2019 </IonSelectOption>
              <IonSelectOption value="Budapest NYE 2019/2020  ">Budapest NYE 2019/2020  </IonSelectOption>
              <IonSelectOption value="Bali 2020  ">Bali 2020  </IonSelectOption>
              <IonSelectOption value="Hamburg B-Day 2020  ">Hamburg B-Day 2020  </IonSelectOption>
              <IonSelectOption value="Copenhagen 2020   ">Copenhagen 2020   </IonSelectOption>
            </IonSelect>
          </IonItem>


          <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>FiYESta: {fiyesta ?? '(none selected)'}</IonItem>

          <IonListHeader>
            <IonLabel>
              Which FiYESta are you planning on attending?
            </IonLabel>
          </IonListHeader>


          <IonItem>
            <IonLabel>FiYESta</IonLabel>
            <IonSelect value={fiyesta2}  multiple={true} onIonChange={e => setFiyesta(e.detail.value)}>
              <IonSelectOption value="NYC 2020  ">NYC 2020 </IonSelectOption>
              <IonSelectOption value="Vienna 2020  ">Vienna 2020  </IonSelectOption>
              <IonSelectOption value="Scotland Hiking 2020  ">Scotland Hiking 2020 </IonSelectOption>
              <IonSelectOption value="Belgrade 2020 ">Belgrade 2020 </IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>FiYESta: {fiyesta2 ?? '(none selected)'}</IonItem>


        </IonList>
    </div>
  );
};

export default ExploreContainer;
