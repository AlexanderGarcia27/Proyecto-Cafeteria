export const registerUser = async (name, email, password) => {
  try {
    const response = await fetch("https://reservacion-citas.onrender.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password }) // <-- AÑADIDO name
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Error al registrar usuario");
    }
    return data;
  } catch (error) {
    return { error: error.message };
  }
};
