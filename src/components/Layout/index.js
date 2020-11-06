import React from 'react'
import { Helmet } from 'react-helmet'

import { Grid, Title, Subtitle } from './styles'

export function Layout ({children, title, subtitle}) {
  return <Grid>
  <Helmet>
    {title && <title>{title} - Petgram 😺🐶🐰🐠</title>}
    {subtitle && <meta name='description' content={subtitle} />}
  </Helmet>
  {title && <Title>{title}</Title>}
  {subtitle && <Subtitle>{subtitle}</Subtitle>}
  {children}
  </Grid>
}