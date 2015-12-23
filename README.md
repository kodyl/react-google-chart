# react-google-chart
React component for Google Charts


# Installation
```
npm i react-google-chart --save
```

# Example

unique-id is set automatically by the module.

```
  const options = {
    title: 'heading',
    hAxis: {title: 'Beverages'},
    vAxis: {title: 'Amount'},
    legend: 'none'
  };

  const data = [
    ['Beverages', 'Amount'],
    [ 'Fanta', 45],
    [ 'Sprite', 12],
    [ 'Water', 1],
    [ 'Milk', 13]
  ];

 <Chart type='AnnotationChart' data={ data } width='100%' height='400px' options={ options } {...props} />


```
#### Further notice
The entire Google Chart API is available in this module. The events are not build into this version of the module, though. However the events and further upgrades will come in later versions. 
