import React, {useState, useEffect} from 'react';
import axios from "axios";
// import { Card } from '@material-ui/core';
import { withFormik, Form, Field } from "formik";
import SearchBar from "./SearchBar"
import {Route, Link} from 'react-router-dom';
import AddRecipe from "./AddRecipe"
import { StyledButton } from '../utils/styles';
import { Card, CardHeader, CardBody, CardSubtitle, CardText } from "reactstrap";


const Dashboard = props => {

    //for when api is ready
    const [recipes, setRecipes] = useState ([])
  
    useEffect(() => {
      // 2 TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      const getRecipes = () => {
        // return [
            // {
            //     title: "Stir Fry",
            //     author: " KK DeVuyst",
            //     description: " So yummy",
            //     ingredients: "",
            //     directions: "",
            //     category: "",
            //     notes: ""
            // },
            // {
            //     title: "Brownies",
            //     author: " Rory",
            //     description: " So sweet!",
            //     ingredients: "",
            //     directions: "",
            //     category: "",
            //     notes: ""
            // }
        // ];
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
    
    console.log(recipes);
    return (
        <div><SearchBar/>
        <div className= "dashboard">
            {recipes.map(recipe => (
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
        </div>
        <Link to='/addrecipe'><StyledButton>Add Recipe</StyledButton></Link>
        </div>
    );

}

export default Dashboard;