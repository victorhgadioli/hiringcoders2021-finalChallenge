import * as React from 'react';
import * as S from './styled';

interface ICardService {
  Image: string;
  mainTitle: string;
  hoverTitle: string;
  text: string;
  link: string;
}

const ServiceCard: React.FC<ICardService> = ({
  Image,
  mainTitle,
  hoverTitle,
  text,
  link,
}) => {
  return (
    <S.Card url={Image}>
      <S.MainContent>
        <h4>
          {mainTitle} <span>_</span>
        </h4>
      </S.MainContent>
      <S.HoverContent>
        <h3>{hoverTitle}</h3>
        <p>{text}</p>
        <a href={link}>
          <span>CONTRATAR</span>
        </a>
      </S.HoverContent>
    </S.Card>
  );
};

export default ServiceCard;
