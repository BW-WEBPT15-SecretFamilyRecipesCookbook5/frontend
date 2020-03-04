import React, {useState, useEffect} from 'react';
import axios from "axios";
// import { Card } from '@material-ui/core';
import { withFormik, Form, Field } from "formik";
import SearchBar from "./SearchBar"
import {Route, Link} from 'react-router-dom';
import AddRecipe from "./AddRecipe"
import { StyledButton } from '../utils/styles';

function Dashboard() {
    return (
        <div><SearchBar/>
        <div className= "Dashboard">
            <div className="recipe-card">
                <h2>Mac and Cheese</h2>
                <p>ALL the yummy cheese!!</p>
            </div>
        </div>
        <Link to='/addrecipe'><StyledButton>Add Recipe</StyledButton></Link>
        </div>
    );
}

export default Dashboard;