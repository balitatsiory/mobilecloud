import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { green } from '@mui/material/colors';
import { color } from '@mui/system';
import { arrowForwardOutline } from 'ionicons/icons';
import styles from "./View.module.scss";

const Notification = () => {

	const polls = [
        {color:"green",envoyeur:"Jean",message:"azertyui",date:"2024-01-13"}
    ]

	return (
    	<IonPage>
      		<IonHeader>
        		<IonToolbar>
          			<IonButtons slot="start">
            			<IonMenuButton />
          			</IonButtons>
          			<IonTitle>Ionic Polls</IonTitle>
				</IonToolbar>
      		</IonHeader>

      		<IonContent fullscreen>
        		<IonHeader collapse="condense">
          			<IonToolbar>
            			<IonTitle size="large">Ionic Polls</IonTitle>
          			</IonToolbar>
        		</IonHeader>

				{ polls.map(poll => {

					return (

						<IonCard className={ `${ styles.pollQuestion } animate__animated animate__fadeIn` } style={{ border: green }} routerDirection="forward">

							<IonRow className="ion-align-items-center">
								<IonCol size="9">
									<IonCardHeader>
										<IonCardTitle>{ poll.envoyeur }</IonCardTitle>
										<IonCardSubtitle>{ poll.date } left</IonCardSubtitle>
										<p>{ poll.message }</p>
									</IonCardHeader>
								</IonCol>

								<IonCol size="3">
									<IonButton style={{ color:green }}>
										View
										<IonIcon icon={ arrowForwardOutline } />
									</IonButton>
								</IonCol>
							</IonRow>
						</IonCard>
					);
				})}
      		</IonContent>

			<IonFooter className="ion-padding-bottom">
				<IonRow className="ion-padding-start ion-padding-end ion-padding-bottom ion-padding-top">
					<IonCol size="12">
						<IonButton expand="block" routerLink="/page/add">
							Add new poll
						</IonButton>
					</IonCol>
				</IonRow>
			</IonFooter>
    	</IonPage>
	);
};

export default Notification;