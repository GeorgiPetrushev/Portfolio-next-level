import styled from "styled-components";

const StyledAbout = styled.div`

.about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 5rem;
}

.about__img {
    width: 350px;
    border-radius: 1.5rem;
    justify-self: center;
}

.about__info {
    grid-template-columns: repeat(3, 140px);
    gap: 0.5rem;
    margin-bottom: var(--mb-2);
}

.about__box {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.75rem;
    text-align: center;
    padding: 1rem 1.25rem;
}

.about__icon {
    font-size: 1.5rem;
    color: var(--title-color);
    margin-bottom: var(--mb-0-5);
}

.about__title {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
}

.about__subtitle {
    font-size: var(--tiny-font-size);
}

.about__description {
    text-align: justify;
    margin-bottom: var(--mb-2-5);
}


/*=============== BREAKPOINTS ===============*/
/* For large devices */
@media screen and (max-width: 992px) {
    .about__container {
        grid-template-columns: 1fr;
        row-gap: 2.5rem;
    }

    .about__img {
        width: 220px;
    }

    .about__box {
        padding: 0.75rem 0.5rem;
    }

    .about__data {
        text-align: center;
    }

    .about__info {
        justify-content: center;
    }

    .about__description {
        padding: 0 5rem;
        margin-bottom: 2rem;
    }
  }
  
  /* For medium devices */
  @media screen and (max-width: 576px) {
    .about__info {
        grid-template-columns: repeat(3, 1fr);
    }

    .about__description {
        padding: 0;
    }
  }
  
  /* For small devices */
  @media screen and (max-width: 350px) {
    .about__info {
        grid-template-columns: repeat(2, 1fr);
    }
  }

`;

export default StyledAbout;