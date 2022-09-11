import styled from "styled-components";
import styles from "../../styles/styles";

const DetailedCardStyled = styled.div`
  .details-container {
    background-color: ${styles.colors.backgroundDark};
    padding: 20px;
    color: ${styles.colors.backgroundLight};
    height: 100vh;

    .details-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .generic {
      @media (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        width: 60%;
        justify-content: space-between;
      }

      .details-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 22px;
        gap: 20px;
      }
    }

    .details-group {
      display: flex;
      flex-direction: column;
    }

    .details-group-title {
      margin: 0;
      font-size: 18px;
      font-weight: 400;
    }

    .details-group-content {
      font-size: 24px;
      color: ${styles.colors.globalGreen};
      font-weight: 600;

      &.renderImage {
        width: 80px;
        height: 55px;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .details-values {
      display: flex;
      flex-direction: row;
      margin: 20px 0;

      .details-group {
        flex: 1 1 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }

    .details-values > li:nth-child(1) {
      margin-right: 40px;
    }

    .details-values > li:nth-child(2) {
      margin-right: 40px;
    }

    .details-values > li:nth-child(3) {
      margin-right: 0;
    }

    .buttons-container {
      display: flex;
      flex-direction: column;
      gap: 20px 0;
    }
  }
`;

export default DetailedCardStyled;
