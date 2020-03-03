import React, {useState, useEffect} from 'react';
import axios from "axios";
// import { Card } from '@material-ui/core';
import { withFormik, Form, Field } from "formik";
import SearchBar from "./SearchBar"
import {Route, Link} from 'react-router-dom';
import AddRecipe from "./AddRecipe"

function Dashboard() {
    return (
        <div><SearchBar/>
        <div className= "Dashboard">
            <Form>
                <label>
                     Mac and Cheese
                </label>
                <br></br>
                <label>
                    All the cheese!
                </label>
            </Form> 
        </div>
        <Link to='/addrecipe'>Add Recipe</Link>
        </div>
    );
}

export default Dashboard;