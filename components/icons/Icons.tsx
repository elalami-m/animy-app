import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const Logo = (props: SvgProps) => (
  <Svg width={33} height={33} viewBox="0 0 286 470" fill="none" {...props}>
    <Path
      d="M245.496 279.645c0-17.807-16.518-18.168-44.761-21.777-36.46-4.573-130.28 2.935-102.376 6.597 24.952 10.645 73.191 36.476 82.52 38.16 19.171 3.008 64.617-2.767 64.617-22.98Z"
      fill="url(#a)"
    />
    <Path
      d="M282.574 362.987a67.325 67.325 0 0 1-3.764 16.808c-22.888 72.627-56.618 84.654-75.29 90.205-9.938-3.084 7.228-83.729 8.884-98.069 4.819-41.942-12.197-214.18 5.572-286.19-40.506 64.146-66.256 302.997-148.623 354.653C42.098 457.202-4.732 467.841.387 462.599a29.884 29.884 0 0 1 3.464-5.552C75.075 350.652 114.527 50.739 241.165 6.176A93.624 93.624 0 0 1 270.528.625h3.915a17.393 17.393 0 0 0-1.054 2.467 248.97 248.97 0 0 0-7.077 90.668c4.216 82.957 27.104 194.133 16.262 269.227Z"
      fill="url(#b)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={101.283}
        y1={280.247}
        x2={245.496}
        y2={280.247}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F3F4F5" />
        <Stop offset={0.979} stopColor="#0B0D1A" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={-0.064}
        y1={235.004}
        x2={285.586}
        y2={235.004}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F3F4F5" />
        <Stop offset={1} stopColor="#0B0D1A" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export { Logo };
