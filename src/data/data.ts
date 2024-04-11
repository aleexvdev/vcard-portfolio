import { TypeEducation, TypeProjects, TypeServices, TypeSkills } from "../types/data";

export const services: TypeServices[] = [
  {
    service: "Frontend Development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    service: "Backend Development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    service: "Mobile Development",
    description: "Professional development of applications for iOS and Android.",
  },
  {
    service: "Skills and Expertise",
    description: "Proficient in varius programming languages, frameworks and tools.",
  }
];

export const education: TypeEducation[] = [
  {
    place: "Universidad Nacional José Faustino Sánchez Carrión",
    period: "2016-2021",
    description: "Bachiller en Ingeniería Informática"
  },
  {
    place: "Universidad Nacional José Faustino Sánchez Carrión",
    period: "2016-2021",
    description: "Bachiller en Ingeniería Informática"
  }
];

export const experience: TypeEducation[] = [
  {
    place: "Softnet SPA",
    period: "Desarrollador Full-Stack | Enero 2021 – ACTUALIDAD",
    description: "Haciendo uso de PHP, Laravel, JQuery, JavaScript, HTML y Bootstrap, brindo soporte para el ERP de facturación electrónica, desarrollando e implementando nuevas funcionalidades en el ERP para mejorar la experiencia del usuario y la eficiencia operativa, asegurando la estabilidad y el rendimiento del sistema. Mantenimiento proactivo del código base y seguimiento de las mejores prácticas de programación. Contribución activa en reuniones de planificación y revisión de módulos para asegurar la alineación con los objetivos empresariales."
  },
  {
    place: "Softnet SPA",
    period: "Desarrollador Full-Stack | Noviembre 2021 – Diciembre 2022",
    description: "Experiencia en el desarrollo de un proyecto de facturación electrónica, enfocado en el diseño de interfaces de e-commerce mediante HTML, CSS y Material UI. Lideré la implementación de funcionalidades utilizando React, Redux y Typescript, además de integrar y consumir datos dinámicos a través de API REST."
  },
  {
    place: "Softnet SPA",
    period: "Desarrollador Full-Stack | Enero 2021 – Octubre 2021",
    description: "Desarrollé APIs eficientes utilizando Laravel, PHP, jQuery y Bootstrap, las cuales interactuaban con ApiGateway del SII, facilitando el acceso y procesamiento de registros contables desde el ERP. Mi rol incluyó la conceptualización, ejecución y garantía de rendimiento óptimo e integración con los sistemas existentes. Se mejoró la eficiencia operativa, así también se optimizó la accesibilidad y usabilidad de los datos contables, fortaleciendo así la infraestructura tecnológica de la empresa."
  }
];

export const skills: TypeSkills[] = [
  {
    skill: "JavaScript",
    image: "https://camo.githubusercontent.com/83332cff730c24fb7829ea5ff814d2629572848a0881cf9a60222ef296263782/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a73"
  },
  {
    skill: "ReactJS",
    image: "https://camo.githubusercontent.com/ff077b866cdc3fc2b0fa50ca6f8fa395451ffa625bc9c1133643b40e8afa2e2c/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374"
  },
  {
    skill: "Redux",
    image: "https://camo.githubusercontent.com/5178dfc477f75d9365b50536e513172869c702a77d9ba3d83ee9d75688880495/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265647578"
  },
  {
    skill: "TypeScript",
    image: "https://camo.githubusercontent.com/34597c8135ed2d68f6dead5b7565c74d77946f6b199f7472661d54677c58a24a/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7473"
  },
];

export const projects: TypeProjects[] = [
  {
    name: "ToDo App",
    category: "Web development",
    image: "todoapp",
    repository: "https://github.com/aleexvdev/app-todolist",
    url: "https://weatherapp-alexvdev.netlify.app/",
    tags: [
      "ReactJS",
      "Tailwind CSS",
      "TypeScript"
    ]
  },
  {
    name: "Weather",
    category: "Web development",
    image: "weather",
    repository: "https://github.com/aleexvdev/weather-app",
    url: "https://alexvalverde666.github.io/todo-app/",
    tags: [
      "ReactJS",
      "Tailwind CSS",
      "TypeScript"
    ]
  },
  {
    name: "FoodRecipes",
    category: "Applications",
    image: "foodrecipes",
    repository: "https://github.com/aleexvdev/food-recipes",
    url: "https://foodrecipes-alexvdev.netlify.app/",
    tags: [
      "ReactJS",
      "Tailwind CSS",
      "TypeScript",
      "NodeJS",
      "MongoDB"
    ]
  }
];
