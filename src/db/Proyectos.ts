import img_todo_movil from "@img/proyectos/todo_movil.png";
import img_todo_pc from "@img/proyectos/todo_pc.png";
import img_lemonade_movil from "@img/proyectos/lemonade_movil.png";
import img_lemonade_pc from "@img/proyectos/lemonade_pc.png";
import img_pokemon_movil from "@img/proyectos/pokemon_movil.png";
import img_pokemon_pc from "@img/proyectos/pokemon_pc.png";
import img_krumdit_movil from "@img/proyectos/krumdit_movil.png";
import img_krumdit_pc from "@img/proyectos/krumdit_pc.png";
import icono_lemonade from "@img/proyectos/icono_lemonade.svg";
import icono_todo from "@img/proyectos/icono_todo.png";
import icono_pokemon from "@img/proyectos/icono_pokemon.png";
import icono_drumpads from "@img/proyectos/icono_drumpads.svg";
import { getSkills, Skill } from "./SkillsInfinteScroll";

export interface Proyecto {
  nombre: string;
  path: string;
  descripcionCorta: string;
  icono: string;
  imagen_pc: string;
  imagen_movil: string;
  urlGithub: string;
  urlProyecto: string;
  skills: Skill[];
  caracteristicas:string[];
}

export const Proyectos: Proyecto[] = [
  {
    nombre: "Lemonade",
    path:'lemonade',
    descripcionCorta: `Aplicación dirigida a productores musicales. Conjunto de herramientas para obtener metadatos de canciones de Spotify con el fin de crear remixes o 'mash-ups'.`,
    icono: icono_lemonade,
    imagen_pc: img_lemonade_pc,
    imagen_movil: img_lemonade_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/Lemonade_react",
    urlProyecto: "https://lemonade-pi.vercel.app/",
    skills: getSkills(['react','css','cypress']),
    caracteristicas:[
      'Utiliza el API de Spotify para obtener los datos de las canciones.', 
      'Traducida al inglés con i18next.', 
      'Realizados sencillos tests E2E con Cypress'
    ]
  },
  {
    nombre: "KrumDit",
    path:'krumdit',
    descripcionCorta: `Drumpads con una interfaz de usuario moderna y una experiencia de usuario agradable.`,
    icono: icono_drumpads,
    imagen_pc: img_krumdit_pc,
    imagen_movil: img_krumdit_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/simple-todo-byFer",
    urlProyecto: "https://krumdit.com/",
    skills: getSkills(['react','tailwind']),
    caracteristicas:[]
  },
  {
    nombre: "Simple TO-DO",
    path:'todo',
    descripcionCorta: `Aplicación de tareas con aspecto minimalista. Anidamiento mediante subtareas y categorías. Realizados tests de usabilidad analizando el uso que hace de ella mi madre :)`,
    icono: icono_todo,
    imagen_pc: img_todo_pc,
    imagen_movil: img_todo_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/simple-todo-byFer",
    urlProyecto: "https://todo-byfer.vercel.app/",
    skills: getSkills(['react','tailwind']),
    caracteristicas:[]
  },
  {
    nombre: "Juego de Pokemon",
    path:'pokemon',
    descripcionCorta: `Juego de combates pokemon para dos jugadores.`,
    icono: icono_pokemon,
    imagen_pc: img_pokemon_pc,
    imagen_movil: img_pokemon_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/pokemon_RPR",
    urlProyecto: "https://pokemon-ruper.vercel.app/",
    skills: getSkills(['react','redux','css']),
    caracteristicas:[]
  },
];
