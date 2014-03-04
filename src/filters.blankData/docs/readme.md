### Description
Formats a value to display a placeholder when a value is `null` or `undefined`




### Usage

#### In HTML Template Binding
```
{{ expression | blankData[:placeholder] }}
```



#### In JavaScript
```
$filter('blankData')(expression[, placeholder]);
```



##### Parameters
**expression** - `value` - input to filter

_placeholder (optional)_ - `string` - placeholder value to be displayed.


##### Returns
`string`  Formatted string.