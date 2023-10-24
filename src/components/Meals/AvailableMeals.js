import Meal from "./Meals";
import classes from './Meals.module.css';

const initial_items = [
  {
    id: 1,
    title: "Sushi",
    description: "Finest fish and vegies",
    amount: 22.99,
  },
  {
    id: 2,
    title: "Schnitzel",
    description: "Finest fish and vegies",
    amount: 16.50,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    description: "Finest fish and vegies",
    amount: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "Finest fish and vegies",
    amount: 18.99,
  },
];

const Meals = () => {
  const available_items = initial_items.map((meal) => (
    <Meal
      key={meal.id}
      id={meal.id}
      title={meal.title}
      description={meal.description}
      amount={meal.amount}
    />
  ));
    
    return (
        <section className={classes.meals}>
          <ul>{available_items}</ul>
        </section>
    )
}

export default Meals;