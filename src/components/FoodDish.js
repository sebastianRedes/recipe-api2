import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const FoodDish = ({ label, image, calories, ingredients }) => (
    <Grid item xs={12} sm={6} md={4}>
        <Paper className="paper">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <h3>{`${Math.trunc(calories)} calories `}</h3>
            <h4>Ingredientes</h4>
            <ul>
                {
                    ingredients.map((ingredient, index) => {
                        const { text } = ingredient;
                        return (
                            <li key={index}>
                                {text}
                            </li>
                        )
                    })
                }
            </ul>
        </Paper>
    </Grid>
);

export default FoodDish;