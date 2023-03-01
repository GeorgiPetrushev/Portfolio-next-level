import styled from "styled-components";

const StyleScrollUp = styled.div`
  .scrollup {
    position: fixed;
    right: 2.5rem;
    bottom: -20%;
    background-color: rgba(0,0,0,0.6);
    opacity: 0.8;
    padding: 0.5rem 0.6rem;
    border-radius: 0.3rem;
    z-index: var(--z-tooltip);
    transition: 0.4s;
  }

  .scrollup__icon {
    font-size: 1.9rem;
    color: var(--container-color);
  }

  .scrollup:hover {
    background-color: rgba(0,0,0,0.9);
  }

  /* Show Scroll */
  .show-scroll {
    bottom: 2rem;
  }

  /*=============== BREAKPOINTS ===============*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .scrollup {
      right: 0.5rem;
      padding: 0.25rem 0.4rem;
    }

    .scrollup__icon {
      font-size: 1.55rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .show-scroll {
      bottom: 4rem;
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    .scrollup {
      right: 2rem;
    }
  }
`;

export default StyleScrollUp;
