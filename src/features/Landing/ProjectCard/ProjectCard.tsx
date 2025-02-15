import { FC } from 'react'

import GridPanel from 'src/shared/components/GridPanel'
import PanelDescription from 'src/shared/components/PanelDescription'

import styles from './projectCard.module.css'

type ProjectCardProps = {
  name: string
  description: string
  url: string
}

const ProjectCard: FC<ProjectCardProps> = ({ name, description, url }) => {
  return (
    <GridPanel>
      <a
        className={styles['project-card-container']}
        href={url}
        target='_blank'
      >
        {name}
        <PanelDescription>{description}</PanelDescription>
      </a>
    </GridPanel>
  )
}

export default ProjectCard
