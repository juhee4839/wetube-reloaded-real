import "./db";
import "./models/Video";
import "./models/User";
import app from "./server"

const handleListening = () =>
console.log(`Server listenting on port http://localhost:${PORT}`);

const PORT = 4000;

app.listen(PORT, handleListening);