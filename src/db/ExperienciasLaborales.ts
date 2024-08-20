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
      "I participate in the development of clinic management software, where we use the following stack: React, Redux, Electron, Storybook, and Tailwind for styling.",
      "We maintain constant communication with the backend team, seeking the best solution for each use case and any challenges that arise."
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
      "During my time at this company, I collaborated with the QA team in designing, profiling, and executing test cases for a public project with national reach and impact.",
      "This experience allowed me to understand the need for thoroughly tested software to prevent any unwanted application behavior from affecting the client.",
      "I learned the basics of TDD, BDD, and how to apply them in the context of a software project using Selenium, the Gherkin language, and Cucumber."
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
      "I completed my degree internship at NMI ERP, a Polish company that offers management solutions for all types of businesses using Microsoft Power Platform.",
      "I was able to take basic training courses in Power BI and Power Apps.",
      "This was my first work experience, and I enjoyed an excellent work environment with people who were highly committed to including 'newbies' like me, with whom I communicated in English."
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
