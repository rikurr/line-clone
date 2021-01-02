import React from "react"
import styles from './index.module.css'

export const LoadingSpinner:React.FC = () => {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer}></div>
    </div>
  )
}
