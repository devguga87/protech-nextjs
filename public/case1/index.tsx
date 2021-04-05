import { CodeCases } from '../../components/CodeCases'
import { IntroContainer } from '../../components/IntroContainer';

export default function Cases(){
  const images = [{id:1,name:'/1.png'}]

  return(
    <>
      <IntroContainer title='Portal de Doações - Synapse' />

      <CodeCases
        description='Desenvolver um site de doações web, objetivando financiamento
        do programa e ações voltadas à Rede de Professores de Sergipe. Pessoas jurídicas e
        físicas, via web (site) vão poder conhecer o programa e as ações da RPS e poderão fazer doações por meio de boleto bancário,
        Paypal, cartão de crédito Banese Card e de outras bandeiras. Deverá ser criado um portal de transparência sendo disponibilizado a todos.'
        client='Banese Card | IPTI'
        date='Junho 2019'
        images='/2.png'
        link='https://www.ipti.org.br/projetos/synapse/'
      />

    </>
  )
}
