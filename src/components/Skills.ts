export interface Skill {
  skill: string;
  description: string;
}

const skills: Skill[] = [
  {
    skill: "Team Organization",
    description: "Ability to form quick reaction and extended mission support teams. Mastered pandemic missions with 100% uptime and 0 team-wide outbreaks."
  },
  {
    skill: "Leadership and Supervision",
    description: "Multiple awards for leadership. Capable of leading teams from small to large, to include training and career management of all individuals"
  },
  {
    skill: "Information Technology",
    description: "BS Information Technology. Capable of building networks from ideation to implementation across multiple classifications using industry-forward technology"
  },
  {
    skill: "Project Management",
    description: "MS IT Project Management. Completed projects from conception to execution across global commands directly affecting the warfighter"
  },
  {
    skill: "Application Development",
    description: "BS Game Design degree; experience in create web applications in javascript, ASP.net, React; can create desktop applications utilizing VBA within MS Excel, Access, Sharepoint, Teams."
  }
]

export default skills;