import React, { useEffect } from "react";
const SvgComponent = (props) => {
  return (
    <svg
      className="ladybug"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        enableBackground: "new 0 0 339.1 463.6",
      }}
      viewBox="0 0 339.1 463.6"
      {...props}
    >
      <ellipse cx={169.5} cy={94.5} rx={112} ry={94.5} />
      <ellipse
        cx={112.6}
        cy={44.1}
        rx={10.5}
        ry={10.2}
        style={{
          fill: "#fff",
        }}
      />
      <ellipse
        cx={213.9}
        cy={56.5}
        rx={10.5}
        ry={10.2}
        style={{
          fill: "#fff",
        }}
      />
      <path
        className={
          props.ranking.limit === 0 || props.ranking.limit === 0.05
            ? "expression visible"
            : "expression hidden"
        }
        d="M125.7 76c8.3-4.4 34.9-2.5 41.8 12.4M121.3 22.9c6.9.9 10.8 4.5 13.8 11M205.2 25.3c-6.9.9-10.8 4.5-13.8 11"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 6.6662,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
      <path
        className={
          props.ranking.limit === 0.15
            ? "expression visible"
            : "expression hidden"
        }
        d="M121.3 22.9c8.2.4 11.8 4.1 13.8 11M208.5 25.5c-2.9 3.5-11.7 10.2-17.3 10.9M125.7 76c4.9 2.5 30.8 5.8 41.8 12.4"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 6.6662,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
      <path
        className={
          props.ranking.limit === 0.35
            ? "expression visible"
            : "expression hidden"
        }
        d="M114.9 21.9c4.4-.9 12.7.9 16.6 3.6M224.5 30.6c-6.4-2.5-15.3-2.3-20.3 1.1M125.7 76c1.9 11.3 27.2 16.3 41.8 12.4"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 6.6662,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
      <path
        className={
          props.ranking.limit === 0.5
            ? "expression visible"
            : "expression hidden"
        }
        d="M112.5 75.2c5.9 18.1 62.8 20.7 74 9.4M102.2 23.9c3.6-2.6 11.9-4.3 16.7-3.3M234.7 42.5c-3.8-5.8-11.2-10.8-17.3-10.9M100.3 28.5c1.9-3 12.3-5.8 16.2-5.1"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 6.6662,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
      <path
        className={
          props.ranking.limit >= 0.7
            ? "expression visible"
            : "expression hidden"
        }
        d="M236.5 41.3c-4.5-5.5-12.4-9.8-18.7-8.3M105.8 74.5c21.4 24.7 63.7 29 91.8 13.9"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 6.6662,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
      <ellipse
        className="redBody"
        cx={169.5}
        cy={290.1}
        rx={162.9}
        ry={166.8}
        style={{
          fill: "#bb3f0e",
        }}
      />
      <defs>
        <ellipse id="a" cx={169.5} cy={290.1} rx={162.9} ry={166.8} />
      </defs>
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
        <g className="button" onClick={props.onClick(props.letters[0])}>
          <ellipse cx={169.5} cy={290.1} rx={48.8} ry={47.9} />
          <path
            d="M152.6 268.8h34v32.7h-34z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "45.0539px",
            }}
            transform="matrix(1.0184 0 0 1 152.53 306.09)"
          >
            {props.letters[0]}
          </text>
        </g>
        <g className="button" onClick={props.onClick(props.letters[1])}>
          <ellipse cx={169.5} cy={159.4} rx={48.8} ry={47.9} />
          <path
            d="M152.6 137.8h34v32.7h-34z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "45.0539px",
            }}
            transform="matrix(1.0184 0 0 1 152.618 180.12)"
          >
            {props.letters[1]}
          </text>
        </g>
        <g className="button" onClick={props.onClick(props.letters[2])}>
          <ellipse cx={285} cy={224.8} rx={48.8} ry={47.9} />
          <path
            d="M268.1 203.3h34V236h-34z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "45.0539px",
            }}
            transform="matrix(1.0184 0 0 1 262.665 240.804)"
          >
            {props.letters[2]}
          </text>
        </g>
        <g className="button" onClick={props.onClick(props.letters[3])}>
          <ellipse cx={285} cy={355.6} rx={48.8} ry={47.9} />
          <path
            d="M268.1 334.3h34V367h-34z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "45.0539px",
            }}
            transform="matrix(1.0184 0 0 1 268.1 366.567)"
          >
            {props.letters[3]}
          </text>
        </g>
        <g className="button" onClick={props.onClick(props.letters[4])}>
          <ellipse cx={169.5} cy={421.2} rx={48.8} ry={47.9} />
          <path
            d="M152.6 399.7h34v32.7h-34z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "45.0539px",
            }}
            transform="matrix(1.0184 0 0 1 152.53 432.058)"
          >
            {props.letters[4]}
          </text>
        </g>
        <g className="button" onClick={props.onClick(props.letters[5])}>
          <ellipse cx={54.1} cy={355.5} rx={48.8} ry={47.9} />
          <path
            d="M36.3 334.2h36v34.4h-36z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "45.0539px",
            }}
            transform="matrix(1.0184 0 0 1 41.772 365.101)"
          >
            {props.letters[5]}
          </text>
        </g>
        <g className="button" onClick={props.onClick(props.letters[6])}>
          <ellipse cx={54.1} cy={224.4} rx={48.8} ry={47.9} />
          <path
            d="M36.3 203.1h36v34.4h-36z"
            style={{
              fill: "none",
            }}
          />
          <text
            style={{
              fill: "#fff",
              fontFamily: "&quot",
              fontSize: "45.0539px",
            }}
            transform="matrix(1.0184 0 0 1 41.843 239.336)"
          >
            {props.letters[6]}
          </text>
        </g>
      </g>
      <ellipse
        cx={169.5}
        cy={290.1}
        rx={162.9}
        ry={166.8}
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 13.3326,
          strokeMiterlimit: 10,
        }}
      />
    </svg>
  );
};
export default SvgComponent;
