 
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"; 
import { AddButton } from '../utils/styles'
import { StyledButton } from '../utils/styles';
// import { BrowserHistory } from 'react-router-dom';

const RecipeForm = ({ touched, errors, status, history }) => {
   
    const [recipe, setRecipe] = useState({});
  
    useEffect(() => {
      status && setRecipe(status);
     }, [status]);
  
    return (
      <div className="recipe-form">
        <Form>
            <label>
                Title:
                <Field type="text" name="title" placeholder="title" />
            </label>
            <label>
                Author:
                <Field type="text" name="author" placeholder="author" />
            </label>
            <label>
                Description:
                <Field type="text" name="description" placeholder="description" />
                {touched.description && errors.description && (
                <p className="errors">{errors.description}</p>
                )}
            </label>
            <label>
                Ingredients:
                <Field type="text" name="ingredients" placeholder="ingredients" />
            </label>
            <label>
                Instructions:
                <Field type="text" name="instructions" placeholder="instructions" />
            </label>
            <label>
                Category:
                <Field component="select" className="category-select" name="category">
                <option>Choose an Option</option>
                <option value="appetizer">Appetizer</option>
                <option value="entree">Entree</option>
                <option value="dessert">Dessert</option>
                <option value="side">Side</option>
                </Field>
            </label>
            <br></br>
            <label>
                Notes:
                <Field as="textarea" type="text" name="notes" placeholder="Notes" />
            </label>
            <StyledButton className='saveRecipe-button' type='submit' varient='outlined'>Save Recipe</StyledButton>
        </Form>
        {recipe.title && (
            <ul key={recipe.id}>
                <li>Title: {recipe.title}</li>
                <li>Author: {recipe.size}</li>
                <li>Description: {recipe.description}</li>
                <li>Ingredients: {recipe.ingredients}</li>
                <li>Instructions: {recipe.instructions}</li>
                <li>Category: {recipe.category}</li>
                <li>Notes: {recipe.notes}</li>
            </ul>
        )}
        </div>
    );
    };
const FormikRecipeForm = withFormik({
    mapPropsToValues: props => ({
        title: props.title || "",
        author: "",
        description: "",
        ingredients: "",
        instructions: "",
        category: "",
        notes: ""
    }),
    validationSchema: yup.object().shape({
        species: yup
        .string()
        .required("This is the recipe field and it is required!")
    }),
    handleSubmit: (values, { handleReset, setStatus }) => {
      // console.log("Submitting!", formikBag)
      // POST body === {}
        axios
        // .post("https://safe-peak-28764.herokuapp.com/api/users/:user_id/recipes", values)
        .then(response => {
            console.log(response);
            setStatus(response.data);
            //navigate to dashboard
            // history.push('/dashboard')
            // resetForm();
        })
        .catch(err => console.log(err.response));
    }
    })(RecipeForm);


export default FormikRecipeForm;