export interface Project {
  title: string
  description: string
  tags: string[]
  github: string | null
  demo: string | null
}

export const projects: Project[] = [
  {
    title: 'Pokémon Analytics Pipeline',
    description: 'End-to-end ELT pipeline ingesting PokéAPI data into a SQLite warehouse, orchestrated with Airflow. Includes dbt transformations and a Looker-style dashboard.',
    tags: ['Python', 'Airflow', 'SQLite', 'dbt'],
    github: 'https://github.com/highxsky/pokemon_airflow',
    demo: null,
  },
  {
    title: 'Financial Statements Processor',
    description: 'Automated extraction and reconciliation of bank PDF statements into structured CSV/Excel reports. Handles multi-format inputs from RBC.',
    tags: ['Python', 'pandas', 'pdfplumber', 'Excel'],
    github: 'https://github.com/highxsky/pdf_statements_processing',
    demo: null,
  },
  {
    title: 'Football Analytics',
    description: 'Statistical analysis of match data using public football datasets. Covers expected goals (xG), player clustering, and league performance trends.',
    tags: ['Python', 'pandas', 'matplotlib', 'scikit-learn'],
    github: 'https://github.com/highxsky/football_analytics',
    demo: null,
  },
]
