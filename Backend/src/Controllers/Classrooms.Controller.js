const Classrooms = require("../Models/Classrooms.Model");
require("dotenv").config();

const ClassroomsController = {
  // Criar sala de aula
  async RegisterClassroom(req, res) {
    const { nameClassroom } = req.body;

    // Garante que o usuário está autenticado
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Usuário não autenticado",
      });
    }

    if (!nameClassroom?.trim()) {
      return res.status(400).json({
        success: false,
        message: "O nome da sala de aula é obrigatório.",
      });
    }

    try {
      const newClassroom = await Classrooms.create({
        nameClassroom,
        idUser: req.user.id,
        idProfile: req.body.idProfile,
      });

      return res.status(201).json({
        success: true,
        message: "Sala de aula cadastrada com sucesso!",
        data: newClassroom,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Erro ao cadastrar o sala de aula.",
        error: err.message,
      });
    }
  },

  //listar perfil
  async ListClassroom(req, res) {
    try {
      const { orderBy = "dateCreated", order = "ASC" } = req.query;

      const validFields = ["nameProfile", "dateCreated"];
      const validOrders = ["ASC", "DESC"];

      if (
        !validFields.includes(orderBy) ||
        !validOrders.includes(order.toUpperCase())
      ) {
        return res.status(400).json({
          success: false,
          message: "Parâmetros de ordenação inválidos.",
        });
      }

      const allClassrooms = await Classrooms.findAll({
        where: { idClassroom: req.user.id },
        attributes: ["idClassroom", "nameClassroom"],
        order: [[orderBy, order.toUpperCase()]],
      });

      return res.json({ success: true, data: allClassrooms });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar salas de aula.",
        error: err.message,
      });
    }
  },

  //deletar sala de aula
  async DeleteClassroom(req, res) {
    const { id } = req.params;

    try {
      const classroom = await Classrooms.findOne({
        where: { idClassroom: id },
      });

      // Verifica se a sala de aula existe e se pertence ao usuário logado
      if (!classroom || classroom.idUser !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Ação não permitida.",
        });
      }

      await Classrooms.destroy({ where: { idClassroom: id } });

      res
        .status(200)
        .json({ success: true, message: "Perfil deletado com sucesso." });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Erro ao deletar perfil." });
    }
  },

  // atualizar perfil
  async UpdateClassroom(req, res) {
    const { id } = req.params;
    const { nameClassroom } = req.body;

    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Usuário não autenticado",
      });
    }

    if (nameClassroom !== undefined && !nameClassroom.trim()) {
      return res.status(400).json({
        success: false,
        message: "O nome da sala de aula não pode ser vazio.",
      });
    }

    try {
      const classroom = await Classrooms.findOne({
        where: { idClassroom: id },
      });

      if (!classroom || classroom.idUser !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Ação não permitida ou sala de aula inexistente.",
        });
      }

      // Atualiza os campos apenas se foram enviados
      profile.nameClassroom = nameClassroom ?? classroom.nameClassroom;

      await classroom.save();

      return res.status(200).json({
        success: true,
        message: "Sala de aula atualizada com sucesso!",
        data: classroom,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Erro ao atualizar a sala de aula.",
        error: err.message,
      });
    }
  },
};

module.exports = ClassroomsController;
