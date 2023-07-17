import React from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const DatePicker01: React.FC = (): JSX.Element => (
  <Space direction="vertical" size={12}>
    <RangePicker style={{ height: "52px", margin: "0px 15px", border: "1px solid #f2f2f2" }} />
    {/* <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" /> */}
  </Space>
);

export default DatePicker01;
