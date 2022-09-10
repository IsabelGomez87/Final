import { Card } from "../../features/cards/models/card";
import FutCardStyled from "./FutCardsStyled";
import { FaTimesCircle } from "react-icons/fa";
import { useAppSelector } from "../../app/store/hooks";
import useApi from "../../hooks/cards/useAPI";
import { useNavigate } from "react-router-dom";

interface FutCardProps {
  card: Card;
}

const FutCard = ({ card }: FutCardProps): JSX.Element => {
  const { id } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  const { deleteCard } = useApi();

  const handleDelete = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    deleteCard(card.id);
  };

  return (
    <FutCardStyled>
      <div className="card-container">
        <div
          className="card"
          onClick={() => {
            navigate(`/cards/details/${card.id}`);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.3 427.3">
            <clipPath id="svgPath">
              <path
                fill="#000"
                d="M265.3 53.9a33.3 33.3 0 0 1-17.8-5.5 32 32 0 0 1-13.7-22.9c-.2-1.1-.4-2.3-.4-3.4 0-1.3-1-1.5-1.8-1.9a163 163 0 0 0-31-11.6A257.3 257.3 0 0 0 133.7 0a254.9 254.9 0 0 0-67.1 8.7 170 170 0 0 0-31 11.6c-.8.4-1.8.6-1.8 1.9 0 1.1-.2 2.3-.4 3.4a32.4 32.4 0 0 1-13.7 22.9A33.8 33.8 0 0 1 2 53.9c-1.5.1-2.1.4-2 2v293.9c0 3.3 0 6.6.4 9.9a22 22 0 0 0 7.9 14.4c3.8 3.2 8.3 5.3 13 6.8 12.4 3.9 24.8 7.5 37.2 11.5a388.7 388.7 0 0 1 50 19.4 88.7 88.7 0 0 1 25 15.5v.1-.1c7.2-7 16.1-11.3 25-15.5a427 427 0 0 1 50-19.4l37.2-11.5c4.7-1.5 9.1-3.5 13-6.8 4.5-3.8 7.2-8.5 7.9-14.4.4-3.3.4-6.6.4-9.9V231.6 60.5v-4.6c.4-1.6-.3-1.9-1.7-2z"
              />
            </clipPath>
          </svg>
          <div className="card-inner">
            <div className="card-top">
              <div className="info">
                <div className="value">{card.overall}</div>
                <div className="position">{card.position}</div>
                <div className="country">
                  <img src={card.nacionallity} alt="country flag" />
                </div>
                <div className="club">
                  <img src={card.team} alt="club of football" />
                </div>
              </div>

              <img className="image" src={card.image} alt="player avatar"></img>
            </div>
            <div className="card-bottom">
              <div className="name">{card.name}</div>
              <div className="stats">
                <div>
                  <ul className="stats-list">
                    <li>
                      <span>{card.pace}</span>
                      <span>pac</span>
                    </li>
                    <li>
                      <span>{card.shooting}</span>
                      <span>sho</span>
                    </li>
                    <li>
                      <span>{card.passing}</span>
                      <span>pass</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="stats-list">
                    <li>
                      <span>{card.dribbling}</span>
                      <span>dri</span>
                    </li>
                    <li>
                      <span>{card.defense}</span>
                      <span>def</span>
                    </li>
                    <li>
                      <span>{card.physicall}</span>
                      <span>phy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {card.owner === id && (
          <FaTimesCircle
            className="card-delete"
            onClick={handleDelete}
            data-testid="delete"
          />
        )}
      </div>
    </FutCardStyled>
  );
};

export default FutCard;
