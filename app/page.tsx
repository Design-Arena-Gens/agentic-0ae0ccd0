'use client'

import { useState } from 'react'
import { Sparkles, MessageCircle, Instagram, Facebook, TrendingUp, Calendar, Hash, MessageSquare } from 'lucide-react'

interface GeneratedContent {
  reelIdea?: string
  caption?: string
  hashtags?: string[]
  storyIdea?: string
  commentReplies?: { trigger: string; reply: string }[]
  dmReplies?: { scenario: string; reply: string }[]
  fbGroupPost?: string
  salesPost?: string
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'daily' | 'comments' | 'facebook' | 'sales'>('daily')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<GeneratedContent>({})

  const generateContent = async (type: string) => {
    setLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type })
      })
      const data = await response.json()
      setContent(prev => ({ ...prev, ...data }))
    } catch (error) {
      console.error('Error generating content:', error)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="gradient-brand text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Sparkles className="w-8 h-8" />
            DreamsLabelsByHarshita
          </h1>
          <p className="text-pink-100 mt-2">AI Social Media Growth Agent</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-pink-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Instagram Reach</p>
                <p className="text-2xl font-bold text-pink-600">Growing</p>
              </div>
              <Instagram className="w-10 h-10 text-pink-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Facebook Groups</p>
                <p className="text-2xl font-bold text-purple-600">Active</p>
              </div>
              <Facebook className="w-10 h-10 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">DM Sales</p>
                <p className="text-2xl font-bold text-yellow-600">Increasing</p>
              </div>
              <TrendingUp className="w-10 h-10 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('daily')}
              className={`flex-1 py-4 px-6 font-medium flex items-center justify-center gap-2 ${
                activeTab === 'daily' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Daily Content
            </button>
            <button
              onClick={() => setActiveTab('comments')}
              className={`flex-1 py-4 px-6 font-medium flex items-center justify-center gap-2 ${
                activeTab === 'comments' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              Comments & DMs
            </button>
            <button
              onClick={() => setActiveTab('facebook')}
              className={`flex-1 py-4 px-6 font-medium flex items-center justify-center gap-2 ${
                activeTab === 'facebook' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Facebook className="w-5 h-5" />
              FB Groups
            </button>
            <button
              onClick={() => setActiveTab('sales')}
              className={`flex-1 py-4 px-6 font-medium flex items-center justify-center gap-2 ${
                activeTab === 'sales' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              Sales Strategy
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'daily' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Daily Content Generation</h2>
                <button
                  onClick={() => generateContent('daily')}
                  disabled={loading}
                  className="gradient-brand text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? 'Generating...' : 'Generate Today\'s Content'}
                  <Sparkles className="w-5 h-5" />
                </button>

                {content.reelIdea && (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
                      <h3 className="font-bold text-lg text-pink-700 mb-2 flex items-center gap-2">
                        <Instagram className="w-5 h-5" />
                        Reel Idea
                      </h3>
                      <p className="text-gray-700">{content.reelIdea}</p>
                    </div>

                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
                      <h3 className="font-bold text-lg text-pink-700 mb-2 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Caption
                      </h3>
                      <p className="text-gray-700 whitespace-pre-wrap">{content.caption}</p>
                    </div>

                    {content.hashtags && (
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
                        <h3 className="font-bold text-lg text-pink-700 mb-2 flex items-center gap-2">
                          <Hash className="w-5 h-5" />
                          Hashtags
                        </h3>
                        <p className="text-gray-700">{content.hashtags.join(' ')}</p>
                      </div>
                    )}

                    {content.storyIdea && (
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
                        <h3 className="font-bold text-lg text-pink-700 mb-2">Story Idea</h3>
                        <p className="text-gray-700">{content.storyIdea}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'comments' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Comment & DM Reply Templates</h2>
                <button
                  onClick={() => generateContent('comments')}
                  disabled={loading}
                  className="gradient-brand text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? 'Generating...' : 'Generate Reply Templates'}
                  <MessageCircle className="w-5 h-5" />
                </button>

                {content.commentReplies && (
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-pink-700">Comment Replies</h3>
                    {content.commentReplies.map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
                        <p className="font-semibold text-gray-800">When they say: "{item.trigger}"</p>
                        <p className="text-gray-700 mt-2">Reply: {item.reply}</p>
                      </div>
                    ))}
                  </div>
                )}

                {content.dmReplies && (
                  <div className="space-y-4 mt-6">
                    <h3 className="font-bold text-lg text-pink-700">DM Replies</h3>
                    {content.dmReplies.map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
                        <p className="font-semibold text-gray-800">{item.scenario}</p>
                        <p className="text-gray-700 mt-2 whitespace-pre-wrap">{item.reply}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'facebook' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Facebook Group Posts</h2>
                <button
                  onClick={() => generateContent('facebook')}
                  disabled={loading}
                  className="gradient-brand text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? 'Generating...' : 'Generate FB Group Post'}
                  <Facebook className="w-5 h-5" />
                </button>

                {content.fbGroupPost && (
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
                    <h3 className="font-bold text-lg text-pink-700 mb-4">Facebook Group Post</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{content.fbGroupPost}</p>
                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-sm text-yellow-800">
                        <strong>Reminder:</strong> Post in women's fashion & ethnic wear groups that don't require admin approval. Keep it natural and non-spammy.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'sales' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Sales Growth Strategy</h2>
                <button
                  onClick={() => generateContent('sales')}
                  disabled={loading}
                  className="gradient-brand text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? 'Generating...' : 'Generate Sales Content'}
                  <TrendingUp className="w-5 h-5" />
                </button>

                {content.salesPost && (
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
                    <h3 className="font-bold text-lg text-pink-700 mb-4">Sales & Urgency Post</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{content.salesPost}</p>
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                      <p className="text-sm text-green-800">
                        <strong>Sales Tip:</strong> Use this for creating urgency. Always include "DM for price" or "WhatsApp to order" as CTA.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Brand Voice Reminder */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-md border-l-4 border-pink-500">
          <h3 className="font-bold text-lg text-pink-700 mb-2">🌸 Brand Voice Guidelines</h3>
          <ul className="text-gray-700 space-y-1">
            <li>✨ Feminine, warm, trustworthy, and helpful</li>
            <li>💬 Use friendly Hinglish/English suitable for Indian women</li>
            <li>🚫 Never pushy or robotic</li>
            <li>📱 Always direct to DM/WhatsApp (NO website links)</li>
            <li>❤️ Focus on comfort, quality, affordability, and style</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="gradient-brand text-white text-center p-4 mt-12">
        <p className="text-pink-100">© 2025 DreamsLabelsByHarshita - Powered by AI 🌸</p>
      </footer>
    </div>
  )
}
