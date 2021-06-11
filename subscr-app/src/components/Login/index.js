import React, { useCallback, useState } from 'react'
import { makeStyles, TextField, Container, Box, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export const Login = () => {
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

    const handleLoginSubmit = (evt) => {
        evt.preventDefault()
        if (formState.email && formState.password) {
            console.log(formState);
        }
        else {
            alert("Please fill the form ")
        }
    }
    return (
        <div>
            <Container >
                <Box display="flex" justifyContent="center">
                    <Box width="50%" mt={3} >
                        <Typography variant="h4">
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit} className={classes.root} noValidate autoComplete="off">

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
                            <Box mt={4} >
                                <Button fullWidth variant="contained" color="primary" type="submit">
                                    Register
                                </Button>
                            </Box>
                            <Box mt={4}>
                                <Typography variant="p" color="secondary">
                                    Haven't registered yet? Then <Link to="/register">Register</Link>
                                </Typography>
                            </Box>
                        </form>
                    </Box>
                </Box>

            </Container>
        </div >
    )
}
