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
   
    
    console.log(recipes);
    return (
        <div><SearchBar/>
        <Link to='/addrecipe'><StyledButton>Add Recipe</StyledButton></Link>
        </div>
    );

}

export default Dashboard;