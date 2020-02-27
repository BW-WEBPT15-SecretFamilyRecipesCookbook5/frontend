
//basic form
//recipe_image
//title
//description
//ingredients- list
//directions
//notes
//author
//button to submit/post
import React, {UseState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function AddRecipe() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Title"
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows="4"
          defaultValue="Enter Description"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Ingredients"
          multiline
          rows="4"
          defaultValue="Enter Ingredients"
          variant="outlined"
        />
      </div>
    
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Directions"
          multiline
          rows="4"
          defaultValue="Enter Directions"
          variant="outlined"
        />
      </div>
    </form>
  );
}
