import React from "react";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Button from "../../commons/Button";
import "./style.css";

export default function ProductCard({ item: theProduct }) {
  return (
    <div className="Page_desc_height">
      <div className="card_item_desc">
        <div className="name_likes_part_item_desc">
          <div>
            <h1 className="name_item_desc"> {theProduct.name} </h1>
          </div>
          <div className="likes_item_desc">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite className="fav_icon_desc" />}
            />
            <h3> {theProduct.liked} </h3>
          </div>
        </div>

        {/* <div>
          {theProduct.ingredients.map((ingredient) => (
            <li kry={ingredient}> {ingredient} </li>
          ))}
        </div> */}

        <h3 className="desc_item_desc"> {theProduct.desc} </h3>
        <div className="btn_item_desc">
          <Button text="Add To Cart" type="submit" margin={20} />
        </div>
      </div>
      <img className="img_item_desc" src={theProduct.image} alt="imageItem" />
    </div>
  );
}
