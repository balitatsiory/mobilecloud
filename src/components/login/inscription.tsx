import React from 'react';
import classNames from 'classnames';
import { Button, Icon, Input } from 'semantic-ui-react';
import styles from './login.module.scss';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Grid, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';

export interface InscriptionProps {
    className?: string;
}

const Inscription: React.FC<InscriptionProps> = ({ className }: InscriptionProps) => {
    return (
        <IonPage>
            <IonContent fullscreen>

                <div className={classNames(styles.root, className)}>
                    <h1 className={styles.title}>Inscription</h1>

                    <form action='' method='post'>
                        <Grid container spacing={1} rowSpacing={3}>

                            <Grid item xs={12} md={12}>

                                <label>Nom :</label><br />

                                <Input iconPosition='left' required>
                                    <Icon name='user' />
                                    <input type='text' />
                                </Input><br />
                            </Grid>


                            <Grid item xs={12} md={12}>
                                <label>Prenoms :</label><br />

                                <Input iconPosition='left' required>
                                    <Icon name='user' />
                                    <input type='text' />
                                </Input><br />
                            </Grid>


                            <Grid item xs={12} md={12}>


                                <label>Date de naissance :</label><br />

                                <Input iconPosition='left' required>
                                    <Icon name='user' />
                                    <input type='date' />
                                </Input><br />

                            </Grid>


                            <Grid item xs={12} md={12}>


                                <label>Telephone :</label><br />

                                <Input iconPosition='left' required>
                                    <Icon name='phone' />
                                    <input type='text' />
                                </Input><br />

                            </Grid>


                            <Grid item xs={12} md={12}>


                                <label>Email :</label><br />

                                <Input iconPosition='left' required>
                                    <Icon name='at' />
                                    <input type='mail' placeholder='example@gmail.com' />
                                </Input><br />

                            </Grid>
                            <Grid item xs={12} md={12}>

                                <label>Mot de passe :</label><br />
                                <Input
                                    label={{ icon: 'asterisk' }}
                                    labelPosition='left corner'
                                    type='password'
                                    required
                                /> <br />
                            </Grid>


                            <Grid item xs={12} md={12}>

                                <label>Verification de mot de passe :</label><br />
                                <Input
                                    label={{ icon: 'asterisk' }}
                                    labelPosition='left corner'
                                    type='password'
                                    required
                                /> <br />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <Link to="/profil">
                                    <Button inverted color='blue' type='submit'>
                                        S'inscrire
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </IonContent>

        </IonPage >

    );
}

export default Inscription;
