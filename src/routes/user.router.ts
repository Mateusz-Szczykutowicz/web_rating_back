import express from 'express';
import UserController from '../controllers/user.controller';
const UserRouter = express.Router();

UserRouter.get("/", UserController.getAllUsers)

UserRouter.get("/:id", UserController.getOneUser);

export default UserRouter;