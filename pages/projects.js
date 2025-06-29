import React from 'react'
import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import Base from '../layouts/Base'
import FeaturedProject from '../components/FeaturedProject'
import { FeaturedProjects } from '../components/FeaturedProjects'
import stripHtml from '../lib/strip-html'
import items from '../data/projects'

export async function getStaticProps() {
  const meta = {
    title: 'Projects // Parth Degama',
    tagline: 'Things I\'ve Built.',
    image: '/static/images/uses-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Projects(props) {
  const renderFeatured = () => {
    const featured = ['Levify Mail', 'Box SMTP', 'MyBill', 'CanvasLib']

    return items
      .filter(project => featured.includes(project.title))
      .map((project, index) => (
        <FeaturedProject key={index} project={project} />
      ))
  }

  const renderAll = () => {
    return (
      <ul style={{ margin: '  rem 0', padding: '0 1.5rem', listStyle: 'disc inside' }}>
      {items.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
      </ul>
    )
  }

  const { title, image } = props
  const description = `A selection of projects I\'ve built — from fullstack systems and real-time tools to developer-focused interfaces. Each one reflects my focus on performance, clarity, and purpose.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://parthdegama.site/projects" property="og:url" />
        <meta content={`https://parthdegama.site${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Projects</h2>
        <FeaturedProjects>{renderFeatured()}</FeaturedProjects>

        <h2>All Projects</h2>
        {renderAll()}
      </AnimateSharedLayout>
    </>
  )
}

function ProjectItem(props) {
  const { project } = props

  return (
    <li>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
    </li>
  )
}

Projects.Layout = Base

export default Projects
