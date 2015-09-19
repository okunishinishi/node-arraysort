var arraysort = require('arraysort');

// Define a sort function.
var stringAsc = arraysort.stringCompare(),
    stringDesc = arraysort.stringCompare({desc: true});

// Execute sorting.
var values = ['foo', 'bar', 'baz'];
values = values.sort(stringAsc); // -> ['foo', 'baz', 'bar']
values = values.sort(stringDesc); // -> ['bar', 'baz', 'foo']
