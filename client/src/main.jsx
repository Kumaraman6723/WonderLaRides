import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import fonts
const poppinsFont = document.createElement("link");
poppinsFont.rel = "stylesheet";
poppinsFont.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
document.head.appendChild(poppinsFont);

// Add title to page
const title = document.createElement("title");
title.textContent = "Wonderla - Theme Park Rides";
document.head.appendChild(title);

createRoot(document.getElementById("root")).render(<App />);
