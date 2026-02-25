import openGoogle from "./google.jsx";
import { openYandex } from "./yandex.jsx";

export let openAllMaps = () => {
    openGoogle();
    openYandex();
    console.log("openAllMaps2")
    return <div>hello!!!</div>
}