import React from 'react'
import './App.css'
import './custom.scss'
import Section from './components/Section'
import Item from './components/Item'
import ItemSmall from './components/ItemSmall'
import { FaBriefcase, FaGithub, FaSchool, FaLanguage, FaWrench, FaAddressCard } from "react-icons/fa"

export default function App() {
  return (
    <div className='App w-100 d-flex flex-column align-items-center bg-background-light'>
      <h1 className='fw-bold p-5'>Martin Curtet</h1>

      <p>Hi, I'm a Fullstack Web Developer living in New York!</p>

      <p>This online portfolio is <span className='fw-bold'>under construction</span>, using React and hosted on Github Pages.</p>

      <Section title={'Work Experience'} icon={<FaBriefcase size={24} />}>
        <Item id={104} />
        <Item id={103} />
        <Item id={102} />
        <Item id={101} />
      </Section>
      <Section title={'Education'} icon={<FaSchool size={24} />}>
        <Item id={202} />
        <Item id={201} />
      </Section>
      <Section title={'Languages'} icon={<FaLanguage size={24} />}>
        <ItemSmall id={301} />
        <ItemSmall id={302} />
        <ItemSmall id={303} />
        
      </Section>

      <Section title={'Skills'} icon={<FaWrench size={24} />}>
        <ItemSmall id={304} />
        <ItemSmall id={305} />
        <ItemSmall id={306} />
        <ItemSmall id={307} />
        <ItemSmall id={308} />
        <ItemSmall id={309} />
        <ItemSmall id={310} />
        <ItemSmall id={311} />
        <ItemSmall id={312} />
      </Section>

      <Section title={'Contact'} icon={<FaAddressCard size={24} />}>
        <div>martin.curtet@gmail.com</div>
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
