import { Paper, styled } from '@mui/material';
import Companies from '../../components/Companies';
import Guide from '../../components/Guide';
import Hero from '../../components/Hero';
/* 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); */
export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Guide />
    </>
  )
}