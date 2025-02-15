import { FC } from 'react'
import ScrambleText from '../ScrambleText'

const AdminisTitle = 'λdminis'

const Adminis: FC = () => (
  <span style={{ userSelect: 'none' }} aria-label='Adminis Title'>
    <ScrambleText text={AdminisTitle} />
  </span>
)

export default Adminis
