import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, description, date, image } = props;
  return (
    <div className="w-1/4">
      <div className="cardd">
        <div className="card__image">
          <img src={image ? image : "/images/coach.jpg"} alt="blog" />
        </div>
        <div className="card__content">
          <p className="date font-light text-sm">{date}</p>
          <p className="card__title">{title}</p>
          <p
            className="card__text"
            dangerouslySetInnerHTML={{
              __html: description?.substr(0, 70) + "...",
            }}
          ></p>
          <Link to={"/blog/" + id} className="card__button">
            Read More
          </Link>
        </div>
      </div>
      {/* <div className="card w-96 glass">
        <figure>
          <img src="/images/coach.jpg" alt="car!" />
        </figure>
        <div className="card-body">
          <p className="date">1 Dec, 2022</p>
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BlogCard;
