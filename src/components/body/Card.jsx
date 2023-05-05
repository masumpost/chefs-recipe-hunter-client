import React from "react";
import { Link } from "react-router-dom";

const Card = ({ chef }) => {
  const { id, picture, name, years_of_experience, number_of_recipes, likes } =
    chef;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-60 w-full"
          src={picture}
          alt="picture"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience : {years_of_experience}</p>
        <p>Number of recipes : {number_of_recipes}</p>
        <p>Likes : {likes}</p>
        <div className="card-actions justify-end">
          <Link to='/vdetails'>
              <button className="btn btn-primary">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
