import React from 'react';
const SvgComponent = (props) => {
  return (
    <section className='gameboard'>
      <svg
        className='gameboard'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        style={{
          enableBackground: 'new 0 0 339.1 474.4',
        }}
        viewBox='0 0 339.1 474.4'
        {...props}
      >
        <g
          className={`ladybug ${
            props.gameLayout === 'ladybug' ? 'visible' : 'hidden'
          }`}
        >
          <defs>
            <clipPath id='a'>
              <ellipse
                cx={169.5}
                cy={290.1}
                rx={162.9}
                ry={166.8}
                style={{
                  fill: 'none',
                }}
              />
            </clipPath>
          </defs>
          <ellipse cx={169.5} cy={94.5} rx={112} ry={94.5} />
          <ellipse
            cx={112.6}
            cy={44.1}
            rx={10.5}
            ry={10.2}
            style={{
              fill: '#fff',
            }}
          />
          <ellipse
            cx={213.9}
            cy={56.5}
            rx={10.5}
            ry={10.2}
            style={{
              fill: '#fff',
            }}
          />
          <path
            className={
              props.ranking.limit === 0 || props.ranking.limit === 0.05
                ? 'expression visible'
                : 'expression hidden'
            }
            d='M125.7 76c13.2-2.9 27.8-3.7 41.8 12.4M121.3 22.9c7.5.8 12.1 5.5 13.8 11M205.2 25.3c-6.9.9-10.7 3.1-13.8 11'
            style={{
              fill: 'none',
              stroke: '#fff',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: '6.7px',
            }}
          />
          <path
            className={
              props.ranking.limit === 0.15
                ? 'expression visible'
                : 'expression hidden'
            }
            d='M121.3 22.9c8.2.4 11.8 4.1 13.8 11M208.5 25.5c-2.9 3.5-11.7 10.2-17.3 10.9M125.7 76c4.9 2.5 30.8 5.8 41.8 12.4'
            style={{
              fill: 'none',
              stroke: '#fff',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: '6.7px',
            }}
          />
          <path
            className={
              props.ranking.limit === 0.35
                ? 'expression visible'
                : 'expression hidden'
            }
            d='M114.9 21.9c4.4-.9 12.7.9 16.6 3.6M224.5 30.6c-6.4-2.5-15.3-2.3-20.3 1.1M125.7 76c1.9 11.3 27.2 16.3 41.8 12.4'
            style={{
              fill: 'none',
              stroke: '#fff',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: '6.7px',
            }}
          />
          <path
            className={
              props.ranking.limit === 0.5
                ? 'expression visible'
                : 'expression hidden'
            }
            d='M112.5 75.2c5.9 18.1 62.8 20.7 74 9.4M102.2 23.9c3.6-2.6 11.9-4.3 16.7-3.3M234.7 42.5c-3.8-5.8-11.2-10.8-17.3-10.9M100.3 28.5c1.9-3 12.3-5.8 16.2-5.1'
            style={{
              fill: 'none',
              stroke: '#fff',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: '6.7px',
            }}
          />
          <path
            className={
              props.ranking.limit >= 0.7
                ? 'expression visible'
                : 'expression hidden'
            }
            d='M236.5 41.3c-4.5-5.5-12.4-9.8-18.7-8.3M108.4 66.7c16.5 31.5 60.7 38.2 95 17.3'
            style={{
              fill: 'none',
              stroke: '#fff',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: '6.7px',
            }}
          />
          <ellipse
            className='redBody'
            cx={169.5}
            cy={290.1}
            rx={162.9}
            ry={166.8}
            style={{
              fill: '#bb3f0e',
            }}
          />
          <g
            style={{
              clipPath: 'url(#a)',
            }}
          >
            <g className='button' onClick={props.onClick(props.letters[0])}>
              <ellipse cx={169.5} cy={290.1} rx={48.8} ry={47.9} />
              <path
                d='M152.6 268.8h34v32.7h-34z'
                style={{
                  fill: 'none',
                }}
              />
            </g>
            <g className='button' onClick={props.onClick(props.letters[1])}>
              <ellipse cx={169.5} cy={159.4} rx={48.8} ry={47.9} />
              <path
                d='M152.6 137.8h34v32.7h-34z'
                style={{
                  fill: 'none',
                }}
              />
            </g>
            <g className='button' onClick={props.onClick(props.letters[2])}>
              <ellipse cx={285} cy={224.8} rx={48.8} ry={47.9} />
              <path
                d='M268.1 203.3h34V236h-34z'
                style={{
                  fill: 'none',
                }}
              />
            </g>
            <g className='button' onClick={props.onClick(props.letters[3])}>
              <ellipse cx={285} cy={355.6} rx={48.8} ry={47.9} />
              <path
                d='M268.1 334.3h34V367h-34z'
                style={{
                  fill: 'none',
                }}
              />
            </g>
            <g className='button' onClick={props.onClick(props.letters[4])}>
              <ellipse cx={169.5} cy={421.2} rx={48.8} ry={47.9} />
              <path
                d='M152.6 399.7h34v32.7h-34z'
                style={{
                  fill: 'none',
                }}
              />
            </g>
            <g className='button' onClick={props.onClick(props.letters[5])}>
              <ellipse cx={54.1} cy={355.5} rx={48.8} ry={47.9} />
              <path
                d='M36.3 334.2h36v34.4h-36z'
                style={{
                  fill: 'none',
                }}
              />
            </g>
            <g className='button' onClick={props.onClick(props.letters[6])}>
              <ellipse
                cx={54.1}
                cy={224.4}
                data-name='ladybug_x5F_dot_x5F_6'
                rx={48.8}
                ry={47.9}
              />
              <path
                d='M36.3 203.1h36v34.4h-36z'
                style={{
                  fill: 'none',
                }}
              />
            </g>
          </g>
          <ellipse
            cx={169.5}
            cy={290.1}
            data-name='ladybug_x5F_body'
            rx={162.9}
            ry={166.8}
            style={{
              fill: 'none',
              stroke: '#000',
              strokeMiterlimit: 10,
              strokeWidth: '13.3px',
            }}
          />
        </g>
        <g
          className={`flower ${
            props.gameLayout === 'flower' ? 'visible' : 'hidden'
          }`}
        >
          <g
            className='button stroke'
            onClick={props.onClick(props.letters[3])}
          >
            <path
              d='M324.9 378.4c-13.3 23.4-42.7 31.8-65.7 18.8-23-13.1-102.9-83.6-89.6-107 13.3-23.4 114.8 9.1 137.8 22.2 23 13.1 30.9 42.6 17.6 66.1Z'
              fill='#fff'
              stroke='#e6a630'
              strokeMiterlimit='10'
              strokeWidth='5'
            />
          </g>
          <g
            className='button stroke'
            onClick={props.onClick(props.letters[5])}
          >
            <path
              d='M13.8 377.7c-13.2-23.5-5.2-53 17.9-66 23.1-13 124.7-45 137.9-21.5 13.2 23.5-67.1 93.6-90.1 106.6-23.1 13-52.5 4.4-65.6-19.1Z'
              fill='#fff'
              stroke='#e6a630'
              strokeMiterlimit='10'
              strokeWidth='5'
            />
          </g>
          <g
            className='button stroke'
            onClick={props.onClick(props.letters[1])}
          >
            <path
              d='M169.5 111.5c26.9 0 48.8 21.4 48.8 47.9s-21.8 130.8-48.8 130.8-48.8-104.3-48.8-130.8 21.8-47.9 48.8-47.9Z'
              fill='#fff'
              stroke='#e6a630'
              strokeMiterlimit='10'
              strokeWidth='5'
            />
          </g>
          <g
            className='button stroke'
            onClick={props.onClick(props.letters[6])}
          >
            <path
              d='M14.1 202c13.3-23.4 42.7-31.8 65.7-18.8 23 13.1 103 83.5 89.7 107-13.3 23.4-114.8-9.1-137.8-22.1C8.7 255 .8 225.5 14.1 202Z'
              fill='#fff'
              stroke='#e6a630'
              strokeMiterlimit='10'
              strokeWidth='5'
            />
          </g>
          <g
            className='button stroke'
            onClick={props.onClick(props.letters[4])}
          >
            <path
              d='M169.5 468.8c-26.9 0-48.8-21.4-48.8-47.9s21.8-130.8 48.8-130.8 48.8 104.3 48.8 130.8-21.8 47.9-48.8 47.9Z'
              fill='#fff'
              stroke='#e6a630'
              strokeMiterlimit='10'
              strokeWidth='5'
            />
          </g>
          <g
            className='button stroke'
            onClick={props.onClick(props.letters[2])}
          >
            <path
              d='M325.5 203c13.1 23.5 5.1 53-18 65.9-23.1 12.9-124.8 44.8-138 21.2-13.1-23.5 67.3-93.5 90.4-106.4 23.1-12.9 52.5-4.3 65.6 19.2Z'
              fill='#fff'
              stroke='#e6a630'
              strokeMiterlimit='10'
              strokeWidth='5'
            />
          </g>
          <g className='button fill' onClick={props.onClick(props.letters[0])}>
            <ellipse cx={169.5} cy={290.1} rx={48.8} ry={47.9} fill='#e6a630' />
          </g>
        </g>
        <g
          className={`letters ${
            props.gameLayout === 'flower' ? 'flower' : 'ladybug'
          }`}
        >
          <text
            fill='#e6a630'
            fontFamily='Arial-BoldMT,Arial'
            fontSize='45.1px'
            fontWeight='700'
            transform='translate(268.1 366.6)'
          >
            <tspan
              className={
                props.letters[3].toUpperCase() === 'I'
                  ? 'letter-i'
                  : 'normal-letter'
              }
              x={props.letters[3].toUpperCase() === 'I' ? 10 : 0}
              y={0}
            >
              {props.letters[3].toUpperCase()}
            </tspan>
          </text>
          <text
            fill='#e6a630'
            fontFamily='Arial-BoldMT,Arial'
            fontSize='45.1px'
            fontWeight='700'
            transform='translate(41.8 365.1)'
          >
            <tspan
              className={
                props.letters[5].toUpperCase() === 'I'
                  ? 'letter-i'
                  : 'normal-letter'
              }
              x={props.letters[5].toUpperCase() === 'I' ? 10 : 0}
              y={0}
            >
              {props.letters[5].toUpperCase()}
            </tspan>
          </text>
          <text
            fill='#e6a630'
            fontFamily='Arial-BoldMT,Arial'
            fontSize='45.1px'
            fontWeight='700'
            transform='translate(152.6 180.1)'
          >
            <tspan
              className={
                props.letters[1].toUpperCase() === 'I'
                  ? 'letter-i'
                  : 'normal-letter'
              }
              x={props.letters[1].toUpperCase() === 'I' ? 10 : 0}
              y={0}
            >
              {props.letters[1].toUpperCase()}
            </tspan>
          </text>
          <text
            fill='#e6a630'
            fontFamily='Arial-BoldMT,Arial'
            fontSize='45.1px'
            fontWeight='700'
            transform='translate(41.8 239.3)'
          >
            <tspan
              className={
                props.letters[6].toUpperCase() === 'I'
                  ? 'letter-i'
                  : 'normal-letter'
              }
              x={props.letters[6].toUpperCase() === 'I' ? 10 : 0}
              y={0}
            >
              {props.letters[6].toUpperCase()}
            </tspan>
          </text>
          <text
            fill='#e6a630'
            fontFamily='Arial-BoldMT,Arial'
            fontSize='45.1px'
            fontWeight='700'
            transform='translate(152.5 432.1)'
          >
            <tspan
              className={
                props.letters[4].toUpperCase() === 'I'
                  ? 'letter-i'
                  : 'normal-letter'
              }
              x={props.letters[4].toUpperCase() === 'I' ? 10 : 0}
              y={0}
            >
              {props.letters[4].toUpperCase()}
            </tspan>
          </text>
          <text
            className='center'
            fill='#e6a630'
            fontFamily='Arial-BoldMT,Arial'
            fontSize='45.1px'
            fontWeight='700'
            transform='translate(152.5 306.1)'
          >
            <tspan
              className={`center ${
                props.letters[0].toUpperCase() === 'I'
                  ? 'letter-i'
                  : 'normal-letter'
              }`}
              x={props.letters[0].toUpperCase() === 'I' ? 10 : 0}
              y={0}
            >
              {props.letters[0].toUpperCase()}
            </tspan>
          </text>
          <text
            fill='#e6a630'
            fontFamily='Arial-BoldMT,Arial'
            fontSize='45.1px'
            fontWeight='700'
            transform='translate(262.7 240.8)'
          >
            <tspan
              className={
                props.letters[2].toUpperCase() === 'I'
                  ? 'letter-i'
                  : 'normal-letter'
              }
              x={props.letters[2].toUpperCase() === 'I' ? 10 : 0}
              y={0}
            >
              {props.letters[2].toUpperCase()}
            </tspan>
          </text>
        </g>
      </svg>
    </section>
  );
};
export default SvgComponent;
