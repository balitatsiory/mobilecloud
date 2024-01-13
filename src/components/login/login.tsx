import classNames from 'classnames';
import styles from './login.module.scss';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// index.tsx or index.js
import 'semantic-ui-css/semantic.min.css';

import { Button, Icon, Input } from 'semantic-ui-react';


import { useState } from 'react';

import TextField from '@mui/material/TextField';

export interface LoginProps {
  className?: string;
}

export const Login = ({ className }: LoginProps) => {


  const [showPassword, setShowPassword] = useState(false);

  return (
    // <div className={classNames(styles.root, className)}>
    //         <form>
    //             <label>Email :</label><br />

    //             <Input iconPosition='left'>
    //                 <Icon name='at' />
    //                 <input type='mail' placeholder='example@gmail.com'/>
    //             </Input><br />

    //                 <label>Mot de passe :</label><br />
    //                 <Input
    //                 label={{ icon: 'asterisk' }}
    //                 labelPosition='left corner'
    //                 type='password'
    //                 /> <br />

    //             <Button inverted color='green' type="submit" >
    //                 Se connecter
    //             </Button>

    //             {/* <input type="submit" value="Submit" /> */}

    //             <br />
    //             <Button primary>
    //                 <IonIcon aria-hidden="true" icon={person} /> S'inscrire
    //             </Button>
    //         </form>
    // </div>

    <>

      <div className={classNames(styles.root, className)}>

        <form action="/pageverification" method="post">

          <Grid container spacing={1} rowSpacing={0.1}>
            <Grid item xs={12} md={12}>
              <TextField sx={{ m: 1, minWidth: 300 }}
                required
                id="outlined-required"
                label="Email address"
                type='email'

              />
            </Grid>


            <Grid item xs={12} md={12}>
              <TextField sx={{ m: 1, minWidth: 300 }}
                required
                id="outlined-required"
                label="Mot de passe"
                type='password'
              />
            </Grid>


            <Grid item xs={12} md={12}>

              <Button inverted color='green' type="submit">
                Se connecter
              </Button>

            </Grid>

            <Grid item xs={12} md={12}>
              <Link to="/inscription">

                <Button inverted color='blue'>
                  S'inscrire
                </Button>
              </Link>

            </Grid>

          </Grid>

        </form>
      </div >
    </>
  );

};

