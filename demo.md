# ecomcon demo
Source code input:
```javascript
//taga const a = 'this line was tagged with taga';
//tagb const b = 'this line was tagged with tagb';
const u = 'this line was untagged';

//block /*
const v = 'this line is untagged inside the block
//block */

//para These lines of text could be extracted and joined to
//para create a text file.
//para Line breaks must be signalled explicitly
//para (\n doesn't work here)./p/p
//para In this instance, /p is detected at the end of the line by the
//para on_tagged function to indicate the end of a paragraph./p
```
## Activate tagged lines (original behavior)
Options parameter:
```
[ 'taga', 'tagb' ]
```
Output:
```
const a = 'this line was tagged with taga';
const b = 'this line was tagged with tagb';
const u = 'this line was untagged';

//block /*
const v = 'this line is untagged inside the block
//block */

//para These lines of text could be extracted and joined to
//para create a text file.
//para Line breaks must be signalled explicitly
//para (\n doesn't work here)./p/p
//para In this instance, /p is detected at the end of the line by the
//para on_tagged function to indicate the end of a paragraph./p

```
## Erase tagged lines
Options parameter:
```
{
  comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
  tag_list: [ 'taga', 'tagb' ],
  on_tagged: [Function: write_nothing]
}
```
Output:
```
// Demo: Lines taga and tagb should be gone
const u = 'this line was untagged';

//block /*
const v = 'this line is untagged inside the block
//block */

//para These lines of text could be extracted and joined to
//para create a text file.
//para Line breaks must be signalled explicitly
//para (\n doesn't work here)./p/p
//para In this instance, /p is detected at the end of the line by the
//para on_tagged function to indicate the end of a paragraph./p

```
## Extract tagged lines
Options parameter:
```
{
  comments_array: [ 'Demo: Lines a and b should be the only lines' ],
  tag_list: [ 'taga', 'tagb' ],
  on_untagged: [Function: write_nothing]
}
```
Output:
```
// Demo: Lines a and b should be the only lines
const a = 'this line was tagged with taga';
const b = 'this line was tagged with tagb';

```
## Disable code block
Options parameter:
```
{
  comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
  tag_list: [ 'block' ]
}
```
Output:
```
// Demo: deactivate code within a tagged block comment
//taga const a = 'this line was tagged with taga';
//tagb const b = 'this line was tagged with tagb';
const u = 'this line was untagged';

/*
const v = 'this line is untagged inside the block
*/

//para These lines of text could be extracted and joined to
//para create a text file.
//para Line breaks must be signalled explicitly
//para (\n doesn't work here)./p/p
//para In this instance, /p is detected at the end of the line by the
//para on_tagged function to indicate the end of a paragraph./p

```
## Extract tagged lines as text
Options parameter:
```
{
  tag_list: [ 'para' ],
  on_tagged: [Function: write_text],
  on_untagged: [Function: write_nothing]
}
```
Output:
```
These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\n doesn't work here). 

In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. 

```
## Block erase
Options parameter:
```
{
  comments_array: [
    'Demo: The block tags and the const v=... line should be gone',
    'Function source in demo.js'
  ],
  tag_list: [ 'block' ],
  on_tagged: [Function: erase_tagged],
  on_untagged: [Function: erase_untagged]
}
```
Output:
```
// Demo: The block tags and the const v=... line should be gone
// Function source in demo.js
//taga const a = 'this line was tagged with taga';
//tagb const b = 'this line was tagged with tagb';
const u = 'this line was untagged';

//para These lines of text could be extracted and joined to
//para create a text file.
//para Line breaks must be signalled explicitly
//para (\n doesn't work here)./p/p
//para In this instance, /p is detected at the end of the line by the
//para on_tagged function to indicate the end of a paragraph./p

```
## Tags use individual functions
Options parameter:
```
{
  comments_array: [
    'Demo:',
    'const a=... should be activated',
    'const b=... should be erased',
    'The block tags and the const v=... line should be gone'
  ],
  tag_list: {
    taga: [Function: write_line],
    tagb: [Function: write_nothing],
    block: [Function: erase_tagged]
  },
  on_untagged: [Function: erase_untagged]
}
```
Output:
```
// Demo:
// const a=... should be activated
// const b=... should be erased
// The block tags and the const v=... line should be gone
const a = 'this line was tagged with taga';
const u = 'this line was untagged';

//para These lines of text could be extracted and joined to
//para create a text file.
//para Line breaks must be signalled explicitly
//para (\n doesn't work here)./p/p
//para In this instance, /p is detected at the end of the line by the
//para on_tagged function to indicate the end of a paragraph./p

```
