import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const initial_items = [
  {
    id: '1',
    name: "Sushi",
    description: "Finest fish and vegies",
    price: 22.99,
  },
  {
    id: '2',
    name: "Schnitzel",
    description: "Finest fish and vegies",
    price: 16.50,
  },
  {
    id: '3',
    name: "Barbecue Burger",
    description: "Finest fish and vegies",
    price: 12.99,
  },
  {
    id: '4',
    name: "Green Bowl",
    description: "Finest fish and vegies",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const available_items = initial_items.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  // console.log([available_items]);
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{available_items}</ul>
        </Card>
      </section>
    );
}

export default AvailableMeals;