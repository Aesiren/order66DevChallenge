export interface Job {
  title: string;
  organization: string;
  location: string;
  timeframe: string;
  description: string;
  picture: string;
}
const experience: Job[] = [
  {
    title: "Risk and Governance Framework Program Manager",
    organization: "United States Space Force",
    location: "Peterson Space Force Base, Colorado",
    timeframe: "2021 - 2023",
    description: "Manages a self-governance program for 47 global organizations. Equips 158 personnel on requirements and system use to mitigate existing and emerging business risks.",
    picture: "src/assets/sbd1-nobg.png"
  },
  {
    title: "System Administrator",
    organization: "United States Air Force",
    location: "Nellis Air Force Base, Nevada",
    timeframe: "2018 - 2021",
    description: "Led 21 system administrators and maintained a $6.8 million network. Educated, trained, and equipped personnel and communicated network performance to leaders.",
    picture: "src/assets/547is-nobg.png"
  },
  {
    title: "Regional Communications Portfolio Planner",
    organization: "United States Air Force",
    location: "Osan Air Base, Republic of Korea",
    timeframe: "2016 - 2018",
    description: "Oversaw configuration and management of communications systems across the Republic of Korea. Provided technical oversight and recommendations to US Air Force units for operations and exercises.",
    picture: "src/assets/7af-nobg.png"
  },
  {
    title: "Communications Portfolio Planner",
    organization: "United States Air Force",
    location: "Robins Air Force Base, Georgia",
    timeframe: "2015 - 2016",
    description: "Provided evaluation and standardization support for exercises, inspections, and real-world missions to meet employment instructions. Developed tactics, techniques, and procedures for successful planning and execution of rapid-deployment network equipment.",
    picture: "src/assets/51cbcs-nobg.png"
  },
  {
    title: "Cyber Logistics Supervisor",
    organization: "United States Air Force",
    location: "Robins Air Force Base, Georgia",
    timeframe: "2012 - 2015",
    description: "Supervised multiple personnel, providing training on 517 tasks across 5 disciplines operating $10.4 million communications suite. Configured, installed, and maintained network infrastructure for deployment.",
    picture: "src/assets/51cbcs-nobg.png"
  }
]

export default experience;