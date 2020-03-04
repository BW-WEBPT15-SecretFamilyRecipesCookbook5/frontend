import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const StyledButton = withStyles({
    root: {
        margin: '10px',
        height: '50px',
        background: 'white',
        '&:hover': {
            background: '#7389AE'
        }
    }
})(Button);

export const AddButton = withStyles({
    root: {
        margin: '10px',
        height: '50px',
        background: 'white',
        '&:hover': {
            background: '#7389AE'
        }
    }
})(Button);