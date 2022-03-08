import {
  Container,
  ContentContainer,
  FooterContainer
} from './styles';

import ActionHeader from '../../components/ActionHeader';
import {CompanyAppointment} from '../../components/Appointment';
import { findAllCompanies } from '../../services/hooks/useCompanyFetch';
import { ICompanyRequest } from '../../components/Modal/Device/ModalConnectDevice ';




function Companies ():JSX.Element {

  const {fullData} = findAllCompanies<ICompanyRequest>()
  return (
    <Container>
      <ActionHeader 
        buttonFilter
        buttonRegister
        registerbuttonClick={() => console.log('modal')}
      />
      <ContentContainer>
        {fullData.map( company => (
          <CompanyAppointment
            key={company.id} 
            values={company}
          />
        ))}
      </ContentContainer>
      <FooterContainer />
    </Container>
  );
};

export {Companies}