import { Container, Dialog, Typography, Box, DialogContent, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { ServiceTableRow } from './ServiceTableRow'
export const ServicesTable = ({ handleClickOpen, open, handleClose }) => {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        buttonStyle: {
            border: '1px solid #3eadcf',
            borderRadius: 3,
            backgroundColor: '#3eadcf',
            color: 'white',
            height: 48,
            padding: '0 30px',
            '&:hover': {
                backgroundColor: 'white',
                color: '#3eadcf',
                transition: '0.8s'
            },
        },
    });

    const classes = useStyles();

    return (
        <>
            <div>
                <Box padding={5} >
                    <Box m={4}>
                        <Typography variant="h4" >
                            Services
                        </Typography>
                    </Box>
                    <Container>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell width="20%"><b>No</b></TableCell>
                                        <TableCell width="60%" ><b>Service Name </b> </TableCell>
                                        <TableCell ><b>Action</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <ServiceTableRow buttonStyle={classes.buttonStyle} handleClickOpen={handleClickOpen}>
                                    </ServiceTableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Container>

                </Box>


            </div>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <Box padding={10}>
                            <div className=" p-5 dummy-positioning d-flex" >

                                <div className="success-icon">
                                    <div className="success-icon__tip"></div>
                                    <div className="success-icon__long"></div>
                                </div>
                            </div>
                            <Box mt={5}>
                                <Typography variant="h3"  >
                                    Subscribed
                                </Typography>
                            </Box>
                        </Box>

                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}
