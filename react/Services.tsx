import * as React from 'react'

import ServiceCard from './components/cards'
import * as S from './styles/services'

import qualityImage from './assets/cards/flip-delivery-squads.jpg';
import growthImage from './assets/cards/flip-exp-design.jpg';
import experienceImage from './assets/cards/flip-growth.jpg';
import tecnologyImage from './assets/cards/flip-tecnology.jpg';
interface ServicesProps {}

const Services: StorefrontFunctionComponent<ServicesProps> = ({}) => {
  return (
    <S.ServicesContainer>
      <ServiceCard
        Image={qualityImage}
        mainTitle="Quality Assurance"
        hoverTitle="Confiança e credibilidade"
        text="Um sistema de garantia de qualidade tem como objetivo aumentar a
              confiança e a credibilidade de produtos, processos e serviços. Ao
              mesmo tempo que melhora os processos de trabalho e a eficiência,
              além de permitir que a empresa tenha máximo controle e prevenção
              contra defeitos e mal funcionamento."
        link="https://frontend--hiringcoders202125.myvtex.com/quality-assurance/p"
      />
      <ServiceCard
        Image={growthImage}
        mainTitle="Growth e Data"
        hoverTitle="Insights para o amanhã"
        text="Os dados são a nova moeda, portanto, a aplicação de um processo
              de análise de dados é fundamental para as empresas na era digital.
              O processo de coleta, organização, descrição, análise e interpretação
              de dados pode fornecer aos tomadores de decisão as informações
              necessárias para prever o futuro."
        link="https://frontend--hiringcoders202125.myvtex.com/data-growth/p"
      />
      <ServiceCard
        Image={experienceImage}
        mainTitle="Experience Design"
        hoverTitle="Conectando com pessoas"
        text="Experience design é uma questão de empatia. Ao criar experiências,
              estamos tentando ver o mundo através dos olhos do cliente e imaginar
              o que ele estará procurando ao navegar em nossos sistemas. A experiência
              do usuário é uma ferramenta estratégica de negócios se você aplicar aos
              seus projetos e processos de forma inteligente."
        link="https://frontend--hiringcoders202125.myvtex.com/experience-design/p"
      />
      <ServiceCard
        Image={tecnologyImage}
        mainTitle="Tecnologia"
        hoverTitle="Criando o futuro"
        text="Na ACCT vivemos e respiramos o desenvolvimento de software. Mais de 60%
              de nossos funcionários são engenheiros de software. Como uma empresa
              enraizada nas melhores práticas de desenvolvimento, nossa responsabilidade
              como engenheiros e criadores se expressa através do desenvolvimento de
              soluções digitais."
        link="https://frontend--hiringcoders202125.myvtex.com/tecnologia/p"
      />
    </S.ServicesContainer>
  )
}

Services.schema = {
  title: 'editor.services.title',
  description: 'editor.services.description',
  type: 'object',
  properties: {
    title: 'date',
    description: 'date countdown',
    growthImage: {
      title: 'date',
      description: 'date countdown',
      type: 'string',
      default: '',
    },
    experienceImage: {
      title: 'date',
      description: 'date countdown',
      type: 'string',
      default: '',
    },
    tecnologyImage: {
      title: 'date',
      description: 'date countdown',
      type: 'string',
      default:'',
    },
  },
}

export default Services
