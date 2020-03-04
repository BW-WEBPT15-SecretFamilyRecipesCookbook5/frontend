import React, { createContext } from 'react';

const RecipeContext = createContext({
  recipes: [],
  //camel case
  addRecipe: () => {},
});

export class RecipeProvider extends React.Component {
  addRecipe = newRecipe => {
    this.setState({ recipes.push(newRecipe) });
  };

  state = {
    recipes: [],
    addRecipe: this.addRecipe,
  };

  render() {
    return (
      <RecipeContext.Provider value={this.state}>
        {this.props.children}
      </RecipeContext.Provider>
    );
  }
}

export const RecipeConsumer = RecipeContext.Consumer;