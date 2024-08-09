import app from "./app";

const main = () => {
    const port = app.get("port") || 3000; // Obtener el puerto o usar 3000 por defecto
    app.listen(port, () => {
        console.log(`Server on port ${port}`);
    });
};

main();
