import {StyledLoader} from './styles'

interface MyLoaderProps {
  active: boolean,
}

export default function MyLoader({ active }: MyLoaderProps) {
  return (
    <StyledLoader
      active={active}
      spinner
    />
  )
}