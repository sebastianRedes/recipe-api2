import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { predefinedFoodDishes } from '../constants';
import ToogleButton from "@material-ui/lab/ToggleButton";
import FoodDish from './FoodDish';
const PredefinedFoodDishes = ({ getData, setHits }) => {

    const getFoods = title => {
        predefinedFoodDishes.map(foodDish => {
            foodDish.selected = FoodDish.title === title ? !foodDish.selected : false;
            return !foodDish.selected ? setHits()
                : getData(document.querySelector(`#${title}`).value.toLowerCase().trim());
        })
    };



    return (
        <Grid item xs={12}>
            <Paper className="paper">
                {
                    predefinedFoodDishes.map(FoodDish => {
                        const { title, selected } = FoodDish;
                        return (
                            <ToogleButton
                                key={title}
                                id={title}
                                value={title}
                                selected={selected}
                                onClick={() => getFoods(title)}
                            >
                                {title}
                            </ToogleButton>
                        );
                    })
                }
            </Paper>
        </Grid>
    );
};

export default PredefinedFoodDishes;
