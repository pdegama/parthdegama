import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import Toast from '../components/Toast'
import { Box } from '../components/Box'
import { styled } from '../stitches.config'

export async function getStaticProps() {
  const meta = {
    title: 'Contact // Parth Degama',
    tagline: 'Let\'s Talk.',
    image: '/static/images/reminder-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Contact(props) {
  const { title, image } = props
  const description = `<strong>I love chatting</strong> with software engineers, tech founders, students, and creators. <strong>I'm a busy person</strong>, so I can't promise that I'll reply to your email right away, but I'll try my best to respond in a timely manner.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://parthdegama.site/contact" property="og:url" />
        <meta content={`https://parthdegama.site${image}`} property="og:image" />
      </Head>

      <Box>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <h2>Send me an email</h2>
        <EmailLink href="mailto:hello@parthdegama.site"><p>hello@parthdegama.site</p></EmailLink>
      </Box>
    </>
  )
}

const EmailLink = styled('a', {
  fontSize: '16px',
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
})

Contact.Layout = Base

export default Contact
