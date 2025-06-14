
import { motion } from 'framer-motion';


const Pricing = () => {
  const plans = [
    {
      name: 'Standard',
      price: '$3,499',
      period: '/year',
      monthly: '$291.5',
      monthlyLabel: '/month',
      features: [
        'Platform features: Unlimited',
        'Fast payouts: Unlimited',
        'Receive & respond inquiry fees: USD $20/ea',
        'Keyword ads spend: 20',
        'Showcased products: 60/month',
        'Fee point for RFQs: 60/month',
        'Keyword Trends: 5',
        'VIP tag traffic acceleration: 5',
        'Sub-accounts: Yes',
        'Website-to-shipping Case (POs countries): Yes',
        'Onboarding (live Q&A): 75',
        'Product post guarantee: Yes',
        'Multi-destination: 75',
        'Feature configuration: Dedicated account manager',
        'Account manager: Dedicated account manager',
        'US-based key Success Program (API): Not available'
      ],
      buttonText: 'Select & Pay',
      isPopular: false
    },
    {
      name: 'Standard Extended',
      price: '$5,299',
      period: '/year',
      monthly: '$441.5',
      monthlyLabel: '/month',
      badge: '2-year with 20% savings',
      features: [
        'Platform features: Unlimited',
        'Fast payouts: Unlimited',
        'Receive & respond inquiry fees: USD $20/ea',
        'Keyword ads spend: 20',
        'Showcased products: 60/month',
        'Fee point for RFQs: 60/month',
        'Keyword Trends: 5',
        'VIP tag traffic acceleration: 5',
        'Sub-accounts: Yes',
        'Website-to-shipping Case (POs countries): Yes',
        'Onboarding (live Q&A): 75',
        'Product post guarantee: Yes',
        'Multi-destination: 75',
        'Feature configuration: Dedicated account manager',
        'Account manager: Dedicated account manager',
        'US-based key Success Program (API): Not available'
      ],
      buttonText: 'Select & Pay',
      isPopular: true
    },
    {
      name: 'Premium',
      price: '$6,999',
      period: '/year',
      monthly: '$583.2',
      monthlyLabel: '/month',
      features: [
        'Platform features: Unlimited',
        'Fast payouts: Unlimited',
        'Receive & respond inquiry fees: USD $20/ea',
        'Keyword ads spend: 20',
        'Showcased products: 60/month',
        'Fee point for RFQs: 60/month',
        'Keyword Trends: 5',
        'VIP tag traffic acceleration: No',
        'Sub-accounts: Yes',
        'Website-to-shipping Case (POs countries): Yes',
        'Onboarding (live Q&A): 100',
        'Product post guarantee: Yes',
        'Multi-destination: 100',
        'Feature configuration: Dedicated account manager',
        'Account manager: NYC-based Key Account Manager',
        'US-based key Success Program (API): Not available'
      ],
      buttonText: 'Select & Pay',
      isPopular: false
    }
  ];

  const features = [
    'Platform features',
    'Fast payouts',
    'Receive & respond inquiry fees',
    'Keyword ads spend',
    'Showcased products',
    'Fee point for RFQs',
    'Keyword Trends',
    'VIP tag traffic acceleration',
    'Sub-accounts',
    'Website-to-shipping Case (POs countries)',
    'Onboarding (live Q&A)',
    'Product post guarantee',
    'Multi-destination',
    'Feature configuration',
    'Account manager',
    'US-based key Success Program (API)'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Reach millions of B2B buyers globally
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose an 1mdm.com seller plan to launch your new business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-lg shadow-lg border-2 p-8 ${
                  plan.isPopular ? 'border-red-600' : 'border-gray-200'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {plan.monthly} <span className="text-xs">{plan.monthlyLabel}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors mb-8"
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 w-1/4">
                      Platform features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      Standard
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900 bg-red-50">
                      Standard Extended
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Fast payouts', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
                    { feature: 'Receive & respond inquiry fees', values: ['USD $20/ea', 'USD $20/ea', 'USD $20/ea'] },
                    { feature: 'Keyword ads spend', values: ['20', '20', '20'] },
                    { feature: 'Showcased products', values: ['60/month', '60/month', '60/month'] },
                    { feature: 'Fee point for RFQs', values: ['60/month', '60/month', '60/month'] },
                    { feature: 'Keyword Trends', values: ['5', '5', '5'] },
                    { feature: 'VIP tag traffic acceleration', values: ['5', '5', 'No'] },
                    { feature: 'Sub-accounts', values: ['Yes', 'Yes', 'Yes'] },
                    { feature: 'Website-to-shipping Case (POs countries)', values: ['Yes', 'Yes', 'Yes'] },
                    { feature: 'Onboarding (live Q&A)', values: ['75', '75', '100'] },
                    { feature: 'Product post guarantee', values: ['Yes', 'Yes', 'Yes'] },
                    { feature: 'Multi-destination', values: ['75', '75', '100'] },
                    { feature: 'Feature configuration', values: ['Dedicated account manager', 'Dedicated account manager', 'Dedicated account manager'] },
                    { feature: 'Account manager', values: ['Dedicated account manager', 'Dedicated account manager', 'NYC-based Key Account Manager'] },
                    { feature: 'US-based key Success Program (API)', values: ['Not available', 'Not available', 'Not available'] }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">
                        {row.values[0]}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center bg-red-50">
                        {row.values[1]}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">
                        {row.values[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom buttons */}
            <div className="bg-gray-50 px-6 py-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-red-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    Select & Pay
                  </motion.button>
                </div>
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-red-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    Select & Pay
                  </motion.button>
                </div>
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-red-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    Select & Pay
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need help picking the best plan?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a free personal demo without customer success professional to get more advice for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Talk to sales
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;