"use client"

import * as React from "react"
import ReactDatePicker, { DatePickerProps } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { cn } from "@/lib/utils"

export type CalendarProps = DatePickerProps

function Calendar({
  className,
  ...props
}: CalendarProps) {
  return (
    <div className={cn("p-3", className)}>
      <ReactDatePicker
        calendarClassName="w-full"
        {...props}
      />
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
