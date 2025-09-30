const Profiles = require("../Models/Profiles.Model");
require("dotenv").config();

const ClassroomMembersController = {
  // Adicionar membro à sala de aula
  async AddClassroomMember(req, res) {
    const { idClassroom, idProfile } = req.body;

    if (!idClassroom || !idProfile) {
      return res.status(400).json({
        success: false,
        message: "Os campos idClassroom e idProfile são obrigatórios.",
      });
    }

    try {
      const profile = await Profiles.findOne({
        where: { idProfile: idProfile, idUser: req.user.id },
        attributes: ["status"],
      });

      if (!profile) {
        return res.status(404).json({
          success: false,
          message:
            "Perfil não encontrado ou você não tem permissão para adicioná-lo.",
        });
      }

      const role = profile.status; // Define a role na turma com base no status do perfil

      const validRoles = ["Professor", "Aluno"];
      if (!validRoles.includes(role)) {
        return res.status(400).json({
          success: false,
          message: `Status de perfil (${role}) inválido para ser adicionado como membro. Status aceitos: Professor, Aluno.`,
        });
      }

      const existingMember = await ClassroomMembers.findOne({
        where: { idClassroom, idProfile },
      });

      if (existingMember) {
        return res.status(409).json({
          success: false,
          message: "Este perfil já é membro desta sala de aula.",
        });
      }

      const newMember = await ClassroomMembers.create({
        idClassroom,
        idProfile,
        role, // 'role' é definido pelo 'status' do perfil
      });

      return res.status(201).json({
        success: true,
        message: `Perfil adicionado como ${role} à sala de aula com sucesso!`,
        data: newMember,
      });
    } catch (err) {
      // Erro de FK (Foreign Key) ou outro erro de DB/servidor
      return res.status(500).json({
        success: false,
        message: "Erro ao adicionar membro à sala de aula. Verifique as IDs.",
        error: err.message,
      });
    }
  },

  // Listar membros da sala de aula
  async ListClassroomMembers(req, res) {
    const { idClassroom } = req.params;

    if (!idClassroom) {
      return res.status(400).json({
        success: false,
        message: "O idClassroom é obrigatório.",
      });
    }

    try {
      const members = await ClassroomMembers.findAll({
        where: { idClassroom },
        include: [
          {
            model: Profiles,
            attributes: ["idProfile", "nameProfile", "status", "age"],
          },
        ],
      });

      return res.status(200).json({
        success: true,
        data: members,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Erro ao listar membros da sala de aula.",
        error: err.message,
      });
    }
  },

  // Deletar membro da sala de aula
  async DeleteClassroomMember(req, res) {
    const { idClassroom, idProfile } = req.params;

    try {
      const deletedCount = await ClassroomMembers.destroy({
        where: {
          idClassroom: idClassroom,
          idProfile: idProfile,
        },
      });

      if (deletedCount === 0) {
        return res.status(404).json({
          success: false,
          message: "Membro não encontrado nesta sala de aula.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Membro removido com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao remover membro da sala de aula.",
        error: error.message,
      });
    }
  },
};

module.exports = ClassroomMembersController;
