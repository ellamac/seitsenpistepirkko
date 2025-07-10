import * as React from 'react';
const SvgComponent = (props) => (
  <section className='gameboard'>
    <svg
      className='gameboard'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlSpace='preserve'
      style={{
        enableBackground: 'new 0 0 339.1 474.4',
      }}
      viewBox='0 0 337.4 370.4'
      {...props}
    >
      <g
        className={`ladybug ${
          props.gamelayout === 'ladybug' ? 'visible' : 'hidden'
        }`}
      >
        <defs>
          <clipPath id='a'>
            <ellipse cx={168.7} cy={185.2} fill='none' rx={162.9} ry={166.8} />
          </clipPath>
        </defs>
        <ellipse
          className='redBody'
          cx={168.7}
          cy={185.2}
          rx={162.9}
          ry={166.8}
          fill='#bb3f0e'
        />
        <g clipPath='url(#a)'>
          <g className='button' onClick={props.onClick(props.letters[0])}>
            <ellipse cx={168.7} cy={185.2} rx={48.8} ry={47.9} />
            <path fill='none' d='M151.8 163.9h34v32.7h-34z' />
          </g>
          <ellipse cx={168.7} cy={54.4} rx={48.8} ry={47.9} />
          <path fill='none' d='M151.8 32.8h34v32.7h-34z' />
          <ellipse cx={284.2} cy={119.9} rx={48.8} ry={47.9} />
          <path fill='none' d='M267.3 98.3h34V131h-34z' />
          <ellipse cx={284.2} cy={250.6} rx={48.8} ry={47.9} />
          <path fill='none' d='M267.3 229.3h34V262h-34z' />

          <ellipse cx={168.7} cy={316.2} rx={48.8} ry={47.9} />
          <path fill='none' d='M151.8 294.8h34v32.7h-34z' />

          <ellipse cx={53.2} cy={250.5} rx={48.8} ry={47.9} />
          <path fill='none' d='M35.4 229.2h36v34.4h-36z' />

          <ellipse
            cx={53.2}
            cy={119.5}
            data-name='ladybug_x5F_dot_x5F_6'
            rx={48.8}
            ry={47.9}
          />
          <path fill='none' d='M35.4 98.2h36v34.4h-36z' />
        </g>
        <ellipse
          cx={168.7}
          cy={185.2}
          fill='none'
          stroke='#000'
          strokeMiterlimit={10}
          strokeWidth={13.3}
          data-name='ladybug_x5F_body'
          rx={162.9}
          ry={166.8}
        />
      </g>
      <g
        className={`flower ${
          props.gamelayout === 'flower' ? 'visible' : 'hidden'
        }`}
      >
        <path
          className='button fill outline'
          fill='#fff'
          stroke='#fbb03b'
          strokeMiterlimit={10}
          strokeWidth={13}
          d='M306.4 207.3c-10-5.7-34.9-15.1-60.9-21.9 26.1-6.7 51-15.9 61.1-21.5 23.1-12.9 31.2-42.4 18-65.9-13.1-23.5-42.5-32.1-65.6-19.2-10.7 6-33.7 24.2-54 44.4 7.7-27.6 12.4-56.5 12.4-68.7 0-26.5-21.8-47.9-48.8-47.9S119.8 28 119.8 54.5s4.6 40.6 12.1 67.9c-20-20-42.5-38.1-53.1-44.1-23-13.1-52.4-4.6-65.7 18.8-13.1 23.3-5.3 52.9 17.7 66 10 5.7 35.1 15.1 61.2 21.9-26.1 6.7-51.2 16-61.3 21.7-23 13-31 42.5-17.8 66s42.6 32 65.6 19.1c10.6-6 33.5-24.1 53.7-44.3-7.7 27.5-12.3 56.3-12.3 68.5 0 26.5 21.8 47.9 48.8 47.9s48.8-21.4 48.8-47.9-4.6-40.6-12.1-67.8c20 20 42.5 38.1 53 44 23 13.1 52.4 4.7 65.7-18.8 13.3-23.4 5.4-53-17.6-66.1Z'
        />
        <g className='button fill' onClick={props.onClick(props.letters[3])}>
          <path
            fill='#e6a630'
            stroke='#fff'
            strokeMiterlimit={10}
            strokeWidth={5}
            d='M324 273.4c-13.3 23.4-42.7 31.8-65.7 18.8-23-13.1-102.9-83.6-89.6-107 13.3-23.4 114.8 9.1 137.8 22.2s30.9 42.6 17.6 66.1Z'
          />
        </g>

        <g className='button fill' onClick={props.onClick(props.letters[5])}>
          <path
            fill='#e6a630'
            stroke='#fff'
            strokeMiterlimit={10}
            strokeWidth={5}
            d='M12.9 272.7c-13.2-23.5-5.2-53 17.9-66 23.1-13 124.7-45 137.9-21.5 13.2 23.5-67.1 93.6-90.1 106.6-23.1 13-52.5 4.4-65.6-19.1Z'
          />
        </g>

        <g className='button fill' onClick={props.onClick(props.letters[1])}>
          <path
            fill='#e6a630'
            stroke='#fff'
            strokeMiterlimit={10}
            strokeWidth={5}
            d='M168.6 6.5c26.9 0 48.8 21.4 48.8 47.9s-21.8 130.8-48.8 130.8-48.8-104.3-48.8-130.8 21.9-47.9 48.8-47.9Z'
          />
        </g>

        <g className='button fill' onClick={props.onClick(props.letters[6])}>
          <path
            fill='#e6a630'
            stroke='#fff'
            strokeMiterlimit={10}
            strokeWidth={5}
            d='M13.2 97c13.3-23.4 42.7-31.8 65.7-18.8 23 13.1 103 83.5 89.7 107-13.3 23.4-114.8-9.1-137.8-22.1C7.8 150 0 120.4 13.2 97Z'
          />
        </g>
        <g className='button fill' onClick={props.onClick(props.letters[4])}>
          <path
            fill='#e6a630'
            stroke='#fff'
            strokeMiterlimit={10}
            strokeWidth={5}
            d='M168.6 363.9c-26.9 0-48.8-21.4-48.8-47.9s21.8-130.8 48.8-130.8 48.8 104.3 48.8 130.8-21.8 47.9-48.8 47.9Z'
          />
        </g>
        <g className='button fill' onClick={props.onClick(props.letters[2])}>
          <path
            fill='#e6a630'
            stroke='#fff'
            strokeMiterlimit={10}
            strokeWidth={5}
            d='M324.6 98c13.1 23.5 5.1 53-18 65.9-23.1 12.9-124.8 44.8-138 21.2-13.1-23.5 67.3-93.5 90.4-106.4 23.1-12.9 52.5-4.3 65.6 19.2Z'
          />
        </g>
        <g className='button light' onClick={props.onClick(props.letters[0])}>
          <ellipse
            className='inner'
            cx={168.6}
            cy={185.2}
            fill='#fff'
            stroke='#fff'
            strokeMiterlimit={10}
            strokeWidth={5}
            rx={48.8}
            ry={47.9}
          />
        </g>
      </g>
      <g
        className={`letters ${
          props.gamelayout === 'flower' ? 'flower' : 'ladybug'
        }`}
      >
        <text
          fill='#fff'
          fontFamily='Arial-BoldMT, Arial'
          fontSize={45.1}
          fontWeight={700}
          transform='translate(267.2 261.6)'
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
        </text>{' '}
        <text
          fill='#fff'
          fontFamily='Arial-BoldMT, Arial'
          fontSize={45.1}
          fontWeight={700}
          transform='translate(40.9 260.1)'
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
          fill='#fff'
          fontFamily='Arial-BoldMT, Arial'
          fontSize={45.1}
          fontWeight={700}
          transform='translate(151.7 75.2)'
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
          fill='#fff'
          fontFamily='Arial-BoldMT, Arial'
          fontSize={45.1}
          fontWeight={700}
          transform='translate(40.9 134.4)'
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
          fill='#fff'
          fontFamily='Arial-BoldMT, Arial'
          fontSize={45.1}
          fontWeight={700}
          transform='translate(151.6 327.1)'
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
          fill='#fff'
          fontFamily='Arial-BoldMT, Arial'
          fontSize={45.1}
          fontWeight={700}
          transform='translate(261.8 135.8)'
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
            {props.letters[0].toUpperCase()}
          </tspan>
        </text>
        <text
          fill='#e6a630'
          fontFamily='Arial-BoldMT, Arial'
          fontSize={45.1}
          fontWeight={700}
          transform='translate(151.6 201.1)'
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
            {props.letters[2].toUpperCase()}
          </tspan>
        </text>
      </g>
    </svg>
  </section>
);
export default SvgComponent;
