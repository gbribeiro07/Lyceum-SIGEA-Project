const RATIO_API_URL = import.meta.env.VITE_API_URL;

// Função para cadastrar um sala de aula
export async function RegisterClassroom(nameClassroom) {
  try {
    const response = await fetch(`${RATIO_API_URL}/Cadastro/SalaDeAula`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nameClassroom }),
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro no servidor ao cadastrar");
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}

// Função para listar sala de aulas
export async function ListClassroom() {
  try {
    const response = await fetch(`${RATIO_API_URL}/Lista/SalaDeAula`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Erro no servidor ao listar salas de aula"
      );
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}

// Função para deletar sala de aula
export async function DeleteClassroom(idClassroom) {
  try {
    const response = await fetch(
      `${RATIO_API_URL}/Deletar/SalaDeAula/${idClassroom}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Erro no servidor ao deletar sala de aula"
      );
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}

// Função para atualizar sala de aula
export async function UpdateClassroom(idClassroom, updates) {
  try {
    const response = await fetch(
      `${RATIO_API_URL}/Atualizar/SalaDeAula/${idClassroom}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Erro no servidor ao atualizar sala de aula"
      );
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}
