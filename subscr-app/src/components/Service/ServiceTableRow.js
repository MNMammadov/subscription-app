import React from 'react'
import { Button, TableCell, TableRow } from '@material-ui/core'
export const ServiceTableRow = ({ handleClickOpen, buttonStyle }) => {
    let count = 0;

    return (
        <TableRow >
            <TableCell> <b>{count += 1}</b></TableCell>
            <TableCell> Service Name</TableCell>
            <TableCell>
                <Button className={buttonStyle} variant="contained" type="button" onClick={handleClickOpen}>
                    <h4>Subscribe</h4>
                </Button>
            </TableCell>
        </TableRow>
    )
}

