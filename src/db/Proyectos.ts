import img_todo_movil from "@img/proyectos/todo_movil.png";
import img_todo_pc from "@img/proyectos/todo_pc.png";
import img_lemonade_movil from "@img/proyectos/lemonade_movil.png";
import img_lemonade_pc from "@img/proyectos/lemonade_pc.png";
import img_futbolin_movil from "@img/proyectos/futbolin_movil.png";
import img_futbolin_pc from "@img/proyectos/futbolin_pc.png";
import img_pokemon_movil from "@img/proyectos/pokemon_movil.png";
import img_pokemon_pc from "@img/proyectos/pokemon_pc.png";
import img_krumdit_movil from "@img/proyectos/krumdit_movil.png";
import img_krumdit_pc from "@img/proyectos/krumdit_pc.png";
import icono_futbolin from "@img/proyectos/icono_futbolin.svg";
import icono_lemonade from "@img/proyectos/icono_lemonade.svg";
import icono_todo from "@img/proyectos/icono_todo.png";
import icono_pokemon from "@img/proyectos/icono_pokemon.png";
import icono_drumpads from "@img/proyectos/icono_drumpads.svg";
import { getSkills, Skill } from "./Skills";

export interface Proyecto {
  nombre: string;
  path: string;
  descripcionCorta: string;
  descripcionLarga: string[];
  icono: string;
  imagen_pc: string;
  imagen_movil: string;
  urlGithub: string;
  urlProyecto: string;
  skills: Skill[];
  caracteristicas: string[];
}

export const Proyectos: Proyecto[] = [
  {
    nombre: "Futbol-in",
    path: "futbolin",
    descripcionCorta: `Find foosball tables near you. Create and manage leagues and tournaments.`,
    descripcionLarga: [
      "Personal project for foosball enthusiasts. Responsible for the entire project lifecycle, including coding, design, infrastructure, and marketing.",
      "First project with Next.js; the best way to learn is by doing.",
    ],
    icono: icono_futbolin,
    imagen_pc: img_futbolin_pc,
    imagen_movil: img_futbolin_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/futbol-in",
    urlProyecto: "https://futbolin.app/",
    skills: getSkills(["react", "next.js", "tailwind", "mongodb"]),
    caracteristicas: [
      "Developed with Next.js, Tailwind CSS, and MongoDB.",
      "Uses the Google API to retrieve information on addresses, bars, and coordinates.",
      "Images hosted on Google Cloud Platform.",
    ],
  },
  {
    nombre: "Lemonade",
    path: "lemonade",
    descripcionCorta: `Application aimed at music producers. Set of tools to obtain metadata of songs from Spotify to create remixes or 'mash-ups'.`,
    descripcionLarga: [
      "Lemonade is the first application I developed with React, as a final degree project during my Erasmus in Poland.",
      "Using the Spotify API, information about the songs and/or artists chosen by the user is obtained to create possible pairings of compatible songs, in order to make remixes, mash-ups or simply consult musical information of a certain song.",
      "This project made me understand the need for prior analysis before development, both in terms of functionality and design.",
    ],
    icono: icono_lemonade,
    imagen_pc: img_lemonade_pc,
    imagen_movil: img_lemonade_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/Lemonade_react",
    urlProyecto: "https://lemonade-pi.vercel.app/",
    skills: getSkills(["react", "css", "cypress"]),
    caracteristicas: [
      "Uses the Spotify API to obtain song data.",
      "Translation management with i18next.",
      "Simple E2E tests with Cypress",
    ],
  },
  {
    nombre: "KrumDit",
    path: "krumdit",
    descripcionCorta: `Drumpads with a modern user interface and a pleasant user experience.`,
    descripcionLarga: [
      `It is a simple but attractive application to play rhythms with the keyboard keys or the screen of your mobile.`,
      `Allows you to program rhythms thanks to a rhythm sequencer.`,
      `It has predefined presets according to musical genres and allows you to create your own sound sets.`,
    ],
    icono: icono_drumpads,
    imagen_pc: img_krumdit_pc,
    imagen_movil: img_krumdit_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/drumpads",
    urlProyecto: "https://krumdit.com/",
    skills: getSkills([
      "react",
      "tailwind",
      "typescript",
      "Context API",
      "Custom Hooks",
    ]),
    caracteristicas: [
      "Low latency in sound playback thanks to the use of AudioContext.",
      "Design adapted to all screen resolutions.",
      `State management with Context. Styles and theme management with Tailwind and CSS variables.`,
    ],
  },
  {
    nombre: "Simple TO-DO",
    path: "todo",
    descripcionCorta: `Task application with a minimalist look. Nesting through subtasks and categories.`,
    descripcionLarga: [
      `Application developed for personal use (I love task applications)`,
      `Simple interface, nesting through categories and subtasks.`,
    ],
    icono: icono_todo,
    imagen_pc: img_todo_pc,
    imagen_movil: img_todo_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/simple-todo-byFer",
    urlProyecto: "https://todo-byfer.vercel.app/",
    skills: getSkills(["react", "tailwind", "Context API"]),
    caracteristicas: [
      "PWA with offline functionality.",
      `Global state management using Context and useReducer.`,
    ],
  },
  {
    nombre: "Pokemon Game",
    path: "pokemon",
    descripcionCorta: `Pokemon battle game for two players.`,
    descripcionLarga: [],
    icono: icono_pokemon,
    imagen_pc: img_pokemon_pc,
    imagen_movil: img_pokemon_movil,
    urlGithub: "https://github.com/SurvivingCuriosity/pokemon_RPR",
    urlProyecto: "https://pokemon-ruper.vercel.app/",
    skills: getSkills(["react", "redux", "css"]),
    caracteristicas: [`Global state management with Redux.`],
  },
];
