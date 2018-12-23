import React from 'react'
import { Slide, Text, Heading } from 'spectacle'
import { MDXProvider } from '@mdx-js/tag'
import styled from 'styled-components'
import components from './components'
import theme from './theme'
import bg2 from '../assets/bg2.png'
import bg4 from '../assets/bg5.jpg'

// DEFAULT LAYOUT

const CSlide = styled(Slide)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DefaultSlide = ({ children, ...rest }) => (
  <CSlide {...rest} bgImage={bg2}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </CSlide>
)

const bgComponents = {
  ...components,
  h1: ({ children }) => (
    <Heading size={1} textColor="white">
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text textColor="white">{children}</Text>,
}

export const BgSlide = ({ children, ...rest }) => (
  <CSlide {...rest} bgImage={bg4} textColor="white">
    <MDXProvider components={bgComponents}>{children}</MDXProvider>
  </CSlide>
)

// DARK LAYOUT

const darkComponents = {
  ...components,
  h2: ({ children }) => (
    <Heading size={2} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size={3} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size={4} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size={5} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size={6} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text textColor="white">{children}</Text>,
}

export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="black" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
)

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)

const leftComponents = {
  ...components,
  p: ({ children }) => (
    <Text
      style={{
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '4rem',
      }}
    >
      {children}
    </Text>
  ),
}

export const LeftSlide = ({ children, ...rest }) => (
  <Slide {...rest} bgImage={bg2}>
    <MDXProvider components={leftComponents}>{children}</MDXProvider>
  </Slide>
)
