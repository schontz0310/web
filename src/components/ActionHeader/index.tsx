import { useEffect , useState } from 'react'

import Button from '../Button'
import SideFilter from '../SideFilter'
import {ActionContainer, FilterButtonArea, RegisterButtonArea} from './styles'

interface IActionHeaderProps {
  children?: React.ReactNode;
  buttonFilter?: boolean;
  showFilter?: boolean;
  buttonRegister?: boolean;
  filterButtonName?: string;
  registerButtonName?: string;
  registerbuttonClick: () => void;
}

const ActionHeader: React.FC<IActionHeaderProps> = ({
  buttonFilter,
  buttonRegister,
  filterButtonName,
  registerButtonName,
  showFilter,
  registerbuttonClick,
}) => {

  const [filterVisible, setFilterVisible] = useState<boolean>(false)

  useEffect(() => {
    if(showFilter === undefined) {
      setFilterVisible(false)
    }else{
      setFilterVisible(showFilter)
    }

  },[showFilter])

  const closeSideFilter = () => {
    setFilterVisible(false)
  }

  return (
    <ActionContainer>
      {buttonRegister && (
        <RegisterButtonArea>
          <Button 
            model='register'
            buttonText={registerButtonName || ''}
            onClick={() => registerbuttonClick()}
          />
        </RegisterButtonArea>
      )}
      {buttonFilter && (
        <FilterButtonArea>
          <Button
            model='filter'
            buttonText={filterButtonName || ''}
            onClick={() => setFilterVisible(true)}
          />
        </FilterButtonArea>
      )}
      {filterVisible && (
        <SideFilter 
          closeSideFilter={() => closeSideFilter()}
        />
      )}
    </ActionContainer>
  )
} 

export default ActionHeader