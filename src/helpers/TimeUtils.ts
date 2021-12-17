export default class TimeUtils {
  static getClockHoursPointerAngleDeg = (
    hours: number,
    minutes: number
  ): number => hours * 30 + minutes * 0.5

  static getClockMinutesPointerAngleDeg = (minutes: number): number =>
    minutes * 6

  static getClockSecondsPointerAngleDeg = (seconds: number): number =>
    seconds * 6
}
