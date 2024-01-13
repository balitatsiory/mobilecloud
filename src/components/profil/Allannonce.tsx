import { Grid } from "@mui/material";
import { Container } from "semantic-ui-react";
import Myannonce from "../annonce/Myannonce";
import './profil.css'

const Allannonce: React.FC = () => {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (


        <Grid container spacing={4}>
            {cards.map((card) => (
                <Myannonce></Myannonce>
            ))}
        </Grid>


    );

};
export default Allannonce;



