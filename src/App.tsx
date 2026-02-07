import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-200">
      <div className="bg-white rounded-2xl shadow-xl w-[350px] p-6 text-center">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold text-pink-700"
        >
          Will you be my Valentine?
        </motion.h1>

        {!accepted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 space-y-3"
          >
            <button
              className="w-full bg-pink-500 text-white py-2 rounded-md"
              onClick={() => setAccepted(true)}
            >
              Yes! 💖
            </button>
            <button className="w-full border border-pink-600 text-pink-600 py-2 rounded-md">
              No 😢
            </button>
          </motion.div>
        )}

        {accepted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            className="mt-6 text-lg text-pink-600 font-semibold"
          >
            ❤️ Yay! I’m so happy! 💕
          </motion.p>
        )}
      </div>
    </div>
  )
}
