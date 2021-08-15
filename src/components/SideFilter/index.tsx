import {FiX} from 'react-icons/fi'

import {RightFilterContainer, SideFilterContainer} from './styles'

interface SideFilterProps {
  closeSideFilter: () => void;
}

const SideFilters: React.FC<SideFilterProps> = ({
  closeSideFilter
}) => {
  return (
    <>
      <SideFilterContainer />
      <RightFilterContainer>
        <FiX 
          onClick={() => closeSideFilter()}
          size={36}
        />
        <h3>
          <strong>
            Filtro
          </strong>
        </h3>
      </RightFilterContainer>
    </>  
  )
}

export default SideFilters