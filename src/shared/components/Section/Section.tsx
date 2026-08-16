import { ComponentPropsWithoutRef, forwardRef } from 'react'

import styles from './Section.module.css'

type SectionProps = ComponentPropsWithoutRef<'section'>

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, ...rest }, ref) => (
    <section className={styles.section} ref={ref} {...rest}>
      {children}
    </section>
  )
)

Section.displayName = 'Section'

export default Section
