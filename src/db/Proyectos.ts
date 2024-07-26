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
import { getSkills, Skill } from "./Skills";

export interface Proyecto {
  nombre: string;
  path: string;
  descripcionCorta: string;
  descripcionLarga:string[];
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
    descripcionLarga:[
      'Lemonade es la primera aplicación que desarrollé con React, como proyecto de final de grado durante mi Erasmus en Polonia.',
      'Haciendo uso del API de Spotify se obtiene información de las canciones y/o artistas que elige el usuario para crear posibles emparejamientos de canciones compatibles, con el fin de realizar remixes, mash-ups o simplemente consultar información musical de cierta canción.',
      'Este proyecto me hizo comprender la necesidad de realizar un análisis previo al desarrollo, tanto a nivel de funcionalidades como de diseño.'

    ],
    icono: icono_lemonade,
    imagen_pc: img_lemonade_pc,
    imagen_movil: img_lemonade_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/Lemonade_react",
    urlProyecto: "https://lemonade-pi.vercel.app/",
    skills: getSkills(['react','css','cypress']),
    caracteristicas:[
      'Utiliza el API de Spotify para obtener los datos de las canciones.', 
      'Gestión de traducciones con i18next.', 
      'Realizados sencillos tests E2E con Cypress'
    ]
  },
  {
    nombre: "KrumDit",
    path:'krumdit',
    descripcionCorta: `Drumpads con una interfaz de usuario moderna y una experiencia de usuario agradable.`,
    descripcionLarga:[
      `Se trata de una sencilla pero atractiva aplicación para tocar ritmos con las teclas del teclado o la pantalla de tu móvil.`,
      `Permite programar ritmos gracias a un secenciador de ritmos.`,
      `Cuenta con presets predefinidos según géneros musicales y permite crear tus propios conujuntos de sonidos.`
    ],
    icono: icono_drumpads,
    imagen_pc: img_krumdit_pc,
    imagen_movil: img_krumdit_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/drumpads",
    urlProyecto: "https://krumdit.com/",
    skills: getSkills(['react','tailwind','typescript','Context API','Custom Hooks']),
    caracteristicas:[
      'Baja latencia en la reproducción de sonidos gracias a la utilización AudioContext.',
      'Diseño adaptado a todas las resoluciones de pantalla.',
      `Gestión del estado de la aplicación con Context. Estilos y gestión de temas con Tailwind y variables CSS.`
    ]
  },
  {
    nombre: "Simple TO-DO",
    path:'todo',
    descripcionCorta: `Aplicación de tareas con aspecto minimalista. Anidamiento mediante subtareas y categorías. Realizados tests de usabilidad analizando el uso que hace de ella mi madre :)`,
    descripcionLarga:[
      `Aplicación desarrollada para uso personal (me encantan las aplicaciones de tareas)`,
      `Interfaz sencilla, anidamiento mediante categorías y subtareas.`
    ],
    icono: icono_todo,
    imagen_pc: img_todo_pc,
    imagen_movil: img_todo_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/simple-todo-byFer",
    urlProyecto: "https://todo-byfer.vercel.app/",
    skills: getSkills(['react','tailwind','Context API']),
    caracteristicas:[
      'PWA con funcionamiento offline.',
      `Gestión de estado global mediante el uso de Context y useReducer.`
    ]
  },
  {
    nombre: "Juego de Pokemon",
    path:'pokemon',
    descripcionCorta: `Juego de combates pokemon para dos jugadores.`,
    descripcionLarga:[],
    icono: icono_pokemon,
    imagen_pc: img_pokemon_pc,
    imagen_movil: img_pokemon_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/pokemon_RPR",
    urlProyecto: "https://pokemon-ruper.vercel.app/",
    skills: getSkills(['react','redux','css']),
    caracteristicas:[
      `Gestión del estado global con Redux.`,
    ]
  },
];
