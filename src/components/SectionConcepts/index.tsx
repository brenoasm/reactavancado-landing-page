import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import content from './content'
import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

const SectionConcepts = ({concepts, title}: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({title}) => (
          <S.Item key={title}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
