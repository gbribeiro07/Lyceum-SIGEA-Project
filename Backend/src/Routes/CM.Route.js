const express = require("express");
const router = express.Router();
const ClassroomMembersController = require("../Controllers/CM.Controller");
const authMiddleware = require("../Middlewares/Auth.Middleware");

router.post(
  "/SalaDeAula/AdicionarMembro",
  authMiddleware,
  ClassroomMembersController.AddClassroomMember
);

router.get(
  "/SalaDeAula/ListarMembros/:idClassroom",
  authMiddleware,
  ClassroomMembersController.ListClassroomMembers
);

router.delete(
  "/SalaDeAula/RemoverMembro/:idClassroom/:idProfile",
  authMiddleware,
  ClassroomMembersController.DeleteClassroomMember
);

module.exports = router;
