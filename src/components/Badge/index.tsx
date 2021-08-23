/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Container } from "./styles";

interface IBadgeProps {
  status: 'pending' | 'active' | 'blocked' | 'inactive';
  value: string;
  clickable: boolean;
  onClick: () => void;
}


function Badge ({
  value,
  status,
  clickable = false,
  onClick
}: IBadgeProps ): JSX.Element {
  console.log(status)
  return (
    <Container 
      status={status}
    >
      <aside
        onClick={onClick}
      >
        <h6>{value}</h6>
      </aside>
    </Container>
  )
}

export default Badge;