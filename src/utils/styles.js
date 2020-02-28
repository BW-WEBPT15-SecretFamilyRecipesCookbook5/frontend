import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const StyledButton = withStyles({
    root: {
        margin: '10px',
        height: '50px',
        '&:hover': {
            background: 'rgb(15, 200, 170)'
        }
    }
})(Button);