import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect('mongodb+srv://sahum3378:gw6geYHsINJn1g0R@cluster0.sbsbx.mongodb.net/resturent')
    .then(() => {
      console.log("Databases is Connected");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
