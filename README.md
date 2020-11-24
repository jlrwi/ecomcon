# ecomcon: Enable Comments Conditionally 
Created by Douglas Crockford, modified by Jonathan Reimer 

Public Domain 

[Demo](demo.md) 
 
##Modifications: 
*Exported function is curried to accept either of these styles: 
    *ecomcon ([tag_list]) (source_string) 
    *ecomcon ({options}) (source_string) 
*Enabled comments_array function described in the original documentation 
*Handler functions can be passed in {options} to process tagged and untagged lines 
 
Ecomcon is a filter that acts on selected comments by making them executable or removing them. The filter can also be used to generate documentation files from comments, as well as many other operations. This makes it possible to put development, performance, documentation, and testing scaffolding into a source file. The scaffolding is removed by minification, but is activated by ecomcon. Although the original filter was implemented in both C and Javascript, this modified version of ecomcon is only implemented in Javascript. 
 
Ecomcon is a filter that takes a source file and looks for tagged comments in this form: 

    //tag stuff 

The line comment starts at the beginning of the line. There can be no space between the '//' and the tag. 
 
The filter is available as a curried ecomcon function that first takes an options parameter, and secondly a source string. 

The options parameter can be either: 
1. An array of tags. This is the original format. All tagged comments will be enabled. 
2. An object with the following properties: 
   * tag_list (optional): an object containing tags as property names and either the value true or a function to process each tagged line OR an array of tag names. (Functions override the on_tagged parameter.) Passing an array [tag_name] is the same as {tag_name: true}. 
   * comments_array (optional): an array containing lines to be inserted at the beginning of the output file 
   * on_tagged (optional): a function to process all tagged lines unless a a function was provided in tag_list. The default behavior is to return the tagged line without the tag. 
   * on_untagged (optional): a function to process all un-tagged lines. Default behavior is to output the line unchanged. 

