import { css } from '@emotion/react'

export const global = css`
  @font-face {
    font-family: 'Pretendard Variable';
    src: url('./fonts/pretendard/Pretendard-Bold.woff');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard Variable';
    src: url('./fonts/pretendard/Pretendard-Medium.woff');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard Variable';
    src: url('./fonts/pretendard/Pretendard-Regular.woff');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard Variable';
    src: url('./fonts/pretendard/Pretendard-Light.woff');
    font-weight: 100;
    font-display: swap;
  }

  html {
    font-size: 16px;
  }
`
