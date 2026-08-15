import { FC } from 'react'

import ScrambleText from '../ScrambleText'

const AdminisTitle = 'λdminis'

const Adminis: FC = () => (
  <span style={{ userSelect: 'none' }} aria-label='Adminis Title'>
    &#91; <ScrambleText text={AdminisTitle} startOnLoad /> &#93;
  </span>
)

export default Adminis
