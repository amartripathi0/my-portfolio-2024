'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionDiv = motion.div
const MotionSection = motion.section
const MotionSpan = motion.span
const MotionH1 = motion.h1
const MotionNav = motion.nav
const MotionH3 = motion.h3
const MotionLink = motion(Link)

export { MotionDiv, MotionSection, MotionSpan, MotionH1, MotionNav, MotionH3, MotionLink }
