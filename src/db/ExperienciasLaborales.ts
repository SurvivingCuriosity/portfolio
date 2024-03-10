import { Skill, getSkills } from "@db/SkillsInfinteScroll";
import nmi_img from '@img/empresas/nmi.webp'
import xoborg_img from '@img/empresas/xoborg.webp'
import nttdata_img from '@img/empresas/nttdata.webp'

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
        descripcion: ["a"],
        logoEmpresa: xoborg_img,
        lugar: "Salamanca, Castilla y León, España",
        nombrePuesto: "Frontend Developer",
        aptitudes: getSkills(['react','redux','electron','storybook']),
    },
    {
        fechaInicio: new Date(2022, 9),
        fechaFin: new Date(2023, 5),
        nombreEmpresa: "NTT Data Europe & Latam",
        descripcion: ["a"],
        logoEmpresa: nttdata_img,
        lugar: "Salamanca, Castilla y León, España",
        nombrePuesto: "Junior QA Tester",
        remote:true,
        aptitudes: [],
    },
    {
      fechaInicio: new Date(2022, 2),
      fechaFin: new Date(2023, 6),
      nombreEmpresa: "NMI ERP",
      descripcion: ["a"],
      logoEmpresa: nmi_img,
      lugar: "Rzeszow, Subcarpatia, Polonia",
      nombrePuesto: "Intern",
      aptitudes: [],
  },
];
