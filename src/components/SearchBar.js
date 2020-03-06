//search for recipe by title
import {BrowserRouter} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from "axios";
// import { Card } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
import { StyledButton } from '../utils/styles';
import { Card, CardHeader, CardBody, CardSubtitle, CardText } from "reactstrap";

function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState("");

    const [recipes, setRecipes] = useState ([])
  
    useEffect(() => {
      const getRecipes = () => {
        axios
          .get('https://safe-peak-28764.herokuapp.com/api/users/2/recipes')
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

