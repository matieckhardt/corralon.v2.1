import { FormControl, Typography } from '@mui/material';
import { ErrorMessage, useField } from 'formik';
import './styles.css'

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}


export const CustomSelect = ( { label, ...props }: Props ) => {

    const [ field ] = useField(props)

    return (
        <FormControl fullWidth>
            <Typography>{ label }</Typography>
            <select className='select' { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" />
        </FormControl>
    )
}
