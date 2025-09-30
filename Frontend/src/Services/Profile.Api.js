const RATIO_API_URL = import.meta.env.VITE_API_URL;

// Função para cadastrar um perfil
export async function RegisterProfile(
  idProfile,
  nameProfile,
  age,
  status,
  avatar
) {
  try {
    const response = await fetch(
      `${RATIO_API_URL}/Cadastro/Perfil/${idProfile}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nameProfile, age, status, avatar }),
      }
    );

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

// Função para listar perfis
export async function ListProfiles() {
  try {
    const response = await fetch(`${RATIO_API_URL}/Lista/Perfis`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro no servidor ao listar perfis");
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}

// Função para deletar perfil
export async function DeleteProfile(idProfile) {
  try {
    const response = await fetch(
      `${RATIO_API_URL}/Deletar/Perfil/${idProfile}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro no servidor ao deletar perfil");
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}

// Função para atualizar perfil
export async function UpdateProfile(idProfile, updates) {
  try {
    const response = await fetch(
      `${RATIO_API_URL}/Atualizar/Perfil/${idProfile}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro no servidor ao atualizar perfil");
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw new Error(error.message || "Não foi possível conectar ao servidor");
  }
}
