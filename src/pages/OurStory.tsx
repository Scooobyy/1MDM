
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Story</span>
            </h1>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-8">
              <img
                src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Our journey"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-xl max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-light text-gray-900"
              >
                The inception of 1MDM began with a simple yet profound realization: the medical equipment industry was fragmented, inefficient, and often failed to serve the critical needs of healthcare providers worldwide.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                In 2018, our founder, Dr. Sarah Chen, was working as a procurement director at a major metropolitan hospital. She witnessed firsthand the challenges healthcare facilities faced when trying to source quality medical equipment. Suppliers were scattered across different platforms, pricing was opaque, and the process of finding reliable vendors was time-consuming and often frustrating.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                The breaking point came during a critical shortage of ventilators during the early pandemic response. Dr. Chen spent countless hours calling suppliers, comparing specifications, and navigating complex procurement processes while patients' lives hung in the balance. She realized that in the 21st century, there had to be a better way.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="my-12 p-8 bg-red-50 rounded-lg border-l-4 border-red-600"
              >
                <p className="text-lg italic text-red-800">
                  "I envisioned a world where a doctor in rural Kenya could access the same quality equipment as a surgeon in New York, where pricing was transparent, and where the focus was always on saving lives, not navigating bureaucracy."
                </p>
                <p className="text-right mt-4 font-semibold text-red-600">- Dr. Sarah Chen, Founder & CEO</p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Working with a team of technology experts and medical professionals, Dr. Chen began developing what would become 1MDM. The name stands for "One Medical Devices Market" - reflecting our vision of creating a unified, global marketplace for medical equipment.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                The early days were challenging. We had to build trust with both suppliers and buyers in an industry where relationships and reputation were everything. We started small, focusing on basic medical supplies and gradually expanding our catalog and capabilities.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Our breakthrough came in 2020 when we successfully facilitated the distribution of critical PPE to over 10,000 healthcare facilities across 50 countries during the height of the COVID-19 pandemic. This demonstrated the power of our platform and our commitment to supporting healthcare providers when they needed it most.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Today, 1MDM serves over 26 million active buyers globally, processes more than 400,000 product inquiries daily, and operates in 200 countries and regions. But our mission remains the same: to democratize access to medical equipment and improve healthcare outcomes worldwide.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                We've invested heavily in technology, developing AI-powered matching algorithms, comprehensive quality assurance programs, and innovative financing solutions. Our platform now supports everything from basic medical supplies to cutting-edge surgical robots and diagnostic equipment.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                What drives us every day is knowing that somewhere in the world, a healthcare provider is using equipment they found through our platform to save a life, restore mobility, or bring hope to a patient and their family. That's not just business - that's purpose.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="my-12 text-center"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Looking Forward</h3>
                <p className="text-lg">
                  As we continue to grow, our focus remains on innovation, quality, and service. We're developing new technologies like blockchain-based supply chain verification, AI-powered predictive maintenance, and augmented reality product demonstrations. Our goal is not just to be the largest medical equipment marketplace, but to be the most trusted, most innovative, and most impactful.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-center text-red-600"
              >
                Our story is still being written, and we invite you to be part of it.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>

          <div className="space-y-12">
            {[
              { year: '2018', title: 'The Idea', description: 'Dr. Sarah Chen identifies the need for a unified medical equipment marketplace' },
              { year: '2019', title: 'Foundation', description: 'Company founded with initial team of 12 experts' },
              { year: '2020', title: 'Pandemic Response', description: 'Facilitated distribution of critical PPE to 10,000+ facilities' },
              { year: '2021', title: 'Global Expansion', description: 'Reached 100 countries and 1 million active users' },
              { year: '2022', title: 'AI Integration', description: 'Launched AI-powered matching and recommendation systems' },
              { year: '2023', title: 'Market Leadership', description: 'Became the world\'s largest medical equipment marketplace' },
              { year: '2024', title: 'Innovation Hub', description: 'Established R&D centers in 5 continents' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-red-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-red-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurStory;