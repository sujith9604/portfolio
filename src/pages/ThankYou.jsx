// src/pages/ThankYou.jsx
import React from 'react'
import { thanks } from '../data/site'
import './ThankYou.css'

const ThankYou = () => (
  <p className="thanks">
    {thanks} <span className="thanks-heart" aria-hidden="true">💚</span>
  </p>
)

export default ThankYou
