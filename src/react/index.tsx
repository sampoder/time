import { useState, useEffect } from 'react'
import { useLightningTimeClockCore } from '../use-lightning-time-clock-core'

export function useLightningTimeClock() {
  return useLightningTimeClockCore({ useState, useEffect })
}
