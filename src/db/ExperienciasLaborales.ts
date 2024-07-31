import { Skill, getSkills } from "@db/Skills";
import nmi_img from "@img/empresas/nmi.webp";
import xoborg_img from "@img/empresas/xoborg.webp";
import nttdata_img from "@img/empresas/nttdata.webp";

export interface ExperienciaLaboral {
  fechaInicio: Date;
  fechaFin?: Date;
  nombreEmpresa: string;
  lugar: string;
  remote?: boolean;
  logoEmpresa: string;
  nombrePuesto: string;
  descripcion: string[];
  aptitudes: Skill[];
}

export const ExperienciasLaborales: ExperienciaLaboral[] = [
  {
    fechaInicio: new Date(2023, 5),
    nombreEmpresa: "Xoborg Technologies SL",
    descripcion: [
      `Participo en el desarrollo de un software de gestión de clínicas, para el que utilizamos el stack: React, Redux, Electron y Storybook y Talwind para el estilo.`,
      `Mantenemos una comunicación constante con el equipo de backend, buscando la mejor solución para cada caso de uso y dificultades que surgen.`
    ],
    logoEmpresa: xoborg_img,
    lugar: "Salamanca, Castilla y León, Spain",
    nombrePuesto: "Frontend Developer",
    aptitudes: getSkills(["react", "redux", "electron", "storybook"]),
  },
  {
    fechaInicio: new Date(2022, 9),
    fechaFin: new Date(2023, 5),
    nombreEmpresa: "NTT Data Europe & Latam",
    descripcion: [
      `Durante mi etapa en esta empresa, colaboré con el equipo de QA diseñando, perfilando y ejecutando casos de prueba para un proyecto público de alcance e impacto nacional.` , 
      `Esta experiencia me permitió comprender la necesidad de un software sólidamente testeado para evitar que el cliente sufra ningún comportamiento de la aplicación no deseado.`,
      `Aprendí los conceptos básicos de TDD, BDD y cómo aplicarlos en el contexto de un proyecto de software utilizando Selenium, el lenguaje Gherkin y Cucumber.` 
    ],
    logoEmpresa: nttdata_img,
    lugar: "Salamanca, Castilla y León, Spain",
    nombrePuesto: "Junior QA Tester",
    remote: true,
    aptitudes: getSkills(["Cucumber", "Javascript", "Gherkin", "Selenium"]),
  },
  {
    fechaInicio: new Date(2023, 2),
    fechaFin: new Date(2023, 5),
    nombreEmpresa: "NMI ERP",
    descripcion: [
      `Realicé mis prácticas del grado en NMI ERP, una empresa Polaca que ofrece soluciones de gestión para todo tipo de empresas haciendo uso de Miscrsoft Power Platform.`,
      `Pude realizar cursos de formación básica en Power BI y Power Apps.`,
      `Fue mi primera experiencia laboral y pude disfrutar de un ambiente de trabajo excelente junto a personas muy comprometidas con la inclusión de "novatos" como yo con las que me comunicaba en inglés.`
    ],
    logoEmpresa: nmi_img,
    lugar: "Rzeszow, Subcarpatia, Poland",
    nombrePuesto: "Intern",
    aptitudes: getSkills(["Microsoft Power Platform"]),
  },
];

export const getCadenaFechas = (fInicio: Date, fFin?: Date): string => {
  const meses = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getFormattedDate = (date: Date): string => {
    return `${meses[date.getMonth()]} ${date.getFullYear()}`;
  };

  const fechaInicioStr = getFormattedDate(fInicio);
  const fechaFinStr = fFin ? getFormattedDate(fFin) : "Present";

  const diffYears =
    (fFin ? fFin.getFullYear() : new Date().getFullYear()) -
    fInicio.getFullYear();
  const diffMonths =
    (fFin ? fFin.getMonth() : new Date().getMonth()) - fInicio.getMonth() + 1;
  const totalMonths = diffYears * 12 + diffMonths;

  if (totalMonths < 12) {
    return `${fechaInicioStr} - ${fechaFinStr} (${totalMonths} month${
      totalMonths !== 1 ? "s" : ""
    })`;
  } else {
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    if (remainingMonths === 0) {
      return `${fechaInicioStr} - ${fechaFinStr} (${years} year${
        years !== 1 ? "s" : ""
      })`;
    } else {
      return `${fechaInicioStr} - ${fechaFinStr} (${years} year${
        years !== 1 ? "s" : ""
      } and ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""})`;
    }
  }
};
