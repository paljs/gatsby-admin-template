import { createGlobalStyle, css } from 'styled-components';
import { breakpointDown } from 'oah-ui/theme';
/* eslint-disable indent */

const SimpleLayout = createGlobalStyle`
${({ theme, globalStyle }) => css`
  ${globalStyle}

  .column.small {
    flex: 0.15 !important;
  }

  aside.settings-sidebar {
    transition: transform 0.3s ease;
    width: 19rem;
    overflow: hidden;
    transform: translateX(${theme.dir === 'rtl' && '-'}100%);
    &.start {
      transform: translateX(${theme.dir === 'ltr' && '-'}100%);
    }

    &.expanded,
    &.expanded.start {
      transform: translateX(0);
    }

    .scrollable {
      width: 19rem;
      padding: 3.4rem 0.25rem;
    }

    .main-container {
      width: 19rem;
      background: ${theme.colorBg};
      transition: width 0.3s ease;
      overflow: hidden;

      .scrollable {
        width: 19rem;
      }

      ${theme.theme === 'cosmic' && `background: ${theme.layoutBg};`}
    }
  }

  aside.menu-sidebar {
    margin-top: ${theme.sidebarHeaderGap};

    ${theme.theme === 'corporate' && 'margin-top: 0'};

    .main-container {
      height: calc(
        ${theme.sidebarHeight} - ${theme.headerHeight} -
          ${theme.sidebarHeaderGap}
      ) !important;

      ${theme.dir === 'rtl'
        ? `border-top-left-radius: ${theme.radius}`
        : `border-top-right-radius: ${theme.radius}`}

      ${theme.theme === 'corporate' &&
        css`
          border: 1px solid ${theme.separator};
          height: calc(
            ${theme.sidebarHeight} - ${theme.headerHeight}
          ) !important;
        `}
    }

    .scrollable {
      ${theme.theme === 'corporate' &&
        css`
          padding-top: 0;

          .menu-item:first-child {
            border-top: none;
          }
        `}
    }

    & header {
      padding-bottom: 0.5rem;
      text-align: center;
    }

    background: transparent;

    .main-btn {
      padding: 0.75rem 2.5rem;
      margin-top: -2rem;
      font-weight: bold;
      transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);
      ${theme.theme === 'corporate' && `border-radius: ${theme.radius};`}

      i {
        font-size: 2rem;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      }
      span {
        ${theme.dir === 'rtl'
          ? 'padding-right: 0.25rem;'
          : 'padding-left: 0.25rem;'}
      }

      i,
      span {
        vertical-align: middle;
      }
    }

    .menu {
      & > .menu-items {
        & > .menu-item:first-child {
          .menu-title {
            &::after {
              content: 'new';
              color: ${theme.colorWhite};
              margin-left: 1rem;
              background: ${theme.colorDanger};
              padding: 0 0.5rem;
              border-radius: ${theme.radius};
              font-size: ${theme.fontSizeSm};
            }
          }
        }
      }

      .nb-e-commerce {
        font-size: 2rem;
      }
    }

    &.compacted {
      header {
        padding-left: 0;
        padding-right: 0;
      }

      .main-btn {
        width: 46px;
        height: 44px;
        padding: 0.375rem;
        border-radius: 5px;
        transition: none;

        span {
          display: none;
        }
      }
    }
  }

  ${breakpointDown('xs')`
    .main-content {
        padding: 0.75rem !important;
      }
  `}

  ${breakpointDown('sm')`
    aside.menu-sidebar {
      margin-top: 0;

      .main-container {
        height: calc(${theme.sidebarHeight} - ${theme.headerHeight}) !important;
        ${
          theme.dir === 'rtl'
            ? 'border-top-left-radius: 0'
            : 'border-top-right-radius: 0'
        }

        .scrollable {
          padding-top: 0;
        }
    }
  }
  .main-btn {
      display: none;
    }
  `}

  .with-margin {
    margin: 0 0.75rem 2rem 0;
  }
  .inline-block {
    display: inline-block;
  }
  .popover-card {
    margin-bottom: 0;
    width: 300px;
    box-shadow: none;
  }
  .btn {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 500;
    font-family: Exo;
    border: 2px solid transparent;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
`}
`;
export default SimpleLayout;
