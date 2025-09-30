const RATIO_API_URL = import.meta.env.VITE_API_URL;

// Função para adicionar perfil a uma sala de aula
export async function AddClassroomMember(idClassroom, idProfile) {
  try {
    const response = await fetch(
      `${RATIO_API_URL}/SalaDeAula/AdicionarMembro`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idClassroom, idProfile }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro no servidor ao adicionar membro");
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}

// Função para listar sala de aulas
export async function ListClassroomMembers(idClassroom) {
  try {
    const response = await fetch(
      `${RATIO_API_URL}/SalaDeAula/ListarMembros/${idClassroom}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Erro no servidor ao listar membros de sala de aula"
      );
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}

// Função para deletar sala de aula
export async function DeleteClassroomMember(idClassroom, idProfile) {
  try {
    const response = await fetch(
      `${RATIO_API_URL}/SalaDeAula/RemoverMembro/${idClassroom}/${idProfile}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Erro no servidor ao remover membro de sala de aula"
      );
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}
