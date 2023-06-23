import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

function CategoryCard({ card }) {
  return (
    <Link className='link' to="/gigs?category=design">
      <div className="categoryCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}
export default CategoryCard;