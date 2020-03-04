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
        return [
            {
                title: "Stir Fry",
                author: "KK DeVuyst",
                description: "So yummy",
                ingredients: "",
                directions: "",
                category: "",
                notes: ""
            },
            {
                title: "Brownies",
                author: "Rory",
                description: "so sweet!",
                ingredients: "",
                directions: "",
                category: "",
                notes: ""
            }
        ];
        // axios
        //   .get('')
        //   .then(response => {
        //     // NEED TO PASS AN ARRAY AND NOT AN OBJECT
        //     setRecipes(response.data.results);
        //   })
        //   .catch(error => {
        //     console.error('Server Error', error);
        //   });
        }
        // getRecipes();
        setRecipes(getRecipes);
    }, []);
    
    console.log(recipes);
    return (
        <div><SearchBar/>
        <div className= "Dashboard">
            {recipes.map(recipe => (
                <Card>
                <CardBody>
                  <CardHeader>{recipe.title}</CardHeader>
                    <CardText>Author:{recipe.author}</CardText>
                    <CardText>Description:{recipe.description}</CardText>
                    <button>Edit</button>
                    <button>Delete</button>
                </CardBody>
              </Card>
            ))}
        </div>
        <Link to='/addrecipe'><StyledButton>Add Recipe</StyledButton></Link>
        </div>
    );

}

export default Dashboard;