'use client'

import { motion } from 'framer-motion'
import { 
  HiCode, 
  HiDeviceMobile, 
  HiChartBar, 
  HiCog,
  HiShieldCheck,
  HiLightningBolt
} from 'react-icons/hi'

const services = [
  {
    icon: HiCode,
    title: 'Web Development',
    description: 'Custom web applications built with React, Next.js, and modern frameworks.',
    features: ['React & Next.js', 'TypeScript', 'API Integration', 'Database Design']
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android devices.',
    features: ['React Native', 'iOS Development', 'Android Development', 'App Store Optimization']
  },
  {
    icon: HiChartBar,
    title: 'Data Visualization',
    description: 'Interactive dashboards and data visualization solutions.',
    features: ['Chart.js', 'D3.js', 'Real-time Data', 'Custom Dashboards']
  },
  {
    icon: HiCog,
    title: 'Automation',
    description: 'Business process automation and workflow optimization.',
    features: ['Workflow Design', 'API Integration', 'Process Optimization', 'Monitoring']
  },
  {
    icon: HiShieldCheck,
    title: 'Security',
    description: 'Enterprise-grade security solutions and compliance.',
    features: ['Security Audit', 'Compliance', 'Data Protection', 'Penetration Testing']
  },
  {
    icon: HiLightningBolt,
    title: 'Performance',
    description: 'Application optimization and performance monitoring.',
    features: ['Performance Audit', 'Speed Optimization', 'Monitoring', 'Scalability']
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card p-8 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300"
              >
                <service.icon className="text-2xl text-primary-600" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full btn-secondary"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
