import { FC, useEffect, useRef } from 'react'
import TimeUtils from '../../helpers/TimeUtils'

interface Props {
  className: string
  time: Date
  setTime: (time: Date) => void
}

const TraditionalClock: FC<Props> = ({ time, setTime, className }) => {
  const clockRef = useRef<SVGSVGElement>(null)
  const hoursPointerRef = useRef<SVGPathElement>(null)
  const minutesPointerRef = useRef<SVGPathElement>(null)
  const secondsPointerRef = useRef<SVGPathElement>(null)
  const clockHourNumberRefs = useRef(Array(12))

  useEffect(() => {
    const rotateHand = (clock: SVGSVGElement | null, event: MouseEvent) => {
      const elem = event.target as HTMLElement
      if (!elem || !clock) {
        return
      }
      elem.style.cursor = 'grabbing'
      let rotating = true
      const rect = clock.getBoundingClientRect() // get clock size and position
      const radius = rect.width / 2 // calculate radius based on size
      const rotateHandler = (e: MouseEvent) => {
        const radians = Math.atan2(
          e.pageX - (rect.x + radius),
          e.pageY - (rect.y + radius)
        ) // account for position
        let rotateDegrees = radians * (180 / Math.PI) * -1 - 180
        if (rotating) {
          elem.style.transform = `rotate(${rotateDegrees}deg)`
        }
      }
      document.addEventListener('mousemove', rotateHandler)
      const cancelRotate = () => {
        elem.style.cursor = 'grab'
        rotating = !rotating
        document.removeEventListener('mousemove', rotateHandler)
        document.removeEventListener('mouseup', cancelRotate)
      }
      document.addEventListener('mouseup', cancelRotate)
    }
    const clockEl = clockRef.current
    const hoursPointerEl = hoursPointerRef.current
    const minutesPointerEl = minutesPointerRef.current

    if (clockEl && hoursPointerEl && minutesPointerEl) {
      clockEl.style.opacity = '0.8'
      hoursPointerEl.addEventListener('mousedown', (e) =>
        rotateHand(clockEl, e)
      )
      minutesPointerEl.addEventListener('mousedown', (e) =>
        rotateHand(clockEl, e)
      )
    }
  }, [])
  // Position clock hands based on the `time` value
  useEffect(() => {
    const hoursPointerEl = hoursPointerRef.current
    const minutesPointerEl = minutesPointerRef.current
    const secondsPointerEl = secondsPointerRef.current
    const clockHourNumberEls = clockHourNumberRefs.current
    if (
      hoursPointerEl &&
      minutesPointerEl &&
      secondsPointerEl &&
      clockHourNumberEls.every(Boolean)
    ) {
      const hoursAngle = TimeUtils.getClockHoursPointerAngleDeg(
        time.getHours(),
        time.getMinutes()
      )
      hoursPointerEl.style.transformOrigin = 'center'
      hoursPointerEl.style.transform = `rotate(${hoursAngle}deg)`
      const minutesAngle = TimeUtils.getClockMinutesPointerAngleDeg(
        time.getMinutes()
      )
      minutesPointerEl.style.transformOrigin = 'center'
      minutesPointerEl.style.transform = `rotate(${minutesAngle}deg)`
      const secondsAngle = TimeUtils.getClockSecondsPointerAngleDeg(
        time.getSeconds()
      )
      secondsPointerEl.style.transformOrigin = 'center'
      secondsPointerEl.style.transform = `rotate(${secondsAngle}deg)`

      const currentHoursAmPm = Number(
        time
          .toLocaleString('en-US', { hour: 'numeric', hour12: true })
          .split(' ')[0]
      )
      clockHourNumberEls.forEach((el) => (el.style.fill = 'black'))
      clockHourNumberEls[currentHoursAmPm - 1].style.fill = '#a00'
    }
  }, [time])

  return (
    <svg
      ref={clockRef}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="svg74"
      className={className}
      viewBox="0 0 400 400"
    >
      <defs>
        <path
          id="path66"
          fill="#000"
          fillRule="evenodd"
          d="M-204.82 291.65a52.319 52.319 0 1 1-104.64 0 52.319 52.319 0 1 1 104.64 0z"
          filter="url(#f)"
          opacity={0.8}
        />
      </defs>
      <defs id="defs32">
        <filter id="e">
          <feGaussianBlur id="feGaussianBlur2" stdDeviation={2.487} />
        </filter>
        <filter id="b">
          <feGaussianBlur id="feGaussianBlur5" stdDeviation={5.257} />
        </filter>
        <filter id="c">
          <feGaussianBlur id="feGaussianBlur8" stdDeviation={5.299} />
        </filter>
        <filter id="a">
          <feGaussianBlur id="feGaussianBlur11" stdDeviation={5.257} />
        </filter>
        <filter id="f">
          <feGaussianBlur id="feGaussianBlur14" stdDeviation={1.046} />
        </filter>
        <filter id="filter454" colorInterpolationFilters="sRGB">
          <feFlood
            id="feFlood444"
            floodColor="#000"
            floodOpacity={1}
            result="flood"
          />
          <feComposite
            id="feComposite446"
            in="flood"
            in2="SourceGraphic"
            operator="out"
            result="composite1"
          />
          <feGaussianBlur
            id="feGaussianBlur448"
            in="composite1"
            result="blur"
            stdDeviation={11.23}
          />
          <feOffset id="feOffset450" dx={0} dy={0} result="offset" />
          <feComposite
            id="feComposite452"
            in="offset"
            in2="SourceGraphic"
            operator="atop"
            result="composite2"
          />
        </filter>
        <filter id="filter526" colorInterpolationFilters="sRGB">
          <feFlood
            id="feFlood516"
            floodColor="#000"
            floodOpacity={1}
            result="flood"
          />
          <feComposite
            id="feComposite518"
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
          />
          <feGaussianBlur
            id="feGaussianBlur520"
            in="composite1"
            result="blur"
            stdDeviation={6}
          />
          <feOffset id="feOffset522" dx={0} dy={0} result="offset" />
          <feComposite
            id="feComposite524"
            in="SourceGraphic"
            in2="offset"
            operator="over"
            result="composite2"
          />
        </filter>
        <radialGradient
          id="d"
          cx={-485.71}
          cy={332.36}
          r={262.86}
          gradientTransform="rotate(-79.461 -71.91 -104.731) scale(.6549)"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop17" offset={0} stopColor="#f0f7f9" />
          <stop id="stop19" offset={1} stopColor="#ccc" />
        </radialGradient>
        <radialGradient
          id="g"
          cx={-257.14}
          cy={353}
          r={52.319}
          gradientTransform="matrix(1.6357 -.01413 .00864 .99996 160.42 -3.62)"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop22" offset={0} stopColor="#fff" />
          <stop id="stop24" offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="h"
          cx={-260.01}
          cy={219.21}
          r={37.016}
          gradientTransform="matrix(-.99219 .12477 -.07518 -.59784 -502.2 415.88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop27" offset={0} stopColor="#fff" />
          <stop id="stop29" offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
      <path
        id="path34"
        fill="#333"
        fillRule="evenodd"
        d="M-222.86 332.36a262.86 262.86 0 1 1-525.71 0 262.86 262.86 0 1 1 525.71 0z"
        filter="url(#filter526)"
        transform="translate(553.875 -45.138) scale(.72854)"
      />
      <path
        id="path36"
        fill="#000"
        fillRule="evenodd"
        d="M-222.86 332.36a262.86 262.86 0 1 1-525.71 0 262.86 262.86 0 1 1 525.71 0z"
        filter="url(#b)"
        transform="translate(528.663 -28.616) scale(.67662)"
      />
      <path
        id="path38"
        fill="none"
        stroke="url(#linearGradient2640)"
        strokeLinecap="round"
        strokeWidth={4.141}
        d="M-222.86 332.36a262.86 262.86 0 1 1-525.71 0 262.86 262.86 0 1 1 525.71 0z"
        filter="url(#c)"
        transform="translate(518.11 -21.392) scale(.6549)"
      />
      <path
        id="path40"
        fill="url(#d)"
        fillRule="evenodd"
        strokeWidth={0.655}
        d="M231.502 27.031a172.147 172.147 0 1 1-62.974 338.48 172.147 172.147 0 1 1 62.974-338.48Z"
      />
      <path
        ref={minutesPointerRef}
        fill="#000"
        fillRule="evenodd"
        strokeWidth={0.604}
        d="m200.1 45.068-5.613 139.24h2.247l-2.424 24.205 11.102.002-2.405-24.204 2.588.002z"
      />
      <path
        ref={secondsPointerRef}
        id="secondPointer"
        fill="#500"
        fillRule="evenodd"
        strokeWidth={0.419}
        d="m200.326 37.71-2.167 145.474.836.009-.915 25.283 4.137.045-.883-25.303.963.012z"
      />
      <path
        ref={hoursPointerRef}
        id="hourPointer"
        fill="#a00"
        fillRule="evenodd"
        strokeWidth={0.604}
        d="m200.324 86.438-6.303 103.974 2.432.007-2.663 18.07 12.036.033-2.57-18.085 2.801.008z"
      />
      <path
        id="path46"
        fill="#000"
        fillRule="evenodd"
        d="m424.13 439.78.91 16.14h5.49l.92-16.14zm-7.4.5-3.04.33 1.96 11.97 1.67-.17zm22.11 0-.59 12.13 1.67.17 1.96-11.97zm-34.56 1.82-3 .63 3.2 11.71 1.65-.36zm47.01 0-1.84 11.99 1.64.35 3.19-11.7zm-59.22 3.1-2.9.94 4.39 11.31 1.61-.53zm71.42 0-3.09 11.74 1.61.51 4.39-11.31zm-83.23 4.36-2.79 1.25 5.55 10.78 1.55-.69zm95.04 0-4.29 11.35 1.54.69 5.55-10.79zm-104.47 4.51-6.35 3.66 8.86 13.52 4.76-2.74zm113.92 0-7.29 14.44 4.76 2.74 8.86-13.52zm-126.42 7.79-2.47 1.78 7.67 9.4 1.36-.99zm138.9 0-6.56 10.21 1.37.98 7.68-9.39zm-148.78 7.79-2.27 2.04 8.6 8.54 1.26-1.12zm158.67.01-7.59 9.45 1.24 1.13 8.63-8.53zm-167.68 8.78-2.06 2.28 9.47 7.59 1.13-1.26zm176.69 0-8.54 8.62 1.13 1.25 9.45-7.59zm-184.74 9.68-1.8 2.47 10.2 6.57 1-1.38zm192.79.02-9.39 7.66.98 1.37 10.21-6.56zm-198.72 8.6-3.66 6.35 14.44 7.28 2.75-4.76zm204.64 0-13.53 8.87 2.75 4.76 14.44-7.28zm-211.56 12.98-1.24 2.81 11.33 4.3.69-1.54zm218.48.02-10.78 5.56.68 1.53 11.34-4.29zm-223.14 11.68-.94 2.92 11.72 3.08.53-1.6zm227.8.01-11.3 4.41.52 1.6 11.72-3.09zm-231.22 12.11-.63 2.99 11.98 1.85.36-1.65zm234.64.02-11.71 3.19.35 1.64 11.99-1.84zm-236.77 12.39-.31 3.04 12.11.58.18-1.67zm238.9.02-11.98 1.94.18 1.68 12.11-.59zm-239.71 10.42v7.32l16.14-.91v-5.49zm240.52 0-16.14.92v5.49l16.14.91zM320.13 570.5l-12.11.59.31 3.04 11.98-1.94zm215.3.02-.18 1.68 11.98 1.95.31-3.05zM321.81 581.7l-11.98 1.84.63 3 11.71-3.18zm211.93.01-.35 1.66 11.71 3.19.63-3zm-209.08 10.95-11.72 3.09.94 2.9 11.29-4.39zm206.24.02-.53 1.6 11.31 4.39.94-2.9zm-202.27 10.58-11.33 4.3 1.24 2.79 10.78-5.55zm198.29.01-.68 1.55 10.78 5.54 1.24-2.78zm-190.68 6.46-14.44 7.28 3.66 6.34 13.53-8.87zm183.08 0-2.75 4.75 13.53 8.87 3.66-6.34zm-179.53 13.2-10.21 6.56 1.8 2.48 9.39-7.68zm175.98.02-1 1.35 9.39 7.68 1.81-2.47zm-168.94 8.83-9.45 7.59 2.05 2.28 8.53-8.61zm161.88.02-1.13 1.25 8.54 8.61 2.05-2.27zm-153.93 8.04-8.62 8.55 2.28 2.05 7.59-9.47zm145.99.02-1.25 1.13 7.59 9.46 2.27-2.06zm-137.25 7.19-7.68 9.39 2.49 1.79 6.56-10.19zm128.5 0-1.35 1 6.56 10.2 2.47-1.81zm-118.68 1.8-8.86 13.51 6.35 3.66 7.27-14.42zm108.88 0-4.76 2.75 7.29 14.42 6.33-3.66zm-99.21 9.65-5.55 10.78 2.8 1.25 4.29-11.34zm89.53 0-1.55.69 4.31 11.35 2.78-1.24zm-79 4.15-4.39 11.29 2.92.95 3.09-11.73zm68.46 0-1.62.51 3.11 11.74 2.9-.94zm-36.96 1.51-.91 16.15h7.32l-.92-16.15zm-20.57 1.51-3.19 11.69 2.99.64 1.84-11.99zm46.61 0-1.65.34 1.85 11.99 3-.64zm-35.45 1.85-1.96 11.97 3.05.32.59-12.11zm24.28 0-1.67.18.58 12.11 3.05-.32z"
        transform="translate(-364.95 -543.385) scale(1.3207)"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[8] = el)}
        id="number9"
        fill="#000"
        d="M336.17 567.46c-2.55 0-4.39-.3-5.51-.92-1.13-.61-1.63-1.58-1.51-2.91v-.3h3.61v.3c0 .74.29 1.3.87 1.68.57.38 1.42.57 2.54.57 1.87 0 3.05-.33 3.53-.98.42-.59.65-1.91.69-3.96-1.6.69-3.3 1.03-5.1 1.03-2.26 0-3.87-.33-4.83-.99-.97-.66-1.45-1.77-1.45-3.31v-.55c0-1.5.61-2.62 1.83-3.37 1.21-.74 3.04-1.11 5.49-1.11 2.99 0 5.01.41 6.05 1.23s1.56 2.41 1.54 4.76v1.74c-.01 2.79-.55 4.66-1.61 5.64-1.05.97-3.1 1.45-6.14 1.45zm4.11-10.39c0-1.08-.27-1.82-.8-2.21-.53-.4-1.54-.59-3.01-.59-1.37 0-2.35.21-2.93.64-.59.43-.88 1.15-.88 2.16v.56c0 .96.3 1.65.9 2.07.59.42 1.56.64 2.91.64 1.25 0 2.19-.24 2.84-.7.64-.46.97-1.13.97-2.01v-.56z"
        transform="translate(-364.95 -543.385) scale(1.3207)"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[2] = el)}
        id="number3"
        fill="#000"
        d="M374.7 775.58c0-1.01-.2-1.72-.59-2.14-.39-.43-1.05-.64-1.97-.64-.84 0-1.48.26-1.91.78-.44.52-.64 1.26-.61 2.21v.6H367v-.6c-.1-1.66.29-2.94 1.18-3.84s2.22-1.35 3.97-1.35c1.69 0 2.97.38 3.85 1.15.87.77 1.31 1.89 1.31 3.37v.58c0 1.72-.38 2.93-1.16 3.64-.43.41-1.06.69-1.88.85.88.17 1.54.45 1.96.85.72.67 1.08 1.99 1.08 3.94v1.12c0 1.72-.46 3.02-1.38 3.88s-2.3 1.29-4.15 1.29c-1.69 0-2.97-.46-3.85-1.4-.89-.93-1.3-2.26-1.24-3.99v-.6h2.59v.6c-.02 1.08.17 1.88.58 2.4.4.52 1.03.78 1.88.78 1.02 0 1.77-.28 2.26-.82.48-.55.72-1.39.72-2.53v-1.11c0-1.01-.24-1.8-.72-2.37-.49-.57-1.17-.85-2.04-.85h-.77v-2.32h.27c1.13 0 1.95-.23 2.46-.69.52-.46.78-1.2.78-2.21v-.58z"
        transform="matrix(1.8416 0 0 .9471 -364.95 -543.385)"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[11] = el)}
        id="number12"
        fill="#000"
        strokeWidth={1.321}
        d="M206.385 63.965c-3.342 0-5.772.397-7.33 1.19-1.559.792-2.246 1.98-2.06 3.577v.582h4.808v-.582c-.04-1.017.277-1.717.937-2.113.674-.396 1.875-.619 3.645-.619 1.373 0 2.483.237 3.328.7.845.475 1.267 1.109 1.267 1.888 0 1.387-1.043 2.972-3.156 4.795-2.1 1.81-5.85 4.318-11.213 7.54v2.325h19.52v-2.074h-14.766c5.323-3.262 8.994-5.744 11.041-7.461 2.259-1.915 3.383-3.645 3.383-5.164 0-1.506-.793-2.642-2.39-3.408-1.599-.793-3.937-1.176-7.014-1.176zm-15.914.2a30.465 30.465 0 0 1-3.09 1.372c-.911.343-2.075.726-3.475 1.11v2.285c1.876-.502 3.435-.99 4.637-1.44l.95-.37v16.126h4.821V64.164h-3.843z"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[5] = el)}
        id="number6"
        fill="#000"
        strokeWidth={1.321}
        d="M200.375 304.254c-4.213 0-6.96.7-8.24 2.1-1.308 1.413-1.954 4.41-1.98 8.994v2.285c0 2.153.791 3.724 2.363 4.715 1.571.99 4.053 1.492 7.46 1.492 3.276 0 5.746-.49 7.383-1.48 1.638-.978 2.471-2.457 2.471-4.438v-.725c0-2.047-.607-3.501-1.822-4.373-1.215-.871-3.236-1.306-6.063-1.306-2.51 0-4.82.408-6.947 1.24.053-2.457.384-4.106.979-4.951.686-.978 2.15-1.467 4.396-1.467 1.48 0 2.59.25 3.355.765.766.502 1.149 1.242 1.149 2.22v.396h4.767v-.397c.159-1.756-.514-3.05-1.994-3.855-1.479-.806-3.91-1.215-7.277-1.215zm-.396 9.416c1.77 0 3.05.278 3.843.846.793.554 1.19 1.466 1.19 2.734v.725c0 1.334-.396 2.285-1.162 2.853-.766.568-2.062.86-3.871.86-1.929 0-3.248-.265-3.948-.78-.7-.515-1.056-1.494-1.056-2.933v-.725c0-1.175.422-2.06 1.28-2.668.846-.607 2.086-.912 3.724-.912z"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[10] = el)}
        id="number11"
        fill="#000"
        strokeWidth={1.321}
        d="M132.24 80.936a29.973 29.973 0 0 1-3.103 1.4c-.912.343-2.06.7-3.473 1.084v2.283c1.889-.489 3.433-.963 4.648-1.412l.952-.37v16.126h4.806V80.936h-3.83zm16.166 0a29.753 29.753 0 0 1-3.078 1.4c-.911.343-2.073.7-3.473 1.084v2.283c1.876-.489 3.408-.963 4.624-1.412l.95-.37v16.126h4.833V80.936h-3.856z"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[9] = el)}
        id="number10"
        fill="#000"
        strokeWidth={1.321}
        d="M104.85 125.008c-3.342 0-5.786.424-7.397 1.256-1.611.832-2.416 2.125-2.416 3.855v9.008c0 1.743.845 3.103 2.549 4.041 1.704.95 4.12 1.426 7.264 1.426 3.209 0 5.678-.476 7.355-1.4 1.664-.938 2.496-2.284 2.496-4.067v-9.008c0-1.81-.765-3.116-2.31-3.922-1.546-.792-4.068-1.19-7.541-1.19zm-15.678.199a29.69 29.69 0 0 1-3.076 1.398c-.912.344-2.075.701-3.475 1.084v2.286c1.875-.502 3.435-.966 4.637-1.428l.937-.383v16.152h4.834v-19.109h-3.857zm15.678 1.9c1.77 0 3.063.24 3.855.702.793.475 1.19 1.24 1.19 2.31v9.008c0 1.083-.423 1.914-1.282 2.482-.845.555-2.113.819-3.763.819-1.704 0-2.959-.263-3.778-.805-.819-.541-1.228-1.373-1.228-2.496v-9.008c0-1.122.383-1.916 1.123-2.351.74-.45 2.02-.66 3.883-.66z"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[7] = el)}
        id="number8"
        fill="#000"
        strokeWidth={1.321}
        d="M96.848 246.863c-2.965-.043-5.254.378-6.87 1.264-1.573.853-2.375 2.071-2.455 3.648.039 1.507.749 2.628 2.149 3.356.84.429 1.96.75 3.357.969-1.733.154-3.046.476-3.974.955-1.43.754-2.176 2.058-2.256 3.902.029 1.785.81 3.128 2.324 4.027 1.589.923 4.05 1.413 7.365 1.461 3.057.045 5.476-.413 7.221-1.363 1.69-.93 2.565-2.22 2.643-3.873-.025-1.955-.677-3.298-1.938-4.025-.767-.428-1.96-.748-3.576-.952 1.31-.17 2.364-.458 3.162-.882 1.3-.7 1.988-1.804 2.063-3.315-.029-1.71-.755-2.987-2.163-3.81-1.479-.865-3.83-1.315-7.052-1.362zm9.215 5.172c0 .065.008.126.007.192l.006-.38c0 .065-.01.125-.013.188zm.289 9.174c0 .083.009.16.007.246l.006-.406c0 .055-.01.106-.013.16zm-19.553-.252c-.001-.065-.009-.127-.008-.193l-.006.406c.001-.074.01-.14.014-.213zm.724-9.182c-.001-.067-.01-.13-.01-.199l-.003.38c0-.063.01-.12.013-.18zm9.293-2.83c1.584.023 2.722.297 3.414.809.652.481.976 1.244 1 2.277.004-.065.019-.12.02-.187l-.006.377c.001-.068-.012-.124-.014-.19-.056 1.028-.42 1.807-1.103 2.305-.744.529-1.872.788-3.4.766-1.51-.022-2.63-.313-3.34-.864-.684-.516-1.027-1.304-1.055-2.328-.004.063-.019.117-.02.182l.006-.38c0 .071.012.13.014.198.058-.966.44-1.711 1.139-2.2.763-.528 1.872-.786 3.345-.765zm-.193 8.285c1.934.029 3.236.313 3.91.834.655.494.979 1.403.996 2.7.003-.068.017-.124.018-.194l-.006.409c.001-.078-.01-.14-.012-.215-.055 1.256-.441 2.169-1.166 2.707-.782.576-2.057.842-3.843.816-1.916-.028-3.219-.313-3.91-.853-.638-.511-.96-1.456-.977-2.79-.003.066-.017.122-.018.19l.006-.408c-.001.079.01.142.012.219.054-1.212.423-2.098 1.146-2.618.764-.557 2.04-.823 3.844-.797z"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[6] = el)}
        id="number7"
        fill="#000"
        strokeWidth={1.321}
        d="m131.382 307.428 12.677-16.836-14.27-.208.03-2.093 18.561.27-.03 2.094-11.26 16.856z"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[4] = el)}
        id="number5"
        fill="#000"
        strokeWidth={1.321}
        d="M268.37 304.018c-.032 2.15-.754 3.664-2.185 4.524-1.412.86-3.868 1.26-7.311 1.21-3.425-.05-5.814-.407-7.15-1.061-1.334-.664-2.054-1.849-2.195-3.546l.008-.569 4.77.07-.008.568c.098.807.458 1.4 1.116 1.788.657.379 1.649.583 2.974.602 2.044.03 3.411-.225 4.119-.774.726-.538 1.092-1.613 1.115-3.223l.019-1.278c.017-1.193-.302-2.041-.94-2.524-.619-.483-1.757-.736-3.396-.76-1.565-.023-2.728.178-3.49.593-.779.415-1.138 1.054-1.132 1.916l-4.917-.072.514-11.245 17.364.253-.03 2.15-12.983-.19-.273 6.078c.835-.414 1.521-.717 2.077-.917 1.24-.446 2.735-.652 4.503-.626 2.817.041 4.763.486 5.856 1.326 1.092.84 1.623 2.316 1.593 4.428z"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[3] = el)}
        id="number4"
        fill="#000"
        strokeWidth={1.321}
        d="m301.938 247.656-11.71 12.276-.027 1.968 13.387.196-.068 4.687 4.824.072.068-4.689 4.272.063.03-2.083-4.27-.062.179-12.33-6.685-.098zm1.826 2.395-.147 9.963-9.133-.133 9.28-9.83z"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[1] = el)}
        id="number2"
        fill="#000"
        strokeWidth={1.321}
        d="M313.815 130.395c-.022 1.516-1.17 3.213-3.463 5.103-2.07 1.693-5.77 4.121-11.14 7.301l14.769.215-.03 2.084-19.501-.285.034-2.32c5.387-3.151 9.162-5.616 11.287-7.394 2.144-1.787 3.217-3.372 3.237-4.745.012-.777-.403-1.408-1.243-1.894-.84-.476-1.941-.73-3.304-.749-1.768-.026-3.005.155-3.673.553-.67.388-.992 1.093-.952 2.117l-.008.568-4.806-.07.008-.568c-.18-1.604.52-2.787 2.096-3.56 1.577-.772 4.032-1.134 7.365-1.086 3.075.045 5.408.477 6.98 1.277 1.59.8 2.366 1.957 2.344 3.453z"
      />
      <path
        ref={(el) => (clockHourNumberRefs.current[0] = el)}
        id="number1"
        fill="#000"
        strokeWidth={1.321}
        d="m262.56 99.953.235-16.127-.963.346c-1.203.437-2.757.888-4.643 1.353l.034-2.283c1.405-.358 2.57-.7 3.477-1.038a29.058 29.058 0 0 0 3.114-1.347l3.83.056-.278 19.11z"
      />
      <use
        xlinkHref="#path66"
        fillRule="evenodd"
        filter="url(#f)"
        opacity={0.8}
        transform="matrix(.14492 -.02618 .02618 .14492 229.695 147.406)"
      />
      <use
        xlinkHref="#path66"
        id="path68"
        fillRule="evenodd"
        transform="rotate(-10.24 935.845 -1207.73) scale(.14727)"
      />
      <path
        id="path70"
        fill="url(#g)"
        fillRule="evenodd"
        d="M-204.82 291.65a52.32 52.32 0 1 1-104.64 0 52.32 52.32 0 1 1 104.64 0z"
        transform="rotate(-10.246 971.422 -1182.36) scale(.12765)"
      />
      <path
        id="path72"
        fill="url(#h)"
        fillRule="evenodd"
        d="M-257.16 243.62c-17.15 0-32.07 9.03-40.56 22.54 11.17-10.63 26.22-17.19 42.81-17.19 11.38 0 22.04 3.11 31.22 8.47-8.65-8.47-20.39-13.82-33.47-13.82z"
        opacity={0.8}
        transform="matrix(.14492 -.02618 .02618 .14492 229.64 147.327)"
      />
    </svg>
  )
}

export default TraditionalClock
