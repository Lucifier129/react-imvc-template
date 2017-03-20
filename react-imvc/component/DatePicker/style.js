export default `
.rd-container {
    position: relative;
    display: inline-block;
    padding: 3px 5px 0;
    font-size: 12px;
    font-family: tahoma, ​Arial, ​Helvetica, ​simsun, ​sans-serif;
    border: 1px solid #999;
    background: #fff;
    *display: inline;
    *zoom: 1;
    box-shadow: 0 3px 5px #ccc;
}

.rd-date {
    background: #bbb;
}

.rd-month {
    float: left;
    overflow: hidden;
    width: 182px;
    text-align: center;
}

.rd-month-label {
    height: 23px;
    line-height: 23px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    background-color: #004fb8;
}

.rd-next,
.rd-back {
    position: absolute;
    top: 3px;
    width: 23px;
    height: 23px;
    color: #fff;
    background: #2d7ce7 url(//pic.c-ctrip.com/cquery/un_calender_index.png) no-repeat;
    cursor: pointer;
    border:none;
}

.rd-back {
    left: 5px;
}

.rd-next {
    right: 5px;
    float: right;
    background-position: 100% 0;
}

.rd-back:hover {
    background-color: #62adf1;
    background-position: 0 -26px;
}

.rd-next:hover {
    background-color: #62adf1;
    background-position: 100% -26px;
}

.rd-days {
    overflow: hidden;
    padding-top: 4px;
    padding-bottom: 5px;
    border: 0;
}

.rd-days-row {
/*    display: inline;
    float: left;*/
    width: 26px;
    height: 22px;
    line-height: 20px;
    color: #666;
    border-bottom: 2px solid #fff;
    background: #ececec;
}

.rd-days-body {
    _width: 185px;
}

.rd-day-body, .rd-day-head {
    overflow: hidden;
    background: #fff;
    width: 26px;
    height: 24px;
    line-height: 22px;
    border: 1px solid #fff;
    border-width: 1px 0;
    font-size: 11px;
    font-weight: bold;
    color: #005ead;
    text-decoration: none;
    cursor: pointer;
}
.rd-day-head {
    width: 26px;
    height: 22px;
    line-height: 20px;
    color: #666;
    border:none;
    border-bottom: 2px solid #fff;
    background: #ececec;
}

.rd-day-body:hover,
.rd-day-selected
.rd-day-selected:hover {
    background: #e6f4ff url(//pic.c-ctrip.com/cquery/un_calender_index.png) no-repeat;
}

.rd-day-body:hover {
    background-color: #e6f4ff;
    background-position: -26px -53px;
    text-decoration: none;
}

.rd-day-selected {
    background-color: #fff5d1;
    background-position: 0 -82px;
}

.rd-day-prev-month,
.rd-day-next-month,
.rd-day-disabled {
    font-weight: normal;
    color: #dbdbdb;
    outline: none;
}

.rd-day-disabled {
  cursor: default;
}

.rd-day-prev-month:hover,
.rd-day-next-month:hover {
    background: #fff;
}

.rd-day-selected,
.rd-day-selected:hover {
    background-color: #629be0;
    background-position: 0 -53px;
    color: #fff;
}

[data-rome-offset] {
    width: 192px;
}

[data-rome-offset] .rd-days-body {
    margin-left: 4px;
    padding-left: 4px;
    border-left: 2px solid #bbb;
}

.rd-container:before,
.rd-container:after {
    content: '.';
    display: block;
    overflow: hidden;
    visibility: hidden;
    font-size: 0;
    line-height: 0;
    width: 0;
    height: 0;
}

.rd-container:after {
    clear: both;
}

.rd-container-attachment {
  display: none;
  position: absolute;
}
`
