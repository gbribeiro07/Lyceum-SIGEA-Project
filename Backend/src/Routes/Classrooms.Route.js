const express = require("express");
const router = express.Router();
const ClassroomsController = require("../Controllers/Classrooms.Controller");
const authMiddleware = require("../Middlewares/Auth.Middleware");

router.post(
  "/Cadastro/SalaDeAula",
  authMiddleware,
  ClassroomsController.RegisterClassroom
);

router.get("/Lista/SalaDeAula", ClassroomsController.ListClassroom);

router.put(
  "/Atualizar/SalaDeAula/:id",
  authMiddleware,
  ClassroomsController.UpdateClassroom
);

router.delete(
  "/Deletar/SalaDeAula/:id",
  authMiddleware,
  ClassroomsController.DeleteClassroom
);

module.exports = router;
