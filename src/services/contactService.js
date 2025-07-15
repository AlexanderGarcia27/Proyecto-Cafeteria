export const sendEmail = async(data) => {
    try {
        const response = await fetch("https://reservacion-citas.onrender.com/api/emails/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();

        return result;
    } catch (error) {
        console.error(error);
        return {message: "Error al enviar el email, inténtelo de nuevo"}   
    }
}