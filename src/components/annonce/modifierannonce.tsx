import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonNote, IonPage, IonRefresher, IonRefresherContent, IonRow } from "@ionic/react";
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, FormControl, Grid, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, NativeSelect, Select, TextField, Typography } from "@mui/material";
import { bookmarkOutline, shareOutline } from "ionicons/icons";

import carburant from "../../assets/gasoil2.png"
import volant from "../../assets/volant2.png"
import transmission from "../../assets/transmission.png"
import color from "../../assets/color.png"
import region from "../../assets/region.png"

const Modifierannonce: React.FC = () => {

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const post = {
        id: 1,
        image: "https://source.unsplash.com/random?wallpapers",
        author: "(nom utilisateur)",
        date: "12-01-2024",
        title: "Audi RS4",
        content: "lorem Ips",
        authorImage: "https://source.unsplash.com/random?wallpapers"
    }


    return (
        <>
            <IonPage>
                <IonContent fullscreen>
                    <IonRefresher slot="fixed" onIonRefresh={refresh}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>

                    <IonCard>
                        <img src={post.image} alt="main post" className="post-image" />

                        <IonCardHeader>
                            <IonRow className="ion-align-items-center ion-justify-content-between">

                                <IonRow className="ion-align-items-center ion-justify-content-between">
                                    <IonCardSubtitle className="ion-no-margin ion-no-padding ion-margin-start">
                                        {post.author}
                                    </IonCardSubtitle>
                                </IonRow>
                                <IonNote>{post.date}</IonNote>
                            </IonRow>
                            <br />
                            <center><IonCardTitle className="post-title"><h3> {post.title}</h3></IonCardTitle></center>
                            <br />
                        </IonCardHeader>

                        <IonCardContent>
                            <center>
                                <Grid container spacing={1} rowSpacing={3}>

                                    <Grid item xs={12} md={12}>
                                        <TextField required id="outlined-basic" label="Matricule" variant="outlined" value="Matricule" />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField required id="outlined-basic" label="Annee" variant="outlined" value="220 ch" />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField required id="outlined-basic" label="Moteur" variant="outlined" value="220 ch" />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField required id="outlined-basic" label="Kilometrage" variant="outlined" value="220 ch" />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField required id="outlined-basic" label="Climatisation" variant="outlined" value="220 ch" />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField required id="outlined-basic" label="Moteur" variant="outlined" value="220 ch" />
                                    </Grid>

                                </Grid>
                            </center>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white   ' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={carburant} alt="Carburant" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Carburant
                                        </InputLabel>
                                        <NativeSelect
                                            defaultValue="Gasoil"
                                            inputProps={{
                                                name: 'carburant',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Ten</option>
                                            <option value="Gasoil">Gasoil</option>
                                            <option value={30}>Thirty</option>
                                        </NativeSelect>
                                    </FormControl>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={volant} alt="volant" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Carburant
                                        </InputLabel>
                                        <NativeSelect
                                            defaultValue="Gasoil"
                                            inputProps={{
                                                name: 'carburant',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Ten</option>
                                            <option value="Gasoil">Gasoil</option>
                                            <option value={30}>Thirty</option>
                                        </NativeSelect>
                                    </FormControl>                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={transmission} alt="transmission" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Carburant
                                        </InputLabel>
                                        <NativeSelect
                                            defaultValue="Gasoil"
                                            inputProps={{
                                                name: 'carburant',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Ten</option>
                                            <option value="Gasoil">Gasoil</option>
                                            <option value={30}>Thirty</option>
                                        </NativeSelect>
                                    </FormControl>                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={color} alt="transmission" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Carburant
                                        </InputLabel>
                                        <NativeSelect
                                            defaultValue="Gasoil"
                                            inputProps={{
                                                name: 'carburant',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Ten</option>
                                            <option value="Gasoil">Gasoil</option>
                                            <option value={30}>Thirty</option>
                                        </NativeSelect>
                                    </FormControl>                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={region} alt="region" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Carburant
                                        </InputLabel>
                                        <NativeSelect
                                            defaultValue="Gasoil"
                                            inputProps={{
                                                name: 'carburant',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Ten</option>
                                            <option value="Gasoil">Gasoil</option>
                                            <option value={30}>Thirty</option>
                                        </NativeSelect>
                                    </FormControl>
                                </ListItem>
                                <ListItem>
                                    {/* <Button variant="contained" color="success" style={{ width: '90%', height: '50px' }}>
                                        <strong> 154115 Ar </strong>
                                    </Button> */}
                                    <TextField required label="Prix (Ar)" color="secondary" focused value="154115" type="number" fullWidth />
                                </ListItem>

                            </List>

                        </IonCardContent>
                    </IonCard>

                </IonContent >
            </IonPage >

        </>
    );
}
export default Modifierannonce;