new Morris.Line({
    element:'myfirstchart',
    data:[
        {year:'2008',value:20},
        {year:'2009',value:10},
        {year:'2010',value:5},
        {year:'2011',value:5},
        {year:'2012',value:20}
    ],
    xkey:'year',
    ykeys:['value'],
    labels:['Value']
});
Morris.Bar({
    element: 'barchart',
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
  });