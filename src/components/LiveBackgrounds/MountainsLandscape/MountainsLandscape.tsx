import { FC } from 'react'
import liveBackgroundsStyles from '../LiveBackgrounds.module.scss'
import styles from './MountainsLandscape.module.scss'
import startOfToday from 'date-fns/startOfToday'
import endOfToday from 'date-fns/endOfToday'

interface Props {
  time: Date
}

const MountainsLandscape: FC<Props> = ({ time }): JSX.Element => {
  const now = time.valueOf()
  const start = startOfToday().valueOf()
  const end = endOfToday().valueOf()
  const timeRangeMillis = end - start
  const elapsedMillis = now - start
  const dayCompletePercentage = Math.max(
    0,
    Math.min(100, 100 * (elapsedMillis / timeRangeMillis))
  )

  const grayscale =
    dayCompletePercentage < 20 || dayCompletePercentage > 80
      ? 100
      : Math.pow(dayCompletePercentage / 12.1 - 4.13, 6)
  const globalBrightness =
    dayCompletePercentage < 25 || dayCompletePercentage > 75
      ? 22
      : 100 - Math.pow(dayCompletePercentage / 12.1 - 4.13, 6)
  const skyBrightness = 100 - Math.pow(dayCompletePercentage / 15 - 3.34, 6)
  console.log('Global', globalBrightness)

  console.log(time, dayCompletePercentage)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 7056.427 5412.547"
      preserveAspectRatio="xMidYMid slice"
      className={liveBackgroundsStyles.svg}
      style={{
        filter: `brightness(${globalBrightness}%) grayscale(${grayscale}%)`,
      }}
    >
      <path
        id={styles.sky}
        d="M16300.1 0H0v12502.8h16300.1V0"
        style={{
          fill: '#b1e1d6',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          filter: `brightness(${globalBrightness}%)`,
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="M16300.1 0H0v4408.67h16300.1V0"
        style={{
          fill: '#91b124',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="m5740.19 4411.75 3127.32-308-554.4-138.6h3049.19l-194.1 194.04 5131.9 47.58-4.9 201.9-10555.01 3.08"
        style={{
          fill: '#a7b91e',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="m16300.1 3276.69-3576.8-164.68-1804.6 465.07L0 3483.36V0h16300.1v2673.86l-1458.5 142.97 1458.5 124.24v335.62"
        style={{
          fill: '#87a927',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="M2166.45 14972.7 5976.37 16300l597.86-453.1 775.35 67.1 536.77-335.7 1192.83-537 596.41-671.4 1312.11-469.9 715.7-872.7v-1544.1H2280.06l-113.61 3489.5"
        style={{
          fill: '#98d6c8',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.2012 0 0 -.2012 0 5412.547)"
      />
      <path
        d="m16300 6872.94-1908 664.77-299.4-226.93-388.3 33.62-268.8-168.13-597.4-268.94-298.7-336.22-657.1-235.33-358.4-437.08v-773.25h4719.2l56.9 1747.49"
        style={{
          fill: '#98d6c8',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.40176 0 0 -.40176 0 5412.547)"
      />
      <path
        id={styles.sun}
        d="M16300 13079.3c0-442.3-358.6-800.9-800.9-800.9-442.4 0-800.9 358.6-800.9 800.9 0 442.4 358.5 801 800.9 801 442.3 0 800.9-358.6 800.9-801"
        style={{
          fill: '#fbd47f',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.32535 0 0 -.32535 0 5412.547)"
      />
      <path
        d="m8590.88 5207.58 1303.63 669.06 513.69-42.97 362.5 257.96h272l997 558.97 604.3-214.99 1420.1 601.97 725.2-258 453.2 258 1057.5-730.96-30.2-1504.92H8867.21l-276.33 405.88"
        style={{
          fill: '#6cc9bb',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.39716 0 0 -.39716 0 5412.547)"
      />
      <path
        d="m8056.06 13793.1 2508.64 470.6 598.6-453.9 776.5 67.3 537.6-336.2 1194.5-537.8 597.3-672.3 1314.1-470.6 716.7-874.1V9509.65l-9418.87-3.45 1174.93 4286.9"
        style={{
          fill: '#6cc9bb',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.2009 0 0 -.2009 0 5412.547)"
      />
      <path
        d="m16300.1 6906.63-987.6-462.31-402.1-69.29-394.5-376.46-6.1-5.86-264.7 11.95-221.8-111.09h-498.9l-493.4-239.53-464.8-112.91-253.5-225.79-65.6-27.32-413.6-172.2-748.4-185.17-673.6-518.5 5888.6-3.48v2497.96"
        style={{
          fill: '#2f5c28',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="m15590.3 9099.97-640.1 763.32-628.9 52.91-2719.3 1224.3-1712.85 482.1-99.89 28-724.08 400.5-726.18 109.7-839.56 376.5-882.64 31.6-1654.93 880-2638.59 59.4-60.96 1.4L0 14303.3V8588.08l16300-1.02-709.7 512.91"
        style={{
          fill: '#2f5c28',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.22226 0 0 -.22226 0 5412.547)"
      />
      <path
        d="m0 9179.28 1561.68 184.41 1817.61-184.41 979.93 184.41 426.14-118.12h325.33l454.35-227.27 910.6 227.27 2218.5-66.29 343.73 184.41L10924 9018.3l548.8 178.15 475-178.15 2680 227.27 1672.2-456.99L0 8774.23v405.05"
        style={{
          fill: '#2a481f',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.21742 0 0 -.21742 0 5412.547)"
      />
      <path
        d="m13725.8 10387-1912.9-556.89H16300l-501.8 385.59-1062.8-214.2-1009.6 385.5"
        style={{
          fill: '#fff',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.41436 0 0 -.41436 0 5412.547)"
      />
      <path
        d="m14708.7 10531.7-971-132.7v-83.1H16300l-539.4 149.4-539.5-83-512.4 149.4"
        style={{
          fill: '#d1efe6',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.29516 0 0 -.29516 0 5412.547)"
      />
      <path
        d="m14875.9 13094.7-868.9-118.8v-74.3h2293l-482.7 133.7-482.8-74.2-458.6 133.6"
        style={{
          fill: '#d1efe6',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.22516 0 0 -.22516 0 5412.547)"
      />
      <path
        d="m13863.2 15900.4-1486.9-203.4v-127.1H16300l-826.1 228.8-826-127.1-784.7 228.8"
        style={{
          fill: '#d1efe6',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.20352 0 0 -.20352 0 5412.547)"
      />
      <path
        d="m4062.68 16300 805.88-303.8 236.94-306.8H675.258l864.692 328.2 1121.42-110.1 1401.31 392.5"
        style={{
          fill: '#d1efe6',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.30062 0 0 -.30062 0 5412.547)"
      />
      <path
        d="m6038.72 16300 597.09-225.1 175.58-227.3H3528.94l640.66 243.2 830.88-81.6 1038.24 290.8"
        style={{
          fill: '#fff',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.28744 0 0 -.28744 0 5412.547)"
      />
      <path
        d="m15191.5 16300 750.1-282.8 220.5-285.5h-4123.3l804.7 305.5 1043.8-102.6 1304.2 365.4"
        style={{
          fill: '#fff',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.30275 0 0 -.30275 0 5412.547)"
      />
      <path
        d="m12647.7 16300 739.6-278.9 217.5-281.5H9538.73l793.67 301.2 1029.2-101.1 1286.1 360.3"
        style={{
          fill: '#d1efe6',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.30701 0 0 -.30701 0 5412.547)"
      />
      <path
        d="m9372.77 12536.1 532.12 361.6 1468.21 228.4 1649.5-391.7h593.9l960.9 219.5 778.2-76 944.4-341.8H9372.77"
        style={{
          fill: '#fff',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.31134 0 0 -.31134 0 5412.547)"
      />
      <path
        d="m16214.4 11979.8-963.9-270-771.3 75.8-594.8-225.8h2415.7v387.7l-85.7 32.3"
        style={{
          fill: '#d1efe6',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="M4718.78 15818.6 3441.9 16300l-2220.31-622L0 15798v-465.4h5588.3l-869.52 486"
        style={{
          fill: '#fff',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.2287 0 0 -.2287 0 5412.547)"
      />
      <path
        d="m14083.1 8513.65-1594.6 310.58-1992-449.49-485.8-274.73h6289.4v833.37l-2217-419.73"
        style={{
          fill: '#fff',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="m14524.6 940.53-666.9 353.29-3318.5 1178.21S8227.33 4138.19 8149.98 4181.12c-77.31 42.98-4532.06 763.14-4532.06 763.14l-733.33-121.78L0 4343.5V0h16300l-1775.4 940.53"
        style={{
          fill: '#699c2d',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.34718 0 0 -.34718 0 5412.547)"
      />
      <path
        d="M14349.6 5738.92c-8.6 154.65-3 234.59-76.1 371.11 218.5-40.37 388.6-8.05 607.1-48.41-38 25.51-24.7 89.94 13.2 115.62 37.9 25.64 87.4 23.8 133.1 20.53 430.5-30.88 857.7-105.6 1273.1-222.63-145.7 208.11-358.8 373.88-564.2 527.57l-6.6-6.35-286.9 12.95-240.4-120.42H14661l-534.9-259.66-503.7-122.4-274.9-244.77-71.1-29.62c342.6 10.96 746.2-13.55 1073.2 6.48"
        style={{
          fill: '#2b5425',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.39935 0 0 -.39935 0 5412.547)"
      />
      <path
        d="M4865.71 14937.7c192.5-159.7 380.97-330.6 607.78-436.1 226.79-105.4 505.01-135.9 721.57-10.8 94.58 54.7 176.41 137.5 283.04 161.2 361.98 80.3 548.88-535.4 919.61-539.9 333.85-4 572.52 500.2 883.78 379.5 93.6-36.3 156.36-122.6 227.23-193.6 210.21-210.5 509.97-298.7 796.71-378.1 663.5-183.5 1328.87-360 1996.17-529.5a4465.627 4465.627 0 0 0-349.5 449.5c389.4-94.1 785.7-159.7 1184.6-196-79.5 120.2-147.7 247.8-203.8 380.6l-120.5 33.9-873.8 483.3-876.2 132.3-1013.08 454.3-1065.05 38.2-1996.94 1061.8-3183.9 71.7-32.33-107c756.62-308.7 1465.68-733.6 2094.61-1255.3"
        style={{
          fill: '#2b5425',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.1842 0 0 -.1842 0 5412.547)"
      />
      <path
        d="M11849.9 14324.1h-101.5v1056.2h101.5v-1056.2"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13333 0 0 -.13333 0 5412.547)"
      />
      <path
        d="M11287.6 14799.7c-113.7 113.7-151.2 282.9-96.1 434.1l388.6 1066.2 388.6-1066.2c55-151.2 17.5-320.4-96.2-434.1-161.5-161.6-423.3-161.6-584.9 0"
        style={{
          fill: '#2a481f',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13586 0 0 -.13586 0 5412.547)"
      />
      <path
        d="M16300 1288.27h-101.2v1120.81h101.2V1288.27"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.29513 0 0 -.29513 0 5412.547)"
      />
      <path
        d="M15347.2 2001.95c-147.2 147.17-195.8 366.34-124.5 561.91l503 1380.19 503-1380.19c71.3-195.57 22.8-414.74-124.4-561.91-209.1-209.07-548-209.07-757.1 0"
        style={{
          fill: '#2a481f',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.30496 0 0 -.30496 0 5412.547)"
      />
      <path
        d="M11364.4 3191.47c530.8 162.72 1056.1 351.19 1569.4 562.38 361.6 148.79 742.4 302.28 1068.9 520.66 374.1 250.26 1859.3 1142.41 1311 1638.24-190.8 172.54-531.1 344.1-461.5 657.93 57.7 259.97 404 384.85 639.2 385.48.1 0 587.2 1.55 590.8 1.55 0 0-739.4-169.37-474.9-473.88 88.6-101.91 206.7-204.69 298.7-305.91 228.7-251.57 394-445.18 287.1-789.08-124.9-401.8-1234.1-1993.65-1580.3-2398.71-427.5-500.16-819.5-503.85-1467.8-315.63-383.8 111.48-767.6 222.91-1151.4 334.34-125.9 36.52-499.7 222.32-629.2 182.63"
        style={{
          fill: '#b6c553',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.2745 0 0 -.2745 0 5412.547)"
      />
      <path
        d="M10544.2 14314.1h-158.5v1271.6h158.5v-1271.6"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13333 0 0 -.13333 0 5412.547)"
      />
      <path
        d="M9573.31 14380.2h-.09c-145.45 145.4-193.43 362-122.97 555.4l497.2 1364.4 497.35-1364.4c70.4-193.4 22.4-410-123.1-555.4-206.7-206.8-541.74-206.8-748.39 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.14027 0 0 -.14027 0 5412.547)"
      />
      <path
        d="M3269.22 14307.7h-171.46v1091h171.46v-1091"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13333 0 0 -.13333 0 5412.547)"
      />
      <path
        d="M2540.91 14100.1c-166.72 166.7-221.69 415-140.96 636.5l569.77 1563.4 569.78-1563.4c80.73-221.5 25.76-469.8-140.96-636.5-236.83-236.8-620.81-236.8-857.63 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.14293 0 0 -.14293 0 5412.547)"
      />
      <path
        d="M15098.9 14314.1h-109.5v849.2h109.5v-849.2"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13333 0 0 -.13333 0 5412.547)"
      />
      <path
        d="M14771.7 14856.7c-106 105.9-140.9 263.6-89.6 404.4l362 993.3 362.1-993.3c51.3-140.8 16.3-298.5-89.6-404.4-150.5-150.5-394.4-150.5-544.9 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13333 0 0 -.13333 0 5412.547)"
      />
      <path
        d="M16300 14276.5h-109.2v847h109.2v-847"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13368 0 0 -.13368 0 5412.547)"
      />
      <path
        d="M15493.1 14479.9c-124.6 124.7-165.7 310.2-105.4 475.8l426 1168.9 425.9-1168.9c60.4-165.6 19.3-351.1-105.3-475.8-177.1-177.1-464.1-177.1-641.2 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13733 0 0 -.13733 0 5412.547)"
      />
      <path
        d="M16300 13266.6h-101.5v787.1h101.5v-787.1"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.14386 0 0 -.14386 0 5412.547)"
      />
      <path
        d="M15609.4 13487.2v.1c-106.7 106.6-141.9 265.5-90.3 407.2l364.6 1000.3 364.6-1000.3c51.7-141.7 16.5-300.6-90.2-407.2v-.1c-151.5-151.5-397.2-151.5-548.7 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.14717 0 0 -.14717 0 5412.547)"
      />
      <path
        d="M16300 1780.3h-65.4v832.57h65.4V1780.3"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.2725 0 0 -.2725 0 5412.547)"
      />
      <path
        d="M15665.6 2495.38c-97.9 97.96-130.2 243.88-82.8 374.06l334.9 918.85 334.9-918.85c47.4-130.18 15.1-276.1-82.9-374.06-139.2-139.23-364.8-139.23-504.1 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.2785 0 0 -.2785 0 5412.547)"
      />
      <path
        d="M16300 2121.1h-69.6v885.85h69.6V2121.1"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.2561 0 0 -.2561 0 5412.547)"
      />
      <path
        d="M15625.9 2873.11c-104.1 104.09-138.4 259.15-88 397.48l355.8 976.37 355.9-976.37c50.4-138.33 16.1-293.39-88-397.48-148-147.94-387.7-147.94-535.7 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.26209 0 0 -.26209 0 5412.547)"
      />
      <path
        d="M16300 1074.88h-103.8v870.4h103.8v-870.4"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.30875 0 0 -.30875 0 5412.547)"
      />
      <path
        d="M16300 624.539h-99.3v774.501h99.3V624.539"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.32256 0 0 -.32256 0 5412.547)"
      />
      <path
        d="M16300 38.907h-94.8v739.379h94.8V38.908"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.33789 0 0 -.33789 0 5412.547)"
      />
      <path
        d="M16300 0h-90.3v465.483h90.3V0"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.3547 0 0 -.3547 0 5412.547)"
      />
      <path
        d="M16300 3117.38h-90.7v706.9h90.7v-706.9"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.3534 0 0 -.3534 0 5412.547)"
      />
      <path
        d="M16300 2485.14h-86.9v786.13h86.9v-786.13"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.36876 0 0 -.36876 0 5412.547)"
      />
      <path
        d="M16300 2036.84h-82.5v642.91h82.5v-642.91"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.38859 0 0 -.38859 0 5412.547)"
      />
      <path
        d="M16300 1735.58h-78.6v612.86h78.6v-612.86"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.40764 0 0 -.40764 0 5412.547)"
      />
      <path
        d="M16300 1515.5h-75.4v587.76h75.4V1515.5"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.42502 0 0 -.42502 0 5412.547)"
      />
      <path
        d="m16277 2496.18-812.4 237.67 22.9 78.6 812.5-237.71-23-78.56m0-184.74-812.4 237.71 22.9 78.56 812.5-237.68-23-78.59"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.38764 0 0 -.38764 0 5412.547)"
      />
      <path
        d="m16275.8 3029.67-699.2 204.58 24.2 82.58 699.2-204.54-24.2-82.62"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.36876 0 0 -.36876 0 5412.547)"
      />
      <path
        d="m16255.3 615.605-713.9 412.165 44.7 77.35 713.9-412.166-44.7-77.349"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.33734 0 0 -.33734 0 5412.547)"
      />
      <path
        d="m16271.6 295.542-741 261.857 28.4 80.3 741-261.855-28.4-80.302m0-171.041-741 261.819 28.4 80.301 741-261.818-28.4-80.302"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.35383 0 0 -.35383 0 5412.547)"
      />
      <path
        d="m16253.3 1194.82-746.8 431.12 46.7 80.95 746.8-431.15-46.7-80.92"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.32248 0 0 -.32248 0 5412.547)"
      />
      <path
        d="m16277.6 2062.62-730.8 213.82 22.4 76.69 730.8-213.78-22.4-76.73"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.40683 0 0 -.40683 0 5412.547)"
      />
      <path
        d="M16277.7 1883.32 15603 2080.7l22.3 76.46 674.7-197.39-22.3-76.45"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.42482 0 0 -.42482 0 5412.547)"
      />
      <path
        d="m16300.1 1759.11-349.1 59.84 13.2 77.03 335.9-57.5v-79.37"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="M16114.5 0 15568 225.123l15.4 90.039L16300 0h-185.5"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.37035 0 0 -.37035 0 5412.547)"
      />
      <path
        d="M16194.5 4642.46h-163.4l-228.2-114.14-457.3 114.14-1114.2-33.29-172.6 92.61-947.4-173.46-275.5 89.47-238.6-89.47-1346 114.14-839.8-229.51 5888.6-4.28v252.83l-105.6-19.04"
        style={{
          fill: '#2a481f',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="m16005.9 3753.35-275.5 89.47-238.6-89.47-1346 114.14L13306 3638l2994.1-2.71v171.92l-294.2-53.86"
        style={{
          fill: '#699c2d',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.4329 0 0 -.4329 0 5412.547)"
      />
      <path
        d="M16300 4508.05h-54.1v494.21h54.1v-494.21"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.40207 0 0 -.40207 0 5412.547)"
      />
      <path
        d="M15818.5 4797.36c-74.3 74.36-98.9 185.12-62.9 283.94l254.2 697.41 254.2-697.41c36-98.82 11.5-209.58-62.9-283.94-105.6-105.64-276.9-105.64-382.6 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.40868 0 0 -.40868 0 5412.547)"
      />
      <path
        d="M16300 4686.33h-45.6v305.6h45.6v-305.6"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.38692 0 0 -.38692 0 5412.547)"
      />
      <path
        d="M16024.9 4963.33c-42.5 42.5-56.5 105.76-35.9 162.22l145.2 398.52 145.2-398.52c20.6-56.46 6.6-119.72-35.9-162.22-60.4-60.39-158.3-60.39-218.6 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.39035 0 0 -.39035 0 5412.547)"
      />
      <path
        d="M16300 5316.34h-43.9v250.74h43.9v-250.74"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.359 0 0 -.359 0 5412.547)"
      />
      <path
        d="M16029.8 5440.91c-41.7 41.75-55.5 103.86-35.3 159.31l142.6 391.35 142.7-391.35c20.2-55.45 6.4-117.56-35.3-159.31-59.3-59.28-155.4-59.28-214.7 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.36213 0 0 -.36213 0 5412.547)"
      />
      <path
        d="M16300 5469.35h-45.1v257.95h45.1v-257.95"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.34895 0 0 -.34895 0 5412.547)"
      />
      <path
        d="M16056.2 5589.58c-37.7 37.65-50.1 93.73-31.9 143.74l128.7 353.17 128.8-353.17c18.2-50.01 5.8-106.09-31.9-143.74-53.5-53.5-140.2-53.5-193.7 0"
        style={{
          fill: '#2a481f',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.35164 0 0 -.35164 0 5412.547)"
      />
      <path
        d="M16300 5636.03h-46.5v265.81h46.5v-265.81"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.33863 0 0 -.33863 0 5412.547)"
      />
      <path
        d="M16013.7 5765.09c-44.2 44.24-58.8 110.05-37.3 168.8l151.1 414.67 151.1-414.67c21.4-58.75 6.8-124.56-37.4-168.8-62.8-62.82-164.7-62.82-227.5 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.34177 0 0 -.34177 0 5412.547)"
      />
      <path
        d="M16300 5841.64h-48.2v275.51h48.2v-275.51"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.32671 0 0 -.32671 0 5412.547)"
      />
      <path
        d="M16003.4 5973.41c-45.8 45.83-60.9 114.03-38.7 174.9l156.6 429.65 156.5-429.65c22.2-60.87 7.1-129.07-38.7-174.9-65.1-65.09-170.6-65.09-235.7 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.32985 0 0 -.32985 0 5412.547)"
      />
      <path
        d="m16300 1055.5-748.4 396.47-3724.1 1322.23s-2594.51 1869.82-2681.31 1918c-86.76 48.23-5086.03 856.42-5086.03 856.42l-822.97-136.66 301.93-240.58c-30.5-201.45 64.97-531.85-46.38-604.25 106.06 69.13 242.1 65.12 368.53 58.65 129.14-6.59 258.29-13.18 387.43-19.78l1606.57-1280.08 766.22 414.05c128.65-187.53 410.13-353.07 518.35-279.97 73.66 49.77 85.56 181.27 173.95 190.62 46.42 4.87 86.07-30.12 122.96-58.7 171.5-132.87 399.06-162.01 614.6-186.4 2.19 54.99 4.35 109.99 6.55 164.98l485.25-139.72 1540.45-599s-230.93-673.94 0-749.71c231.1-75.76 1723.4-140.67 1723.4-140.67l1092.8-246.83c50.5-37.58 100.9-41.51 150.3-33.96l56.8-12.85 337.9-210.71c14-54.6 25.9-108.91 42.6-153.26 42.4-113.56 123.3-226.48 242.4-249.33 107.1-20.6 225.4 35.95 323.6-11.8 53.6-26.123 88.9-78.402 120.3-129.087 49.7-79.777 98.1-163.691 173.3-219.979 75.3-56.287 186.2-77.405 262.3-22.324 14.1 10.172 26.6 22.671 39.1 35.169l56.5-35.255 168.3 37.969c20.9-21.334 38.8-46.417 52.2-71.672 41.4-78.442 72.4-172.7 151.6-212.652 80.8 113.308 143.5 239.459 185.5 372.118l714.8 161.233 322.7 117.32"
        style={{
          fill: '#5b9831',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.30936 0 0 -.30936 0 5412.547)"
      />
      <path
        d="M15791.1 5345.61c-229 52.94-474.2 32.91-691.6-56.32a7355.104 7355.104 0 0 1 932.6-609.83c37.9 173.63 133.4 334.15 267.9 450.24-100.7 180.77-305 298.7-511.9 295.47"
        style={{
          fill: '#5b9831',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.17377 0 0 -.17377 0 5412.547)"
      />
      <path
        d="M15839.5 6232.19c6.1-161.77 55-321.83 140.5-459.31 9.4 154.59 224.3 214.21 276.1 360.16 43.9 123.7-70.3 269.99-201.6 268.88-131.3-1.02-241.3-133.8-230.7-264.6"
        style={{
          fill: '#5b9831',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.15585 0 0 -.15585 0 5412.547)"
      />
      <path
        d="M16300 1697.8c-153.5 10.09-308 5.31-460.5-14.29-35.7-4.62-77.9-15.18-89.5-49.22-7.8-22.93 1.8-47.73 11.3-70.03 34.8-81.02 75.9-168.9 156-205.75 111.9-51.45 239 20.39 340.9 89.47 24.8 78.32 11.7 167.68-34.3 235.64"
        style={{
          fill: '#5b9831',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.25112 0 0 -.25112 0 5412.547)"
      />
      <path
        d="m0 2553.31 4334.89-1025.98 2868.6-545.667 3422.81-240.381 1861.6-494.218 1665.9 78.616L16300 0H0v2553.31"
        style={{
          fill: '#afc554',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.30324 0 0 -.30324 0 5412.547)"
      />
      <path
        d="M5430.94 9.297h-578.35V5061.4h578.35V9.297"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13333 0 0 -.13333 0 5412.547)"
      />
      <path
        d="M2817.4 2047.3h-.01c-886.93 886.9-1191.81 2201.3-785.9 3388.09l2919.36 8535.71c62.24 182 319.6 182 381.84 0l2919.35-8535.71c405.92-1186.79 101.04-2501.19-785.9-3388.09-1283.72-1283.702-3365.03-1283.702-4648.74 0"
        style={{
          fill: '#2a481f',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13333 0 0 -.13333 0 5412.547)"
      />
      <path
        d="M10137 9.297h-338.07V2859.8H10137V9.297"
        style={{
          fill: '#25321a',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13333 0 0 -.13333 0 5412.547)"
      />
      <path
        d="M8732.65 1498c-471.37 471.4-633.4 1169.89-417.67 1800.6l1526.03 4461.9c41.38 121 212.49 121 253.89 0l1526-4461.9c215.7-630.71 53.7-1329.2-417.7-1800.6-682.2-682.203-1788.31-682.203-2470.55 0"
        style={{
          fill: '#4d7129',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="matrix(.13333 0 0 -.13333 0 5412.547)"
      />
    </svg>
  )
}

export default MountainsLandscape
