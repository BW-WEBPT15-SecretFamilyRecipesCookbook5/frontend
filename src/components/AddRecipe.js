 
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"; 

const RecipeForm = ({ touched, errors, status }) => {
   
    const [recipe, setRecipe] = useState({});
  
    useEffect(() => {
      status && setRecipe(status);
     }, [status]);
  
    return (
      <div className="recipe-form">
        <Form>
            {/* <div className="image">
                <img src="img/recipe.jpg" alt="recipe"/>      
            </div> */}
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
                Directions:
                <Field type="text" name="directions" placeholder="directions" />
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
            <button>Save Recipe</button>
        </Form>
        {recipe.title && (
            <ul key={recipe.id}>
                <li>Title: {recipe.title}</li>
                <li>Author: {recipe.size}</li>
                <li>Description: {recipe.description}</li>
                <li>Ingredients: {recipe.ingredients}</li>
                <li>Directions: {recipe.directions}</li>
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
        directions: "",
        category: "",
        notes: ""
    }),
    validationSchema: yup.object().shape({
        species: yup
        .string()
        .required("This is the recipe field and it is required!")
    }),
    handleSubmit: (values, { resetForm, setStatus }) => {
      // console.log("Submitting!", formikBag)
      // POST body === {}
        axios
        // .post("https://reqres.in/api/users/", values)
        .then(response => {
            console.log(response);
            setStatus(response.data);
            resetForm();
        })
        .catch(err => console.log(err.response));
    }
    })(RecipeForm);

    // Photo by Becca Tapert on Unsplash

export default FormikRecipeForm;