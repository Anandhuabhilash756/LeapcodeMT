'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 120000, projects: 15 },
  { month: 'Feb', revenue: 145000, projects: 18 },
  { month: 'Mar', revenue: 168000, projects: 22 },
  { month: 'Apr', revenue: 192000, projects: 25 },
  { month: 'May', revenue: 215000, projects: 28 },
  { month: 'Jun', revenue: 243000, projects: 32 }
]

const projectData = [
  { quarter: 'Q1 2023', completed: 45, inProgress: 12 },
  { quarter: 'Q2 2023', completed: 52, inProgress: 15 },
  { quarter: 'Q3 2023', completed: 61, inProgress: 18 },
  { quarter: 'Q4 2023', completed: 68, inProgress: 22 }
]

const technologiesData = [
  { name: 'React', value: 35, color: '#61DAFB' },
  { name: 'Next.js', value: 25, color: '#000000' },
  { name: 'Node.js', value: 20, color: '#339933' },
  { name: 'TypeScript', value: 15, color: '#3178C6' },
  { name: 'Other', value: 5, color: '#6C757D' }
]

export default function Stats() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Performance Metrics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Data-driven insights showcasing our continuous growth and success in delivering exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Monthly Revenue Growth
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    className="text-sm text-gray-600"
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    className="text-sm text-gray-600"
                    tickFormatter={(value) => `$${(value / 1000)}K`}
                  />
                  <Bar 
                    dataKey="revenue" 
                    fill="#2563eb" 
                    radius={[4, 4, 0, 0]}
                    className="transition-all duration-300 hover:opacity-80"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Project Progress Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Project Completion Trends
            </h3>
            <div className="h-80">
              <ResponsiveContainer width>
                <LineChart data={projectData}>
                  <XAxis 
                    dataKey="quarter" 
                    axisLine={false}
                    tickLine={false}
                    className="text-sm text-gray-600"
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    className="text-sm text-gray-600"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="completed" 
                    stroke="#2563eb" 
                    strokeWidth={3}
                    dot={{ fill: '#2563eb', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#2563eb', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="inProgress" 
                    stroke="#0d9488" 
                    strokeWidth={3}
                    dot={{ fill: '#0d9488', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#0d9488', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Technology Stack Distribution
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={technologiesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {technologiesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="lg:w-1/2">
                <div className="space-y-4">
                  {technologiesData.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: tech.color }}
                        ></div>
                        <span className="text-gray-700 font-medium">{tech.name}</span>
                      </div>
                      <span className="text-gray-900 font-semibold">{tech.value}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Projects', value: '250+', color: 'text-primary-600' },
              { label: 'Happy Clients', value: '150+', color: 'text-secondary-600' },
              { label: 'Success Rate', value: '99%', color: 'text-green-600' },
              { label: 'Years Experience', value: '5+', color: 'text-purple-600' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
