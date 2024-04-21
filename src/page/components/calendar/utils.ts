import { Lunar } from 'lunar-javascript'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

import { FREE_DATE, WORK_DATE } from './consts'

export const getFreeDate = (date: string) => {
  if (FREE_DATE.includes(date)) {
    return '休'
  } else if (WORK_DATE.includes(date)) {
    return '班'
  }
  return ''
}

export const getDaysInMonth = (year: number, month: number) => {
  const firstDay = moment([year, month - 1]) // 当月第一天
  const lastDay = moment([year, month]).subtract(1, 'days') // 当月最后一天

  const firstWeek = firstDay.day() // 当月第一天是周几
  const calendarFirstDay = firstDay.subtract(firstWeek, 'days') // 日历第一天

  const lasttWeek = lastDay.day() // 当月最后一天是周几
  const calendarLastDay = lastDay.add(6 - lasttWeek, 'days') // 日历最后一天

  const diffDays = calendarLastDay.diff(calendarFirstDay, 'days')

  const list = [...Array(diffDays + 1).keys()]
  const calendarList: any[] = []
  list.forEach((item) => {
    const currentDate = calendarFirstDay.clone().add(item, 'days')
    const dayItem = {
      key: uuidv4(),
      format: currentDate.date() + '号',
      lunar: Lunar.fromDate(currentDate.toDate()).getDayInChinese(),
      festival: getFreeDate(currentDate.format('YYYY-MM-DD')),
      solar: Lunar.fromDate(currentDate.toDate()).getJieQi()
    }

    calendarList.push(dayItem)
  })

  return calendarList
}
