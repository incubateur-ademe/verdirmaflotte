import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 0.75em;
`
const Svg = styled.svg`
  width: 8rem;
  height: 100%;

  path {
    fill: ${(props) => props.theme.colors.co2};
  }
`
export default function Logo() {
  return (
    <Wrapper to='/' resetQueryParams={true}>
      <Svg
        width='151'
        height='53'
        viewBox='0 0 151 53'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M41.144 2.20001L47.24 19H52.808L58.904 2.20001H54.368L50.024 14.176L45.68 2.20001H41.144Z'
          fill='#008760'
        />
        <path
          d='M70.8596 17.056L68.1716 14.92C67.6196 15.616 66.6836 16.072 65.5556 16.072C63.9476 16.072 62.9156 15.4 62.6036 14.008H70.4276C70.5476 13.576 70.6676 12.808 70.6676 11.992C70.6676 8.70401 68.4116 6.42401 64.9796 6.42401C60.8756 6.42401 58.6916 9.44801 58.6916 12.952C58.6916 16.48 61.0436 19.48 65.4836 19.48C67.8116 19.48 69.7076 18.568 70.8596 17.056ZM64.9796 9.56801C66.2996 9.56801 66.8756 10.408 66.9236 11.2H62.7476C63.1076 10.024 63.8516 9.56801 64.9796 9.56801Z'
          fill='#008760'
        />
        <path
          d='M73.2632 19H77.0792V11.896C77.3192 11.488 78.2312 10.672 79.6232 10.672C80.2472 10.672 80.7032 10.744 81.1112 10.84V6.83201C80.8232 6.73601 80.4392 6.66401 80.0072 6.66401C78.7592 6.66401 77.8232 7.19201 77.0792 7.88801V6.90401H73.2632V19Z'
          fill='#008760'
        />
        <path
          d='M82.3166 12.952C82.3166 16.48 84.5726 19.48 88.4126 19.48C89.8046 19.48 90.8846 19.12 91.7486 18.472V19H95.5886V1.00001H91.7486V7.43201C90.8846 6.78401 89.8046 6.42401 88.4126 6.42401C84.5726 6.42401 82.3166 9.42401 82.3166 12.952ZM86.2766 12.952C86.2766 11.176 87.2846 10 88.9646 10C90.1646 10 91.0286 10.528 91.7486 11.488V14.416C91.0526 15.376 90.1886 15.904 88.9646 15.904C87.2846 15.904 86.2766 14.728 86.2766 12.952Z'
          fill='#008760'
        />
        <path
          d='M100.66 5.58401C101.932 5.58401 103.036 4.45601 103.036 3.16001C103.036 1.86401 101.932 0.76001 100.66 0.76001C99.3403 0.76001 98.2363 1.86401 98.2363 3.16001C98.2363 4.45601 99.3403 5.58401 100.66 5.58401ZM98.7163 19H102.532V6.90401H98.7163V19Z'
          fill='#008760'
        />
        <path
          d='M105.654 19H109.47V11.896C109.71 11.488 110.622 10.672 112.014 10.672C112.638 10.672 113.094 10.744 113.502 10.84V6.83201C113.214 6.73601 112.83 6.66401 112.398 6.66401C111.15 6.66401 110.214 7.19201 109.47 7.88801V6.90401H105.654V19Z'
          fill='#008760'
        />
        <path
          d='M42.56 45H46.376V37.464C46.64 37.056 47.12 36 48.32 36C49.4 36 49.952 36.744 49.952 37.824V45H53.792V37.656C53.792 37.536 53.792 37.44 53.792 37.344L53.816 37.368C54.008 37.056 54.488 36 55.688 36C56.768 36 57.32 36.744 57.32 37.824V45H61.16V37.656C61.16 34.152 59.144 32.424 56.72 32.424C54.896 32.424 53.768 33.36 52.952 34.344C52.136 33.072 50.816 32.424 49.352 32.424C48.056 32.424 47.096 32.904 46.376 33.528V32.904H42.56V45Z'
          fill='#008760'
        />
        <path
          d='M67.7454 45.48C69.0174 45.48 70.3374 44.904 71.0094 44.112V45H74.8494V37.368C74.8494 34.728 73.0734 32.424 69.2334 32.424C66.9774 32.424 65.1294 33.336 64.0254 34.872L66.8094 36.984C67.2654 36.144 68.1054 35.712 69.1134 35.712C70.2174 35.712 70.9614 36.408 71.0094 37.32L67.6494 37.896C65.0094 38.352 63.5934 39.792 63.5934 41.664C63.5934 44.04 65.2974 45.48 67.7454 45.48ZM67.3374 41.472C67.3374 40.92 67.6734 40.584 68.6814 40.416L71.0094 40.032V41.112C70.5294 41.856 69.7854 42.456 68.5854 42.456C67.8414 42.456 67.3374 42.072 67.3374 41.472Z'
          fill='#008760'
        />
        <path
          d='M82.9097 32.904V36.36H85.1657V45H89.0057V36.36H92.3177V32.904H89.0057V31.68C89.0057 30.984 89.5337 30.408 90.2537 30.408C90.7337 30.408 91.0697 30.528 91.3097 30.84L93.6377 28.056C92.7737 27.336 91.5737 27 90.2057 27C87.0137 27 85.1657 29.208 85.1657 31.8V32.904H82.9097Z'
          fill='#008760'
        />
        <path d='M94.3804 45H98.1964V27H94.3804V45Z' fill='#008760' />
        <path
          d='M119.4 40.296C119.4 43.272 120.768 45.24 124.056 45.24C125.184 45.24 125.928 45.096 126.576 44.808V41.52C126.216 41.664 125.64 41.784 124.752 41.784C123.744 41.784 123.24 41.256 123.24 40.296V36.36H126.552V32.904H123.24V29.88H119.4V32.904H117.144V36.36H119.4V40.296Z'
          fill='#008760'
        />
        <path
          d='M130.041 40.296C130.041 43.272 131.409 45.24 134.697 45.24C135.825 45.24 136.569 45.096 137.217 44.808V41.52C136.857 41.664 136.281 41.784 135.393 41.784C134.385 41.784 133.881 41.256 133.881 40.296V36.36H137.193V32.904H133.881V29.88H130.041V32.904H127.785V36.36H130.041V40.296Z'
          fill='#008760'
        />
        <path
          d='M150.821 43.056L148.133 40.92C147.581 41.616 146.645 42.072 145.517 42.072C143.909 42.072 142.877 41.4 142.565 40.008H150.389C150.509 39.576 150.629 38.808 150.629 37.992C150.629 34.704 148.373 32.424 144.941 32.424C140.837 32.424 138.653 35.448 138.653 38.952C138.653 42.48 141.005 45.48 145.445 45.48C147.773 45.48 149.669 44.568 150.821 43.056ZM144.941 35.568C146.261 35.568 146.837 36.408 146.885 37.2H142.709C143.069 36.024 143.813 35.568 144.941 35.568Z'
          fill='#008760'
        />
        <path
          d='M27 44C27 48.9706 22.9706 53 18 53C13.0294 53 9 48.9706 9 44C9 39.0294 13.0294 35 18 35C22.9706 35 27 39.0294 27 44ZM12.5729 44C12.5729 46.9973 15.0027 49.4271 18 49.4271C20.9973 49.4271 23.4271 46.9973 23.4271 44C23.4271 41.0027 20.9973 38.5729 18 38.5729C15.0027 38.5729 12.5729 41.0027 12.5729 44Z'
          fill='#008760'
        />
        <path
          d='M18.4973 1.62634H33.3301C34.4462 1.62634 35.3501 2.53138 35.3501 3.64634V43.0363C35.3501 44.1513 34.4462 45.0563 33.3301 45.0563H31.1878C30.1879 45.0563 29.3021 44.3361 29.1729 43.3445C28.3801 37.2703 23.5351 32.5031 17.6741 32.5031C11.8131 32.5031 6.96811 37.2704 6.17529 43.3445C6.04607 44.3363 5.16133 45.0563 4.1604 45.0563H2.02027C0.905307 45.0563 0.000259399 44.1513 0.000259399 43.0363V23.3413C0.000259399 22.8667 0.166949 22.4081 0.47094 22.0455L16.9481 2.35051C17.3317 1.89205 17.8994 1.62634 18.4973 1.62634ZM31.3101 17.7863V7.68634C31.3101 6.57138 30.4062 5.66634 29.2901 5.66634H20.392C19.7931 5.66634 19.2244 5.93304 18.8407 6.39348L10.4244 16.4935C9.32857 17.8094 10.2638 19.8063 11.9767 19.8063H29.2901C30.4062 19.8063 31.3101 18.9025 31.3101 17.7863Z'
          fill='#008760'
        />
        <path
          d='M118 44C118 48.9706 113.971 53 109 53C104.029 53 100 48.9706 100 44C100 39.0294 104.029 35 109 35C113.971 35 118 39.0294 118 44ZM103.573 44C103.573 46.9973 106.003 49.4271 109 49.4271C111.997 49.4271 114.427 46.9973 114.427 44C114.427 41.0027 111.997 38.5729 109 38.5729C106.003 38.5729 103.573 41.0027 103.573 44Z'
          fill='#008760'
        />
      </Svg>
    </Wrapper>
  )
}
