import { updatePrices } from "../controllers/products.controller";
import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware";
import multer from 'multer'
import { csvFileSchema } from "../schemas/csvFile.schema";
import { updateDataSchema } from "../schemas/updateData.schema";

const productsRouter = Router()
const multerConfig = multer()

productsRouter.post('/products', multerConfig.single('file'), validateSchema(csvFileSchema, updateDataSchema), updatePrices)

export default productsRouter