import { ChevronRight, Shield, Zap, Globe, TrendingUp, CheckCircle2, AlertCircle, FileCheck, Leaf, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

export default function LandingPage({ onStartAssessment }) {
  const scrollToFeatures = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-farming-darker text-farming-text overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-b from-farming-darker via-farming-darker to-transparent backdrop-blur-lg border-b border-farming-border-light">
        <div className="section-container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-farming-green to-farming-green-dark rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all">
              <Leaf className="text-farming-darker w-6 h-6" />
            </div>
            <span className="font-black text-xl text-gradient">Beyond Farming</span>
          </div>
          <Button onClick={onStartAssessment} size="md">
            Start Free Assessment
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-24 md:pb-40 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="space-y-8 max-w-4xl mx-auto text-center animate-fade-in">
            {/* Badge */}
            <div className="inline-block animate-float">
              <div className="badge bg-farming-green bg-opacity-10 border border-farming-green border-opacity-50 text-farming-green font-semibold px-4 py-2">
                🚀 AI-Powered Export Intelligence
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Predict Export Rejection Before It Happens
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-farming-text-muted max-w-3xl mx-auto leading-relaxed">
              AI-powered compliance intelligence, traceability readiness, and actionable export guidance for farmers, aggregators, and export partners.
            </p>

            {/* Key Statement */}
            <div className="pt-4 border-t border-farming-border-light max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-gradient italic leading-relaxed">
                "Compliance Failure, Not Crop Failure"
              </p>
              <p className="text-sm text-farming-text-muted mt-3">
                Turn compliance risks into competitive advantages
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
              <Button
                onClick={onStartAssessment}
                variant="primary"
                size="lg"
                icon={ChevronRight}
                iconPosition="right"
              >
                Check Export Readiness
              </Button>
              <Button
                onClick={scrollToFeatures}
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Platform
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-farming-darker via-farming-darker to-transparent pointer-events-none"></div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 border-y border-farming-border-light bg-glass-light backdrop-blur-sm">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-gradient">50M+</p>
              <p className="text-sm text-farming-text-muted mt-2">Farmers Protected</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-gradient">120+</p>
              <p className="text-sm text-farming-text-muted mt-2">Export Markets Covered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-gradient">99.2%</p>
              <p className="text-sm text-farming-text-muted mt-2">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-gradient">2M+</p>
              <p className="text-sm text-farming-text-muted mt-2">Assessments Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="section py-12 md:py-20">
        <div className="section-container">
          <SectionHeader
            title="Why Export Batches Get Rejected"
            subtitle="Every year, millions worth of agricultural exports are rejected at borders. Here's why."
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-premium group">
              <div className="w-12 h-12 bg-red-900 bg-opacity-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-100 transition-all">
                <AlertCircle className="text-red-300 w-6 h-6" />
              </div>
              <h3 className="card-title mb-2">Residue Compliance</h3>
              <p className="body-text-sm">
                Chemical residues exceed MRL (Maximum Residue Limits) set by importing countries, causing immediate rejection.
              </p>
            </div>

            <div className="card-premium group">
              <div className="w-12 h-12 bg-yellow-900 bg-opacity-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-100 transition-all">
                <Shield className="text-yellow-300 w-6 h-6" />
              </div>
              <h3 className="card-title mb-2">Traceability Gaps</h3>
              <p className="body-text-sm">
                Missing documentation, spray records, or farmer information prevents buyer verification and market entry.
              </p>
            </div>

            <div className="card-premium group">
              <div className="w-12 h-12 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-100 transition-all">
                <CheckCircle2 className="text-blue-300 w-6 h-6" />
              </div>
              <h3 className="card-title mb-2">Certification Readiness</h3>
              <p className="body-text-sm">
                Lack of proper certifications or compliance with market-specific standards leads to buyer refusal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section id="capabilities" className="section py-12 md:py-20 bg-farming-card bg-opacity-40 border-y border-farming-border">
        <div className="section-container">
          <SectionHeader
            title="Platform Capabilities"
            subtitle="Everything farmers need to succeed in global export markets"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="card group hover:shadow-glow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-farming-green to-farming-green-dark rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                <Zap className="text-farming-darker w-7 h-7" />
              </div>
              <h3 className="card-title text-gradient mb-2">Predict Export Risk</h3>
              <p className="body-text-sm mb-4">
                AI-driven analysis of residue compliance, timing windows, and market-specific regulations before rejection.
              </p>
              <p className="text-xs text-farming-green font-semibold">✓ Real-time analysis</p>
            </div>

            {/* Feature 2 */}
            <div className="card group hover:shadow-glow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-farming-green to-farming-green-dark rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                <FileCheck className="text-farming-darker w-7 h-7" />
              </div>
              <h3 className="card-title text-gradient mb-2">Traceability Summary</h3>
              <p className="body-text-sm mb-4">
                Complete documentation of crop history, inputs, farming practices, and certification status for buyers.
              </p>
              <p className="text-xs text-farming-green font-semibold">✓ Audit-ready records</p>
            </div>

            {/* Feature 3 */}
            <div className="card group hover:shadow-glow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-farming-green to-farming-green-dark rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                <Globe className="text-farming-darker w-7 h-7" />
              </div>
              <h3 className="card-title text-gradient mb-2">Local Language Guidance</h3>
              <p className="body-text-sm mb-4">
                Actionable recommendations in your language with step-by-step guidance to prepare for successful export.
              </p>
              <p className="text-xs text-farming-green font-semibold">✓ Multi-language support</p>
            </div>
          </div>

          {/* Additional benefits */}
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-glass-effect">
              <TrendingUp className="w-5 h-5 text-farming-green flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-farming-text">Buyer Confidence Metrics</p>
                <p className="text-sm text-farming-text-muted mt-1">Traceability, residue risk, and certification readiness indicators</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-glass-effect">
              <Shield className="w-5 h-5 text-farming-green flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-farming-text">Risk Mitigation Timeline</p>
                <p className="text-sm text-farming-text-muted mt-1">Clear waiting periods and recommended actions before export</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section py-12 md:py-20">
        <div className="section-container">
          <SectionHeader
            title="Workflow"
            subtitle="From crop details to export-ready guidance in three simple steps"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-6 items-start group animate-slide-up">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-farming-green to-farming-green-dark text-farming-darker font-bold shadow-glow group-hover:scale-110 transition-transform">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="card-title mb-2">Enter Crop & Market Details</h3>
                  <p className="body-text-sm">
                    Provide information about your crop, target market, farm location, and recent chemical/input usage. Our system secures all data with enterprise-grade encryption.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-farming-green to-transparent"></div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start group animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-farming-green to-farming-green-dark text-farming-darker font-bold shadow-glow group-hover:scale-110 transition-transform">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="card-title mb-2">AI Analyzes Compliance</h3>
                  <p className="body-text-sm">
                    Our AI engine cross-references your data against 120+ export markets' residue limits, certification requirements, and traceability standards in real-time.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-farming-green to-transparent"></div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start group animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-farming-green to-farming-green-dark text-farming-darker font-bold shadow-glow group-hover:scale-110 transition-transform">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="card-title mb-2">Get Export-Ready Guidance</h3>
                  <p className="body-text-sm">
                    Receive actionable recommendations, risk alerts, certification readiness metrics, and local language guidance to ensure successful export market entry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-12 md:py-20 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="bg-gradient-to-r from-farming-card via-farming-accent to-farming-card border border-farming-border-light rounded-3xl p-8 md:p-16 text-center shadow-card-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Ready to Export Successfully?
            </h2>
            <p className="text-lg text-farming-text-muted max-w-2xl mx-auto mb-8">
              Get your AI-powered export readiness assessment in minutes. Understand compliance risks before your produce reaches the border.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button
                onClick={onStartAssessment}
                variant="primary"
                size="lg"
                icon={ChevronRight}
                iconPosition="right"
              >
                Start Free Assessment
              </Button>
              <p className="text-xs text-farming-text-muted">
                ✓ No credit card required  •  ✓ Results in 2 minutes  •  ✓ Secure & Private
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-farming-border py-8 md:py-12 bg-gradient-to-b from-transparent to-farming-darker">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-farming-text mb-3 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-farming-green to-farming-green-dark rounded-lg flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-farming-darker" />
                </div>
                Beyond Farming
              </p>
              <p className="text-sm text-farming-text-muted">
                Export compliance intelligence for global agriculture
              </p>
            </div>
            <div>
              <p className="font-semibold text-farming-text text-sm mb-2">Platform</p>
              <ul className="space-y-1 text-sm text-farming-text-muted">
                <li><a href="#" className="hover:text-farming-green transition-colors">For Farmers</a></li>
                <li><a href="#" className="hover:text-farming-green transition-colors">For Aggregators</a></li>
                <li><a href="#" className="hover:text-farming-green transition-colors">For Exporters</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-farming-text text-sm mb-2">Resources</p>
              <ul className="space-y-1 text-sm text-farming-text-muted">
                <li><a href="#" className="hover:text-farming-green transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-farming-green transition-colors">Compliance Rules</a></li>
                <li><a href="#" className="hover:text-farming-green transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-farming-text text-sm mb-2">Company</p>
              <ul className="space-y-1 text-sm text-farming-text-muted">
                <li><a href="#" className="hover:text-farming-green transition-colors">About</a></li>
                <li><a href="#" className="hover:text-farming-green transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-farming-green transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-farming-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-farming-text-muted">
              © 2026 Beyond Farming. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm text-farming-text-muted">
              <a href="#" className="hover:text-farming-green transition-colors">Privacy</a>
              <a href="#" className="hover:text-farming-green transition-colors">Terms</a>
              <a href="#" className="hover:text-farming-green transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
