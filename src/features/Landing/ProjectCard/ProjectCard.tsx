import { FC } from 'react'

import GridPanel from 'src/shared/components/GridPanel'
import PanelDescription from 'src/shared/components/PanelDescription'

import { ProjectCardContainer } from './styledComponents'

type ProjectCardProps = {
  name: string
  description: string
  url: string
}

const ProjectCard: FC<ProjectCardProps> = ({ name, description, url }) => {
  return (
    <GridPanel>
      <ProjectCardContainer href={url} target='_blank'>
        {name}
        <PanelDescription>{description}</PanelDescription>
      </ProjectCardContainer>
    </GridPanel>
  )
}

export default ProjectCard
