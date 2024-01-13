import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Myannonce: React.FC = () => {
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}

                >
                    <CardMedia
                        component="div"
                        sx={{
                            // 16:9
                            pt: '56.25%',
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }} >
                        <Typography gutterBottom variant="h5" component="h2">
                            Heading
                        </Typography>
                        <Typography>
                            This is a media card. You can use this section to describe the
                            content.
                        </Typography>
                    </CardContent>
                    <CardActions>

                        <Grid item xs={4} md={4}>
                            <Link to="/detailannonce">
                                <Button inverted color='green'>Detail</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Link to="/modifierannonce">
                                <Button inverted color='yellow'>Modifier</Button>
                            </Link>

                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Link to="/detailannonce">
                                <Button inverted color='pink'>Etat</Button>
                            </Link>

                        </Grid>

                    </CardActions>
                </Card>
            </Grid >
        </>

    );
}
export default Myannonce;

