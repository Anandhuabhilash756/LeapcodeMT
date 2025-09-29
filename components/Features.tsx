'use client'

import { motion } from 'framer-motion'
import { 
  HiLightningBolt, 
  HiShieldCheck, 
  HiDeviceMobile, 
  HiChartBar,
  HiUsers,
  HiGlobe
} from 'react-icons/hi'

const features = [
  {
    icon: HiLightningBolt,
    title: 'Lightning Fast',
    description: 'Optimized performance with Next.js and modern web technologies for blazing fast user experiences.',
    color: 'text-yellow-500'
  },
  {
    icon: HiShieldCheck,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with built-in protection and compliance standards.',
    color: 'text-green-500'
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile First',
    description: 'Responsive design that works perfectly across all devices and screen sizes.',
    color: 'text-blue-500'
  },
  {
    icon: HiChartBar,
    title: 'Analytics Ready',
    description: 'Built-in analytics and reporting tools to track performance and user engagement.',
    color: 'text-purple-500'
  },
  {
    icon: HiUsers,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools for teams to work together efficiently.',
    color: 'text-pink-500'
  },
  {
    icon: HiGlobe,
    title: 'Global Scale',
    description: 'Built to handle millions of users with global CDN and edge computing.',
    color: 'text-indigo-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your web applications with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card p-8 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors duration-300`}
              >
                <feature.icon className={`text-2xl ${feature.color}`} />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
