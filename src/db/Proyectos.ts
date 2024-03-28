import img_todo from "@img/proyectos/todo_movil.png";
import img_lemonade from "@img/proyectos/lemonade.png";
import img_pokemon from "@img/proyectos/pokemon.png";
import icono_lemonade from "@img/proyectos/icono_lemonade.svg";
import icono_todo from "@img/proyectos/icono_todo.png";
import icono_pokemon from "@img/proyectos/icono_pokemon.png";
export interface Proyecto {
  nombre: string;
  descripcionCorta: string;
  icono: string;
  imagen: string;
  urlGithub: string;
  urlProyecto: string;
}

export const Proyectos: Proyecto[] = [
  {
    nombre: "Lemonade",
    descripcionCorta: `Aplicación dirigida a productores musicales. Conjunto de herramientas para obtener metadatos de canciones de Spotify con el fin de crear remixes o 'mash-ups'.`,
    icono: icono_lemonade,
    imagen: img_lemonade,
    urlGithub: "https://github.com/SurvivingCuriosity/Lemonade_react",
    urlProyecto: "https://lemonade-pi.vercel.app/",
  },
  {
    nombre: "Simple TO-DO",
    descripcionCorta: `Aplicación de tareas con aspecto minimalista. Anidamiento mediante subtareas y categorías. Realizados tests de usabilidad analizando el uso que hace de ella mi madre :)`,
    icono: icono_todo,
    imagen: img_todo,
    urlGithub: "https://github.com/SurvivingCuriosity/simple-todo-byFer",
    urlProyecto: "https://todo-byfer.vercel.app/",
  },
  {
    nombre: "Juego de Pokemon",
    descripcionCorta: `Juego de combates pokemon para dos jugadores.`,
    icono: icono_pokemon,
    imagen: img_pokemon,
    urlGithub: "https://github.com/SurvivingCuriosity/pokemon_RPR",
    urlProyecto: "https://pokemon-ruper.vercel.app/",
  },
];
