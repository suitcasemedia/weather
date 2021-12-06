import classes from './svg.module.scss'

type TOwnProps = {
  temp_c: number
}


  type Props = TOwnProps ;
  const SVGDial : React.FC<Props> = ({temp_c}) => {
  
  return (
   
              <div className={classes.dial}>
                <svg
                  className="temperature"
                  width="400"
                  height="342"
                  viewBox="0 0 400 342"
                >
                  <defs>
                    <linearGradient
                      id="linear"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stop-color="#06AFFD" />

                      <stop
                        offset="30%"
                        stop-color="hsl(18.895027624309392, 84.18604651162791%, 57.84313725490197%)"
                      />
                      <stop offset="100%" stop-color="#ff00007d" />
                    </linearGradient>
                  </defs>
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="50%" stop-color="#fff" />

                      <stop offset="90%" stop-color="rgba(255,255,255,0)" />
                    </linearGradient>
                  </defs>
                  <defs>
                    <filter id="f4" x="0" y="0" width="200%" height="200%">
                      <feOffset
                        result="offOut"
                        in="SourceGraphic"
                        dx="0"
                        dy="0"
                      />

                      <feGaussianBlur
                        result="blurOut"
                        in="matrixOut"
                        stdDeviation="25"
                      />
                      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                  </defs>
                  <defs>
                    <filter id="f1" x="0" y="0">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
                    </filter>
                  </defs>

                  <path
                    id="arc2"
                    style={{
                      fill: 'none',
                      fillRule: 'evenodd',
                      strokeWidth: 52,
                      strokeMiterlimit: 1,
                      strokeOpacity: 0.05,
                      transformOrigin: '180px 180px',
                      transform: 'scale(0.9 0.9)',
                    }}
                    transform="scale(0.9 0.9) translate(20 18)"
                    stroke="url(#linear)"
                    filter="url(#f1)"
                    d="m 66.906305,293.33748 a 160.10918,160.10918 0 0 1 10e-7,-226.428566 a 160.10918,160.10918 0 0 1 226.428574,10e-7 a 160.10918,160.10918 0 0 1 -10e-6,226.428565"
                  />
                  <path
                    id="path"
                    style={{
                      fill: 'none',
                      fillRule: 'evenodd',
                      strokeWidth: 38,
                      strokeMiterlimit: 4,
                      stroke: '#223050',
                      strokeOpacity: '0.5',
                    }}
                    d="m 66.906305,293.33748 a 160.10918,160.10918 0 0 1 10e-7,-226.428566 a 160.10918,160.10918 0 0 1 226.428574,10e-7 a 160.10918,160.10918 0 0 1 -10e-6,226.428565"
                  />
                  <path
                    style={{
                      fill: 'none',
                      fillRule: 'evenodd',
                      strokeWidth: 40,
                      strokeMiterlimit: 4,
                      stroke: 'url(#linear)',
                    }}
                    id="arc"
                    d="m 66.906305,293.33748 a 160.10918,160.10918 0 0 1 10e-7,-226.428566 a 160.10918,160.10918 0 0 1 226.428574,10e-7 a 160.10918,160.10918 0 0 1 -10e-6,226.428565"
                  />

                  <line
                    className="line"
                    x1="53"
                    y1="306"
                    x2="180"
                    y2="180"
                    style={{
                      stroke: 'rgb(100,100,100)',
                      strokeWidth: 5,
                      transformOrigin: '180px 180px',
                      transform: `rotate(${temp_c * 4.3}deg)`,
                    }}
                  />
                 
                  <line
                    className="metka"
                    x1="180"
                    y1="14"
                    x2="180"
                    y2="26"
                    transform="rotate(226 180 180)"
                  ></line>
                  <line
                    className="metka"
                    x1="180"
                    y1="14"
                    x2="180"
                    y2="26"
                    transform="rotate(270 180 180)"
                  ></line>
                  <line
                    className="metka"
                    x1="180"
                    y1="14"
                    x2="180"
                    y2="26"
                    transform="rotate(315 180 180)"
                  ></line>
                  <line
                    className="metka"
                    x1="180"
                    y1="14"
                    x2="180"
                    y2="26"
                    transform="rotate(405 180 180)"
                  ></line>
                  <line
                    className="metka"
                    x1="180"
                    y1="14"
                    x2="180"
                    y2="26"
                    transform="rotate(450 180 180)"
                  ></line>
                  <line
                    className="metka"
                    x1="180"
                    y1="14"
                    x2="180"
                    y2="26"
                    transform="rotate(494 180 180)"
                  ></line>
                  <line
                    className="metka"
                    x1="180"
                    y1="14"
                    x2="180"
                    y2="26"
                  ></line>

                  <text x="85" y="275" className="number">
                    0
                  </text>
                  <text x="50" y="187" className="number">
                    10
                  </text>
                  <text x="82" y="100" className="number">
                    20
                  </text>
                  <text x="170" y="60" className="number">
                    35
                  </text>
                  <text x="255" y="100" className="number">
                    40
                  </text>
                  <text x="292" y="187" className="number">
                    50
                  </text>
                  <text x="255" y="275" className="number">
                    60
                  </text>
                </svg>
              </div>
           
  )
};

export default SVGDial;
