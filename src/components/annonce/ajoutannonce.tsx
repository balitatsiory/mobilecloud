import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import styles from '../login/login.module.scss'
import classNames from 'classnames';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid, InputAdornment } from '@mui/material';

export interface AjoutannonceProps {
    className?: string;
}


const MarqueOptions = [
    { key: 'Mercedes-Benz', text: 'Mercedes-Benz', value: 'Mercedes-Benz' },
    { key: 'Ferrari', text: 'Ferrari', value: 'Ferrari' },
    { key: 'Audi', text: 'Audi', value: 'Audi' }
]

const ModeleOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]

const CarburantOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]
const VolantOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]
const CouleurOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]
const RegionOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]
const TransmissionOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]



const Ajoutannonce: React.FC<AjoutannonceProps> = ({ className }: AjoutannonceProps) => {
    const [marque, setmarque] = React.useState('');
    const [modele, setmodele] = React.useState('');
    const [carburant, setcarburant] = React.useState('');
    const [volant, setvolant] = React.useState('');
    const [couleur, setcouleur] = React.useState('');
    const [region, setregion] = React.useState('');
    const [transmission, settransmission] = React.useState('');


    const handleChangesetmarque = (event: SelectChangeEvent) => {
        setmarque(event.target.value);
    };
    const handleChangesetModele = (event: SelectChangeEvent) => {
        setmodele(event.target.value);
    };
    const handleChangesetcarburant = (event: SelectChangeEvent) => {
        setcarburant(event.target.value);
    };
    const handleChangesetvolant = (event: SelectChangeEvent) => {
        setvolant(event.target.value);
    };
    const handleChangesetcouleur = (event: SelectChangeEvent) => {
        setcouleur(event.target.value);
    };
    const handleChangesetregion = (event: SelectChangeEvent) => {
        setregion(event.target.value);
    };
    const handleChangesettransmission = (event: SelectChangeEvent) => {
        settransmission(event.target.value);
    };

    const [images, setImages] = React.useState<File[]>([]);

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setImages([...e.target.files]);
        }
    }


    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={classNames(styles.root, className)}>
                    <h1 className={styles.title}>Ajoutez votre nouvelle annonce : </h1>

                    <Grid container spacing={1} rowSpacing={0.1}>

                        <Grid item xs={12} md={12}>

                            <FormControl sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" >Marque</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={marque}
                                    onChange={handleChangesetmarque}
                                    autoWidth
                                    label="Marque"
                                >

                                    {MarqueOptions.map((option) => (
                                        <MenuItem key={option.key} value={option.value}>
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" >Modele</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={modele}
                                    onChange={handleChangesetModele}
                                    autoWidth
                                    label="Modele"
                                >

                                    {ModeleOptions.map((option) => (
                                        <MenuItem key={option.key} value={option.value}>
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} md={12}>
                            <TextField sx={{ m: 1, minWidth: 300 }}
                                required
                                id="outlined-required"
                                label="Matricule"
                                type='text'
                            />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <TextField sx={{ m: 1, minWidth: 300 }}
                                required
                                id="outlined-required"
                                label="Annee"
                                type='number'
                            />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <TextField sx={{ m: 1, minWidth: 300 }}
                                required
                                id="outlined-required"
                                label="kilometrage (km)"
                                type='number'
                            />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" >Carburant</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={carburant}
                                    onChange={handleChangesetcarburant}
                                    autoWidth
                                    label="Carburant"
                                >

                                    {CarburantOptions.map((option) => (
                                        <MenuItem key={option.key} value={option.value}>
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" >Volant</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={volant}
                                    onChange={handleChangesetvolant}
                                    autoWidth
                                    label="Volant"
                                >

                                    {VolantOptions.map((option) => (
                                        <MenuItem key={option.key} value={option.value}>
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" >Couleur</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={couleur}
                                    onChange={handleChangesetcouleur}
                                    autoWidth
                                    label="Couleur"
                                >

                                    {CouleurOptions.map((option) => (
                                        <MenuItem key={option.key} value={option.value}>
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" >Transmission</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={transmission}
                                    onChange={handleChangesettransmission}
                                    autoWidth
                                    label="Transmission"
                                >

                                    {TransmissionOptions.map((option) => (
                                        <MenuItem key={option.key} value={option.value}>
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" >Region</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={region}
                                    onChange={handleChangesetregion}
                                    autoWidth
                                    label="Region"
                                >

                                    {RegionOptions.map((option) => (
                                        <MenuItem key={option.key} value={option.value}>
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            {/* Description : */}
                            <TextField sx={{ m: 1, minWidth: 300 }}
                                id="outlined-textarea"
                                label="Description"
                                placeholder="Aucun devoirs , spacieuse ..."
                                multiline
                            />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            {/* Prix */}
                            <TextField sx={{ m: 1, minWidth: 300 }}
                                required
                                label="Prix"
                                id="outlined-start-adornment"
                                type='number'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <i>Ar</i>
                                    </InputAdornment>,
                                }}
                            />
                        </Grid>

                        {/* Photo */}
                        <Grid item xs={12} md={12}>
                            <input type="file" multiple accept="image/*" onChange={onImageChange} />

                        </Grid>



                    </Grid>
                </div>
            </IonContent>
        </IonPage>

    );
};

export default Ajoutannonce;







