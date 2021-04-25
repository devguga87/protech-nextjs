import Head from 'next/head';

import { CodeCases } from '../../../components/CodeCases';
import { IntroContainer } from '../../../components/IntroContainer';

import cases from '../../../../cases.json';

interface Image {
  id: number;
  name: string;
}

interface CaseProps {
  case: {
    title: string;
    description: string;
    client: string;
    date: string;
    link?: string;
    images: Image[];
  };
}

export default function Case(props: CaseProps) {
  return (
    <>
      <Head>
        <title>Protech | {props.case.title}</title>
      </Head>
      <IntroContainer title={props.case.title} />
      <CodeCases
        description={props.case.description}
        client={props.case.client}
        date={props.case.date}
        images={props.case.images}
        link={props.case.link}
      />
    </>
  );
}

Case.getInitialProps = ({ query }) => {
  return {
    case: cases[query.id],
  };
};
