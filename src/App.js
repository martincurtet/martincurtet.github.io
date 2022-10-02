import React from 'react'
import './App.css'
import Section from './components/Section'
import Item from './components/Item'
import { FaBriefcase, FaGithub, FaSchool } from "react-icons/fa"


export default function App() {
  return (
    <div className='App w-100 vh-100 d-flex flex-column align-items-center bg-light'>
      <h1 className='fw-bold p-5'>Martin Curtet</h1>

      <p>Hi, I'm a Fullstack Web Developer living in New York!</p>

      <p>This online portfolio is <span className='fw-bold'>under contruction</span>, using React and hosted on Github Pages.</p>

      <Section title={'Work Experience'} icon={<FaBriefcase size={24} />}>
        <Item id={103} />
        <Item id={102} />
        <Item id={101} />
      </Section>
      <Section title={'Education'} icon={<FaSchool size={24} />}>
        <Item id={202} />
        <Item id={201} />
      </Section>

      <a
        href='https://github.com/martincurtet'
        target='_blank'
        rel='noopener noreferrer'
        className='mt-auto p-2 text-black'
      >
        <FaGithub size={36} />
      </a>
    </div>
  )
}
