import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Next-Gen Trading Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Powered by advanced Large Language Models, our AI trading system achieves exceptional win rates through sophisticated market analysis and pattern recognition.
          </p>
          <button className="button text-lg">Explore Our Technology</button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="performance" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary mb-2">87%</div>
              <div className="text-gray-600">Win Rate</div>
              <p className="mt-4 text-sm text-gray-500">Verified through extensive backtesting</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary mb-2">2.8x</div>
              <div className="text-gray-600">Return Multiplier</div>
              <p className="mt-4 text-sm text-gray-500">Average monthly performance</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary mb-2">0.92</div>
              <div className="text-gray-600">Sharpe Ratio</div>
              <p className="mt-4 text-sm text-gray-500">Risk-adjusted return metric</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Advanced LLM Architecture</h3>
              <p className="text-gray-600">
                Our system utilizes state-of-the-art language models fine-tuned specifically for market analysis and pattern recognition in trading data.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Multi-layer transformer architecture</li>
                <li>• Real-time market data processing</li>
                <li>• Adaptive learning capabilities</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Verification System</h3>
              <p className="text-gray-600">
                Every trading decision is backed by our robust verification system that ensures accuracy and reliability.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Multi-factor confirmation</li>
                <li>• Risk assessment protocols</li>
                <li>• Historical pattern matching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Trading?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the next generation of AI-powered trading and experience the future of financial markets.
          </p>
          <button className="button text-lg">Get Started Now</button>
        </div>
      </section>
    </div>
  )
} 