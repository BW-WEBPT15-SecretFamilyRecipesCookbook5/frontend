//search for recipe by title
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState("");

    const [recipes, setRecipes] = useState ([])
  
    useEffect(() => {
      // 2 TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      const getRecipes = () => {
        axios
          .get('https://safe-peak-28764.herokuapp.com/api/users/3/recipes')
          .then(response => {
                console.log(response.data);
            // NEED TO PASS AN ARRAY AND NOT AN OBJECT
            setRecipes(response.data.results);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
        }
        getRecipes();
        // setRecipes(getRecipes);
    }, []);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    let results = recipes;
    if(searchTerm) {
        results = recipes.filter(poke =>
            poke.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

return (
    <div className= "SearchBar">
        <input
            type="text"
            placeholder= "Search"
            value= {searchTerm}
            onChange={handleChange} 
        />
        <ul>
            {results.map(recipe => (
                <Card style= {{ width: '18rem'}}>
                <CardBody className= "cardBody">
                <CardHeader>{recipe.title}</CardHeader>
                    <CardText>Author:{recipe.author}</CardText>
                    <CardText>Instructions:{recipe.instructions}</CardText>
                    <StyledButton className='edit-button' type='submit' varient='outlined'>Edit</StyledButton>
                    <StyledButton className='delete-button' type='submit' varient='outlined'>Delete</StyledButton>
                </CardBody>
              </Card>
            ))}
        </ul>
    </div>
    );
}

export default SearchBar;

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Popper from '@material-ui/core/Popper';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import { Link, ClickAwayListener } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: 120,
//       '&:focus': {
//         width: 200,
//       },
//     },
//   },
// }));


  //material UI if we can figure out
// const handleClick = e => {e.preventDefault()
//     browserHistory.push('/login')};

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           {/* <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//             > */}
            
//             {/* <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//             {({ TransitionProps, placement }) => (
//               <Grow
//                 {...TransitionProps}
//                 style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//                 <Paper>
//                   <ClickAwayListener onClickAway={handleClose}>
//                     <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
//                       <MenuItem onClick={handleClose}>Profile</MenuItem>
//                       <MenuItem onClick={handleClose}>My account</MenuItem>
//                       <MenuItem onClick={handleClose}>Logout</MenuItem>
//                     </MenuList>
//                   </ClickAwayListener>
//                 </Paper>
//               </Grow>
//             )}
//           </Popper> */}
//           {/* </IconButton>
//             <MenuIcon /> */}
    
//           <Typography className={classes.title} variant="h6" noWrap>
//             Secret Recipes
//           </Typography>
//           < Typography className={classes.login} variant="h6" noWrap>
//               <Link to = "/login">Login</Link>
//          </Typography>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }