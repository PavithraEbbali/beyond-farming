import { useState } from 'react'
import LandingPage from './pages/Landing'
import AssessmentPage from './pages/Assessment'
import ResultsPage from './pages/Results'
import StepIndicator from './components/StepIndicator'

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [formData, setFormData] = useState(null)
  const [analysisResults, setAnalysisResults] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleStartAssessment = () => {
    setCurrentPage('assessment')
    window.scrollTo(0, 0)
  }

  const handleSubmitAssessment = async (data) => {
    setFormData(data)
    setLoading(true)

    try {
      const response = await fetch('/api/analyze-export-readiness', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze export readiness')
      }

      const results = await response.json()
      setAnalysisResults(results)
      setCurrentPage('results')
      window.scrollTo(0, 0)
    } catch (error) {
      console.error('Error:', error)
      alert('Error analyzing export readiness. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleNewAssessment = () => {
    setFormData(null)
    setAnalysisResults(null)
    setCurrentPage('assessment')
    window.scrollTo(0, 0)
  }

  const handleBackToLanding = () => {
    setCurrentPage('landing')
    setFormData(null)
    setAnalysisResults(null)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-farming-darker">
      {currentPage !== 'landing' && (
        <StepIndicator
          current={currentPage === 'assessment' ? 1 : currentPage === 'results' ? 3 : 1}
          onBackClick={handleBackToLanding}
        />
      )}

      {currentPage === 'landing' && (
        <LandingPage onStartAssessment={handleStartAssessment} />
      )}

      {currentPage === 'assessment' && (
        <AssessmentPage onSubmit={handleSubmitAssessment} loading={loading} />
      )}

      {currentPage === 'results' && (
        <ResultsPage
          results={analysisResults}
          formData={formData}
          onNewAssessment={handleNewAssessment}
        />
      )}
    </div>
  )
}
