

import { body } from "express-validator";
const validationSchema = [

  body("Name").escape(),
  body("Description").escape(),

  body("Name").isString(),
  body("Price").isNumeric(),
  body("Description").isString().isLength({ min: 5, max: 100 }),
];

export default validationSchema;
