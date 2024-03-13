export const buttons=[[
    {
      class: 'special',
      label: 'C',
      funtion: 'clearDisplay',
      columns:1
    },{
      class: 'special',
      label: '<',
      funtion: 'deleteLastCharacter',
      columns:1
    },{
      class: 'operator',
      label: '%',
      funtion: 'setOperator',
      columns:1
    },{
      class: 'operator',
      label: '/',
      funtion: 'setOperator',
      columns:1
    }
  ],[
    {
      class: 'number',
      label: '7',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'number',
      label: '8',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'number',
      label: '9',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'operator',
      label: 'X',
      funtion: 'setOperator',
      columns:1
    }
  ],[
    {
      class: 'number',
      label: '4',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'number',
      label: '5',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'number',
      label: '6',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'operator',
      label: '-',
      funtion: 'setOperator',
      columns:1
    }
  ],[
    {
      class: 'number',
      label: '1',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'number',
      label: '2',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'number',
      label: '3',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'operator',
      label: '+',
      funtion: 'setOperator',
      columns:1
    }
  ],[
    {
      class: 'number',
      label: '0',
      funtion: 'updateDisplay',
      columns:2
    },{
      class: 'number',
      label: '.',
      funtion: 'updateDisplay',
      columns:1
    },{
      class: 'special',
      label: '=',
      funtion: 'calculate',
      columns:1
    }
  ]]