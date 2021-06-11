import React, { useCallback, useState } from 'react'
import { makeStyles, TextField, Container, Box, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

export const Register = () => {

    // style start 
    const useStyles = makeStyles((theme) => ({
        root: {
            color: 'red'
        }
    }));
    const classes = useStyles();
    // style end 

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const [confirmPass, setConfirmPass] = useState('')


    const handleRegisterChange = useCallback(
        (evt) => {
            const { name, value } = evt.target
            setFormState((prevState) => ({
                ...prevState,
                [name]: value
            }))
        },
        [setFormState],
    )

    const handleRegisterSubmit = (evt) => {
        evt.preventDefault()
        if (formState.email && formState.password && confirmPass) {
        } else {
            alert("Please fill the form ")
        }
    }
    return (
        <div>
            <Container >
                <Box display="flex" justifyContent="center">
                    <Box width="50%" mt={3} >
                        <Typography variant="h4">
                            Regitser
                        </Typography>
                        <form onSubmit={handleRegisterSubmit} className={classes.root} noValidate autoComplete="off">

                            <Box mt={4}>
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    value={formState.email}
                                    fullWidth
                                    onChange={handleRegisterChange}
                                />
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    id="password"
                                    name="password"
                                    label="Password"
                                    fullWidth
                                    variant="outlined"
                                    value={formState.password}
                                    onChange={handleRegisterChange} />
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    id="confirmPass"
                                    label="Confirm Password "
                                    variant="outlined"
                                    fullWidth
                                    name="confirmPass"
                                    value={confirmPass}
                                    onChange={(evt) => setConfirmPass(evt.target.value)}
                                />
                            </Box>
                            <Box mt={4} >
                                <Button fullWidth variant="contained" color="primary" type="submit">
                                    Register
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>

            </Container>
        </div>
    )
}
