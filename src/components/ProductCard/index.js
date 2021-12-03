import React from "react";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Button from "../../commons/Button";
import "./style.css";

export default function ProductCard({ item: Product }) {
  return (
    <div className="Page_desc_height">
      <div className="card_item_desc">
        <div className="name_likes_part_item_desc">
          <div>
            <h1 className="name_item_desc"> {Product.name} </h1>
          </div>
          <div className="likes_item_desc">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite className="fav_icon_desc" />}
            />
            <h3> {Product.liked} </h3>
          </div>
        </div>

        {/* <div>
          {Product.ingredients.map((ingredient) => {
            return (
              <ul>
                <li>{ingredient}</li>
              </ul>
            );
          })}
        </div> */}

        <h3 className="desc_item_desc"> {Product.desc} </h3>
        <div className="btn_item_desc">
          <Button text="Add To Cart" type="submit" margin={50} />
        </div>
      </div>
      <img className="img_item_desc" src={Product.image} alt="imageItem" />
    </div>
  );
}
