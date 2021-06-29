// Test import of styles
import "@/styles/index.scss";
import Whiskey from "./lib/Whiskey";

const app: HTMLElement = document.querySelector("#root")!;
new Whiskey(app);
