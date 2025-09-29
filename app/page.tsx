'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const openModal = (content: string) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalContent('')
  }

  return (
    <>
      <Header onLoginClick={() => openModal('login')} />
      <Hero onContactClick={() => openModal('contact')} onLoginClick={() => openModal('login')} />
      <Features />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Contact onFormSubmit={(data) => openModal('success')} />
      <Footer />
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        content={modalContent}
      />
    </>
  )
}
