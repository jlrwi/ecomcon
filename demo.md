# ecomcon demo 0 [
  '# ecomcon demo',
  'Source code input:',
  '```javascript',
  "//taga const a = 'this line was tagged with taga';\r\n" +
    "//tagb const b = 'this line was tagged with tagb';\r\n" +
    "const u = 'this line was untagged';\r\n" +
    '\r\n' +
    '//block /*\r\n' +
    "const v = 'this line is untagged inside the block\r\n" +
    '//block */\r\n' +
    '\r\n' +
    '//para These lines of text could be extracted and joined to\r\n' +
    '//para create a text file.\r\n' +
    '//para Line breaks must be signalled explicitly\r\n' +
    "//para (\\n doesn't work here)./p/p\r\n" +
    '//para In this instance, /p is detected at the end of the line by the\r\n' +
    '//para on_tagged function to indicate the end of a paragraph./p',
  '```'
]
Source code input: 1 [
  '# ecomcon demo',
  'Source code input:',
  '```javascript',
  "//taga const a = 'this line was tagged with taga';\r\n" +
    "//tagb const b = 'this line was tagged with tagb';\r\n" +
    "const u = 'this line was untagged';\r\n" +
    '\r\n' +
    '//block /*\r\n' +
    "const v = 'this line is untagged inside the block\r\n" +
    '//block */\r\n' +
    '\r\n' +
    '//para These lines of text could be extracted and joined to\r\n' +
    '//para create a text file.\r\n' +
    '//para Line breaks must be signalled explicitly\r\n' +
    "//para (\\n doesn't work here)./p/p\r\n" +
    '//para In this instance, /p is detected at the end of the line by the\r\n' +
    '//para on_tagged function to indicate the end of a paragraph./p',
  '```'
]
```javascript 2 [
  '# ecomcon demo',
  'Source code input:',
  '```javascript',
  "//taga const a = 'this line was tagged with taga';\r\n" +
    "//tagb const b = 'this line was tagged with tagb';\r\n" +
    "const u = 'this line was untagged';\r\n" +
    '\r\n' +
    '//block /*\r\n' +
    "const v = 'this line is untagged inside the block\r\n" +
    '//block */\r\n' +
    '\r\n' +
    '//para These lines of text could be extracted and joined to\r\n' +
    '//para create a text file.\r\n' +
    '//para Line breaks must be signalled explicitly\r\n' +
    "//para (\\n doesn't work here)./p/p\r\n" +
    '//para In this instance, /p is detected at the end of the line by the\r\n' +
    '//para on_tagged function to indicate the end of a paragraph./p',
  '```'
]
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
//para on_tagged function to indicate the end of a paragraph./p 3 [
  '# ecomcon demo',
  'Source code input:',
  '```javascript',
  "//taga const a = 'this line was tagged with taga';\r\n" +
    "//tagb const b = 'this line was tagged with tagb';\r\n" +
    "const u = 'this line was untagged';\r\n" +
    '\r\n' +
    '//block /*\r\n' +
    "const v = 'this line is untagged inside the block\r\n" +
    '//block */\r\n' +
    '\r\n' +
    '//para These lines of text could be extracted and joined to\r\n' +
    '//para create a text file.\r\n' +
    '//para Line breaks must be signalled explicitly\r\n' +
    "//para (\\n doesn't work here)./p/p\r\n" +
    '//para In this instance, /p is detected at the end of the line by the\r\n' +
    '//para on_tagged function to indicate the end of a paragraph./p',
  '```'
]
``` 4 [
  '# ecomcon demo',
  'Source code input:',
  '```javascript',
  "//taga const a = 'this line was tagged with taga';\r\n" +
    "//tagb const b = 'this line was tagged with tagb';\r\n" +
    "const u = 'this line was untagged';\r\n" +
    '\r\n' +
    '//block /*\r\n' +
    "const v = 'this line is untagged inside the block\r\n" +
    '//block */\r\n' +
    '\r\n' +
    '//para These lines of text could be extracted and joined to\r\n' +
    '//para create a text file.\r\n' +
    '//para Line breaks must be signalled explicitly\r\n' +
    "//para (\\n doesn't work here)./p/p\r\n" +
    '//para In this instance, /p is detected at the end of the line by the\r\n' +
    '//para on_tagged function to indicate the end of a paragraph./p',
  '```'
]
## Activate tagged lines (original behavior) 0 [
  '## Activate tagged lines (original behavior)',
  'Options parameter:',
  '```',
  [ 'taga', 'tagb' ],
  '```',
  'Output:',
  '```',
  "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Options parameter: 1 [
  '## Activate tagged lines (original behavior)',
  'Options parameter:',
  '```',
  [ 'taga', 'tagb' ],
  '```',
  'Output:',
  '```',
  "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 2 [
  '## Activate tagged lines (original behavior)',
  'Options parameter:',
  '```',
  [ 'taga', 'tagb' ],
  '```',
  'Output:',
  '```',
  "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
[ 'taga', 'tagb' ] 3 [
  '## Activate tagged lines (original behavior)',
  'Options parameter:',
  '```',
  [ 'taga', 'tagb' ],
  '```',
  'Output:',
  '```',
  "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 4 [
  '## Activate tagged lines (original behavior)',
  'Options parameter:',
  '```',
  [ 'taga', 'tagb' ],
  '```',
  'Output:',
  '```',
  "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Output: 5 [
  '## Activate tagged lines (original behavior)',
  'Options parameter:',
  '```',
  [ 'taga', 'tagb' ],
  '```',
  'Output:',
  '```',
  "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 6 [
  '## Activate tagged lines (original behavior)',
  'Options parameter:',
  '```',
  [ 'taga', 'tagb' ],
  '```',
  'Output:',
  '```',
  "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
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
 7 [
  '## Activate tagged lines (original behavior)',
  'Options parameter:',
  '```',
  [ 'taga', 'tagb' ],
  '```',
  'Output:',
  '```',
  "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 8 [
  '## Activate tagged lines (original behavior)',
  'Options parameter:',
  '```',
  [ 'taga', 'tagb' ],
  '```',
  'Output:',
  '```',
  "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
## Erase tagged lines 0 [
  '## Erase tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
    tag_list: [ 'taga', 'tagb' ],
    on_tagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines taga and tagb should be gone\n' +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Options parameter: 1 [
  '## Erase tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
    tag_list: [ 'taga', 'tagb' ],
    on_tagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines taga and tagb should be gone\n' +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 2 [
  '## Erase tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
    tag_list: [ 'taga', 'tagb' ],
    on_tagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines taga and tagb should be gone\n' +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
{
  comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
  tag_list: [ 'taga', 'tagb' ],
  on_tagged: [Function: write_nothing]
} 3 [
  '## Erase tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
    tag_list: [ 'taga', 'tagb' ],
    on_tagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines taga and tagb should be gone\n' +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 4 [
  '## Erase tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
    tag_list: [ 'taga', 'tagb' ],
    on_tagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines taga and tagb should be gone\n' +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Output: 5 [
  '## Erase tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
    tag_list: [ 'taga', 'tagb' ],
    on_tagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines taga and tagb should be gone\n' +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 6 [
  '## Erase tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
    tag_list: [ 'taga', 'tagb' ],
    on_tagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines taga and tagb should be gone\n' +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
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
 7 [
  '## Erase tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
    tag_list: [ 'taga', 'tagb' ],
    on_tagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines taga and tagb should be gone\n' +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 8 [
  '## Erase tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines taga and tagb should be gone' ],
    tag_list: [ 'taga', 'tagb' ],
    on_tagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines taga and tagb should be gone\n' +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '//block /*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '//block */\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
## Extract tagged lines 0 [
  '## Extract tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines a and b should be the only lines' ],
    tag_list: [ 'taga', 'tagb' ],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines a and b should be the only lines\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n",
  '```'
]
Options parameter: 1 [
  '## Extract tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines a and b should be the only lines' ],
    tag_list: [ 'taga', 'tagb' ],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines a and b should be the only lines\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n",
  '```'
]
``` 2 [
  '## Extract tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines a and b should be the only lines' ],
    tag_list: [ 'taga', 'tagb' ],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines a and b should be the only lines\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n",
  '```'
]
{
  comments_array: [ 'Demo: Lines a and b should be the only lines' ],
  tag_list: [ 'taga', 'tagb' ],
  on_untagged: [Function: write_nothing]
} 3 [
  '## Extract tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines a and b should be the only lines' ],
    tag_list: [ 'taga', 'tagb' ],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines a and b should be the only lines\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n",
  '```'
]
``` 4 [
  '## Extract tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines a and b should be the only lines' ],
    tag_list: [ 'taga', 'tagb' ],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines a and b should be the only lines\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n",
  '```'
]
Output: 5 [
  '## Extract tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines a and b should be the only lines' ],
    tag_list: [ 'taga', 'tagb' ],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines a and b should be the only lines\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n",
  '```'
]
``` 6 [
  '## Extract tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines a and b should be the only lines' ],
    tag_list: [ 'taga', 'tagb' ],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines a and b should be the only lines\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n",
  '```'
]
// Demo: Lines a and b should be the only lines
const a = 'this line was tagged with taga';
const b = 'this line was tagged with tagb';
 7 [
  '## Extract tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines a and b should be the only lines' ],
    tag_list: [ 'taga', 'tagb' ],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines a and b should be the only lines\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n",
  '```'
]
``` 8 [
  '## Extract tagged lines',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: Lines a and b should be the only lines' ],
    tag_list: [ 'taga', 'tagb' ],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  '// Demo: Lines a and b should be the only lines\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const b = 'this line was tagged with tagb';\n",
  '```'
]
## Disable code block 0 [
  '## Disable code block',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
    tag_list: [ 'block' ]
  },
  '```',
  'Output:',
  '```',
  '// Demo: deactivate code within a tagged block comment\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '/*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '*/\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Options parameter: 1 [
  '## Disable code block',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
    tag_list: [ 'block' ]
  },
  '```',
  'Output:',
  '```',
  '// Demo: deactivate code within a tagged block comment\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '/*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '*/\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 2 [
  '## Disable code block',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
    tag_list: [ 'block' ]
  },
  '```',
  'Output:',
  '```',
  '// Demo: deactivate code within a tagged block comment\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '/*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '*/\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
{
  comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
  tag_list: [ 'block' ]
} 3 [
  '## Disable code block',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
    tag_list: [ 'block' ]
  },
  '```',
  'Output:',
  '```',
  '// Demo: deactivate code within a tagged block comment\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '/*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '*/\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 4 [
  '## Disable code block',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
    tag_list: [ 'block' ]
  },
  '```',
  'Output:',
  '```',
  '// Demo: deactivate code within a tagged block comment\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '/*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '*/\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Output: 5 [
  '## Disable code block',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
    tag_list: [ 'block' ]
  },
  '```',
  'Output:',
  '```',
  '// Demo: deactivate code within a tagged block comment\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '/*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '*/\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 6 [
  '## Disable code block',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
    tag_list: [ 'block' ]
  },
  '```',
  'Output:',
  '```',
  '// Demo: deactivate code within a tagged block comment\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '/*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '*/\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
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
 7 [
  '## Disable code block',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
    tag_list: [ 'block' ]
  },
  '```',
  'Output:',
  '```',
  '// Demo: deactivate code within a tagged block comment\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '/*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '*/\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 8 [
  '## Disable code block',
  'Options parameter:',
  '```',
  {
    comments_array: [ 'Demo: deactivate code within a tagged block comment' ],
    tag_list: [ 'block' ]
  },
  '```',
  'Output:',
  '```',
  '// Demo: deactivate code within a tagged block comment\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '/*\n' +
    "const v = 'this line is untagged inside the block\n" +
    '*/\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
## Extract tagged lines as text 0 [
  '## Extract tagged lines as text',
  'Options parameter:',
  '```',
  {
    tag_list: [ 'para' ],
    on_tagged: [Function: write_text],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  "These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\\n doesn't work here). \n" +
    '\n' +
    'In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. \n',
  '```'
]
Options parameter: 1 [
  '## Extract tagged lines as text',
  'Options parameter:',
  '```',
  {
    tag_list: [ 'para' ],
    on_tagged: [Function: write_text],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  "These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\\n doesn't work here). \n" +
    '\n' +
    'In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. \n',
  '```'
]
``` 2 [
  '## Extract tagged lines as text',
  'Options parameter:',
  '```',
  {
    tag_list: [ 'para' ],
    on_tagged: [Function: write_text],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  "These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\\n doesn't work here). \n" +
    '\n' +
    'In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. \n',
  '```'
]
{
  tag_list: [ 'para' ],
  on_tagged: [Function: write_text],
  on_untagged: [Function: write_nothing]
} 3 [
  '## Extract tagged lines as text',
  'Options parameter:',
  '```',
  {
    tag_list: [ 'para' ],
    on_tagged: [Function: write_text],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  "These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\\n doesn't work here). \n" +
    '\n' +
    'In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. \n',
  '```'
]
``` 4 [
  '## Extract tagged lines as text',
  'Options parameter:',
  '```',
  {
    tag_list: [ 'para' ],
    on_tagged: [Function: write_text],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  "These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\\n doesn't work here). \n" +
    '\n' +
    'In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. \n',
  '```'
]
Output: 5 [
  '## Extract tagged lines as text',
  'Options parameter:',
  '```',
  {
    tag_list: [ 'para' ],
    on_tagged: [Function: write_text],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  "These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\\n doesn't work here). \n" +
    '\n' +
    'In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. \n',
  '```'
]
``` 6 [
  '## Extract tagged lines as text',
  'Options parameter:',
  '```',
  {
    tag_list: [ 'para' ],
    on_tagged: [Function: write_text],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  "These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\\n doesn't work here). \n" +
    '\n' +
    'In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. \n',
  '```'
]
These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\n doesn't work here). 

In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. 
 7 [
  '## Extract tagged lines as text',
  'Options parameter:',
  '```',
  {
    tag_list: [ 'para' ],
    on_tagged: [Function: write_text],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  "These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\\n doesn't work here). \n" +
    '\n' +
    'In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. \n',
  '```'
]
``` 8 [
  '## Extract tagged lines as text',
  'Options parameter:',
  '```',
  {
    tag_list: [ 'para' ],
    on_tagged: [Function: write_text],
    on_untagged: [Function: write_nothing]
  },
  '```',
  'Output:',
  '```',
  "These lines of text could be extracted and joined to create a text file. Line breaks must be signalled explicitly (\\n doesn't work here). \n" +
    '\n' +
    'In this instance, /p is detected at the end of the line by the on_tagged function to indicate the end of a paragraph. \n',
  '```'
]
## Block erase 0 [
  '## Block erase',
  'Options parameter:',
  '```',
  {
    comments_array: [
      'Demo: The block tags and the const v=... line should be gone',
      'Function source in demo.js'
    ],
    tag_list: [ 'block' ],
    on_tagged: [Function: erase_tagged],
    on_untagged: [Function: erase_untagged]
  },
  '```',
  'Output:',
  '```',
  '// Demo: The block tags and the const v=... line should be gone\n' +
    '// Function source in demo.js\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Options parameter: 1 [
  '## Block erase',
  'Options parameter:',
  '```',
  {
    comments_array: [
      'Demo: The block tags and the const v=... line should be gone',
      'Function source in demo.js'
    ],
    tag_list: [ 'block' ],
    on_tagged: [Function: erase_tagged],
    on_untagged: [Function: erase_untagged]
  },
  '```',
  'Output:',
  '```',
  '// Demo: The block tags and the const v=... line should be gone\n' +
    '// Function source in demo.js\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 2 [
  '## Block erase',
  'Options parameter:',
  '```',
  {
    comments_array: [
      'Demo: The block tags and the const v=... line should be gone',
      'Function source in demo.js'
    ],
    tag_list: [ 'block' ],
    on_tagged: [Function: erase_tagged],
    on_untagged: [Function: erase_untagged]
  },
  '```',
  'Output:',
  '```',
  '// Demo: The block tags and the const v=... line should be gone\n' +
    '// Function source in demo.js\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
{
  comments_array: [
    'Demo: The block tags and the const v=... line should be gone',
    'Function source in demo.js'
  ],
  tag_list: [ 'block' ],
  on_tagged: [Function: erase_tagged],
  on_untagged: [Function: erase_untagged]
} 3 [
  '## Block erase',
  'Options parameter:',
  '```',
  {
    comments_array: [
      'Demo: The block tags and the const v=... line should be gone',
      'Function source in demo.js'
    ],
    tag_list: [ 'block' ],
    on_tagged: [Function: erase_tagged],
    on_untagged: [Function: erase_untagged]
  },
  '```',
  'Output:',
  '```',
  '// Demo: The block tags and the const v=... line should be gone\n' +
    '// Function source in demo.js\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 4 [
  '## Block erase',
  'Options parameter:',
  '```',
  {
    comments_array: [
      'Demo: The block tags and the const v=... line should be gone',
      'Function source in demo.js'
    ],
    tag_list: [ 'block' ],
    on_tagged: [Function: erase_tagged],
    on_untagged: [Function: erase_untagged]
  },
  '```',
  'Output:',
  '```',
  '// Demo: The block tags and the const v=... line should be gone\n' +
    '// Function source in demo.js\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Output: 5 [
  '## Block erase',
  'Options parameter:',
  '```',
  {
    comments_array: [
      'Demo: The block tags and the const v=... line should be gone',
      'Function source in demo.js'
    ],
    tag_list: [ 'block' ],
    on_tagged: [Function: erase_tagged],
    on_untagged: [Function: erase_untagged]
  },
  '```',
  'Output:',
  '```',
  '// Demo: The block tags and the const v=... line should be gone\n' +
    '// Function source in demo.js\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 6 [
  '## Block erase',
  'Options parameter:',
  '```',
  {
    comments_array: [
      'Demo: The block tags and the const v=... line should be gone',
      'Function source in demo.js'
    ],
    tag_list: [ 'block' ],
    on_tagged: [Function: erase_tagged],
    on_untagged: [Function: erase_untagged]
  },
  '```',
  'Output:',
  '```',
  '// Demo: The block tags and the const v=... line should be gone\n' +
    '// Function source in demo.js\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
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
 7 [
  '## Block erase',
  'Options parameter:',
  '```',
  {
    comments_array: [
      'Demo: The block tags and the const v=... line should be gone',
      'Function source in demo.js'
    ],
    tag_list: [ 'block' ],
    on_tagged: [Function: erase_tagged],
    on_untagged: [Function: erase_untagged]
  },
  '```',
  'Output:',
  '```',
  '// Demo: The block tags and the const v=... line should be gone\n' +
    '// Function source in demo.js\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 8 [
  '## Block erase',
  'Options parameter:',
  '```',
  {
    comments_array: [
      'Demo: The block tags and the const v=... line should be gone',
      'Function source in demo.js'
    ],
    tag_list: [ 'block' ],
    on_tagged: [Function: erase_tagged],
    on_untagged: [Function: erase_untagged]
  },
  '```',
  'Output:',
  '```',
  '// Demo: The block tags and the const v=... line should be gone\n' +
    '// Function source in demo.js\n' +
    "//taga const a = 'this line was tagged with taga';\n" +
    "//tagb const b = 'this line was tagged with tagb';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
## Tags use individual functions 0 [
  '## Tags use individual functions',
  'Options parameter:',
  '```',
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
  },
  '```',
  'Output:',
  '```',
  '// Demo:\n' +
    '// const a=... should be activated\n' +
    '// const b=... should be erased\n' +
    '// The block tags and the const v=... line should be gone\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Options parameter: 1 [
  '## Tags use individual functions',
  'Options parameter:',
  '```',
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
  },
  '```',
  'Output:',
  '```',
  '// Demo:\n' +
    '// const a=... should be activated\n' +
    '// const b=... should be erased\n' +
    '// The block tags and the const v=... line should be gone\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 2 [
  '## Tags use individual functions',
  'Options parameter:',
  '```',
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
  },
  '```',
  'Output:',
  '```',
  '// Demo:\n' +
    '// const a=... should be activated\n' +
    '// const b=... should be erased\n' +
    '// The block tags and the const v=... line should be gone\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
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
} 3 [
  '## Tags use individual functions',
  'Options parameter:',
  '```',
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
  },
  '```',
  'Output:',
  '```',
  '// Demo:\n' +
    '// const a=... should be activated\n' +
    '// const b=... should be erased\n' +
    '// The block tags and the const v=... line should be gone\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 4 [
  '## Tags use individual functions',
  'Options parameter:',
  '```',
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
  },
  '```',
  'Output:',
  '```',
  '// Demo:\n' +
    '// const a=... should be activated\n' +
    '// const b=... should be erased\n' +
    '// The block tags and the const v=... line should be gone\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
Output: 5 [
  '## Tags use individual functions',
  'Options parameter:',
  '```',
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
  },
  '```',
  'Output:',
  '```',
  '// Demo:\n' +
    '// const a=... should be activated\n' +
    '// const b=... should be erased\n' +
    '// The block tags and the const v=... line should be gone\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 6 [
  '## Tags use individual functions',
  'Options parameter:',
  '```',
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
  },
  '```',
  'Output:',
  '```',
  '// Demo:\n' +
    '// const a=... should be activated\n' +
    '// const b=... should be erased\n' +
    '// The block tags and the const v=... line should be gone\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
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
 7 [
  '## Tags use individual functions',
  'Options parameter:',
  '```',
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
  },
  '```',
  'Output:',
  '```',
  '// Demo:\n' +
    '// const a=... should be activated\n' +
    '// const b=... should be erased\n' +
    '// The block tags and the const v=... line should be gone\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
``` 8 [
  '## Tags use individual functions',
  'Options parameter:',
  '```',
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
  },
  '```',
  'Output:',
  '```',
  '// Demo:\n' +
    '// const a=... should be activated\n' +
    '// const b=... should be erased\n' +
    '// The block tags and the const v=... line should be gone\n' +
    "const a = 'this line was tagged with taga';\n" +
    "const u = 'this line was untagged';\n" +
    '\n' +
    '\n' +
    '//para These lines of text could be extracted and joined to\n' +
    '//para create a text file.\n' +
    '//para Line breaks must be signalled explicitly\n' +
    "//para (\\n doesn't work here)./p/p\n" +
    '//para In this instance, /p is detected at the end of the line by the\n' +
    '//para on_tagged function to indicate the end of a paragraph./p\n',
  '```'
]
