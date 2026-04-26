export interface SkillGroup {
  label: string
  color: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages & Tools',
    color: '#60a5fa',
    skills: ['Python', 'SQL', 'Bash', 'Git'],
  },
  {
    label: 'Data Engineering',
    color: '#f97316',
    skills: ['dbt', 'Airflow', 'Spark'],
  },
  {
    label: 'Cloud & Platforms',
    color: '#a78bfa',
    skills: ['GCP', 'BigQuery', 'AWS', 'DuckDB/MotherDuck'],
  },
  {
    label: 'Data Viz',
    color: '#34d399',
    skills: ['Power BI', 'Tableau', 'Looker'],
  },
]
