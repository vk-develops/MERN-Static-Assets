import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

// Serving static files from the 'Public' directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "Public")));

app.use("/Images", express.static(path.join(__dirname, "Public", "Images")));
app.use(
    "/Images/WeatherImg",
    express.static(path.join(__dirname, "Public", "WeatherImages"))
);
app.use(
    "/Images/PortfolioImages",
    express.static(path.join(__dirname, "Public", "PortfolioImages"))
);

app.use(
    "/vk-develops",
    express.static(path.join(__dirname, "Public", "vk-develops"))
);

//HTTP GET Method Test
app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "HTTP Method Success!" });
});

//App listen
app.listen(PORT, () => {
    console.log(`Server started and running on http://localhost:${PORT}`);
});
