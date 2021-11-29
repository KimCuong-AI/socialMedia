import { Alert, Button, Container, Fab, FormControl, FormControlLabel, FormLabel, Menu, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100vw',
            height: '100vh',
        },
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3)
    },

}));
const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [openAlert,setOpenAlert]=useState(false);
    const handleClick = () => {
        setOpenAlert(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      }; 
    
    return (
        <>
            <Tooltip title='Add' aria-label='add' onClick={() => {
                setOpen(true)
            }}>
                <Fab color='primary' className={classes.fab}>
                    <AddIcon />

                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete='off'>
                        <div className={classes.item}>
                            <TextField id='standard-basic' label='title' variant='standard' size='small' style={{ width: '100%' }} />
                        </div>
                        <div className={classes.item}>
                            <TextField id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                defaultValue="Tell your story..."
                                variant='outlined'
                                size='small'
                                style={{ width: '100%' }} />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="Visibility" value="Public" variant='standard'>
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Who can comment?</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel  value="female" className={classes.radio} control={<Radio size='small' />} label="Female" />
                                    <FormControlLabel value="male" className={classes.radio} control={<Radio size='small' />} label="Male" />
                                    <FormControlLabel value="other" className={classes.radio} control={<Radio size='small' />} label="Other" />
                                    <FormControlLabel disabled value="other" className={classes.radio} control={<Radio size='small' />} label="Public" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className={classes.item}>
                            <Button variant='contained' color='primary' style={{ marginRight: '20px' }}  onClick={handleClick}>Create</Button>
                            <Button variant='contained' color='error' onClick={() => {
                                setOpen(false)
                            }}>Cancel</Button>
                        </div>
                        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                This is a success message!
                            </Alert>
                        </Snackbar>
                    </form>
                </Container>
            </Modal>
        </>


    );
}

export default Add;
