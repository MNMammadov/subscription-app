import React from 'react'
import { ServicesTable } from './ServicesTable';

export const Services = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log("clicked");

    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <ServicesTable handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />

        </div>
    )
}
