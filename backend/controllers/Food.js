import Food from "../models/Food.js";
import fs from "fs";

const addFood = async (req, res) => {
  let img = `${req.file.filename}`;
  const food = new Food({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    img: img,
  });
  try {
    await food.save();
    res.status(200).json({
      message: "Food added successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
//food-list

const listFood = async (req, res) => {
  try {
    const foods = await Food.find({});
    res.status(200).json({
      message: "Food list",
      success: true,
      data: foods,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//remove food-item

const removeFood = async (req, res) => {
  try {
    const foodItem = await Food.findById(req.body.id);
    fs.unlink(`uploads/${foodItem.img}`, () => {});

    await Food.findByIdAndDelete(req.body.id);
    res.status(200).json({
      message: "Food removed successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
export { addFood, listFood, removeFood };
