import React, { useEffect } from "react";
const Ladybug = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      width={190.5}
      height={260.5}
      style={{
        enableBackground: "new 0 0 190.5 260.5",
      }}
      {...props}
    >
      <ellipse cx={95.2} cy={53.1} rx={62.9} ry={53.1} />
      <ellipse
        cx={63.3}
        cy={24.8}
        rx={5.9}
        ry={5.7}
        style={{
          fill: "#fff",
        }}
      />
      <ellipse
        cx={120.2}
        cy={31.8}
        rx={5.9}
        ry={5.7}
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="M64.4 45s21.4 17.2 50.2 6.1"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 3.745,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
      <defs>
        <ellipse id="a" cx={95.2} cy={163} rx={91.5} ry={93.7} />
      </defs>
      <use
        xlinkHref="#a"
        style={{
          overflow: "visible",
          fill: "#a0273e",
        }}
      />
      <clipPath id="b">
        <use
          xlinkHref="#a"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <g
        style={{
          clipPath: "url(#b)",
        }}
      >
        <g onClick={props.onClick(props.letters[0])}>
          <ellipse cx={95.2} cy={163} rx={27.4} ry={26.9} />
          <path
            d="M85.7 151h19.1v18.4H85.7z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "25.3106px",
              fontWeight: "900",
            }}
            transform="matrix(1.0184 0 0 1 85.65 169.142)"
          >
            {props.letters[0]}
          </text>
        </g>
        <g onClick={props.onClick(props.letters[1])}>
          <ellipse cx={95.2} cy={89.5} rx={27.4} ry={26.9} />
          <path
            d="M85.7 77.4h19.1v18.4H85.7z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "25.3106px",
              fontWeight: "900",
            }}
            transform="matrix(1.0184 0 0 1 85.65 95.556)"
          >
            {props.letters[1]}
          </text>
        </g>
        <g onClick={props.onClick(props.letters[2])}>
          <ellipse cx={160.1} cy={126.3} rx={27.4} ry={26.9} />
          <path
            d="M150.6 114.2h19.1v18.4h-19.1z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "25.3106px",
              fontWeight: "900",
            }}
            transform="matrix(1.0184 0 0 1 150.576 132.349)"
          >
            {props.letters[2]}
          </text>
        </g>
        <g onClick={props.onClick(props.letters[3])}>
          <ellipse cx={160.1} cy={199.8} rx={27.4} ry={26.9} />
          <path
            d="M150.6 187.8h19.1v18.4h-19.1z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "25.3106px",
              fontWeight: "900",
            }}
            transform="matrix(1.0184 0 0 1 150.576 205.934)"
          >
            {props.letters[3]}
          </text>
        </g>
        <g onClick={props.onClick(props.letters[4])}>
          <ellipse cx={95.2} cy={236.6} rx={27.4} ry={26.9} />
          <path
            d="M85.7 224.6h19.1V243H85.7z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "25.3106px",
              fontWeight: "900",
            }}
            transform="matrix(1.0184 0 0 1 85.65 242.727)"
          >
            {props.letters[4]}
          </text>
        </g>
        <g onClick={props.onClick(props.letters[5])}>
          <ellipse cx={30.3} cy={199.7} rx={27.4} ry={26.9} />
          <path
            d="M20.3 187.7h20.2V207H20.3z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "25.3106px",
              fontWeight: "900",
            }}
            transform="matrix(1.0184 0 0 1 20.26 205.814)"
          >
            {props.letters[5]}
          </text>
        </g>
        <g onClick={props.onClick(props.letters[6])}>
          <ellipse cx={30.3} cy={126.1} rx={27.4} ry={26.9} />
          <path
            d="M20.3 114.1h20.2v19.3H20.3z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "25.3106px",
              fontWeight: "900",
            }}
            transform="matrix(1.0184 0 0 1 20.26 132.228)"
          >
            {props.letters[6]}
          </text>
        </g>
      </g>
      <use
        xlinkHref="#a"
        style={{
          overflow: "visible",
          fill: "none",
          stroke: "#000",
          strokeWidth: 7.49,
          strokeMiterlimit: 10,
        }}
      />
    </svg>
  );
};
export default Ladybug;
