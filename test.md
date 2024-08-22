# Markdown - Cheatsheet

| Element &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Syntax                     |
|------------|----------------------------|
| Heading    | `# H1` <br> `## H2` <br> `## H3` |
| Bold       | `**bold**` |
| Italic     | `*Italic*`  |
| Blockquote | `> blockquote` |
| Ordered List | 1. First Item <br> 2. Second Item |
| Unrdered List | - First Item <br> - Second Item |
| Code|\`code` |
| Horizontal Rule | `---` |
| Link | `[title](https://www.example.com)` |
| Image | `![alt text](path/image.jpg)` |

<br>
<br>
<br>

# Markdown Langauge - Basic

## 1. Heading
To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three, use three number signs (e.g., ### My Header).

Alternatively, on the line below the text, add any number of == characters for heading level 1 or -- characters for heading level 2.

HTML equivalent : `<h3>`.

<br>

## 2. Paragraphs
To create paragraphs, use a blank line to separate one or more lines of text.

HTML equivalent : `<p>`

<br>

## 3. Line Breaks
To create a line break or new line, end a line with two or more spaces, and then type return.

HTML equivalent : `<br>`

<br>

## 4. Emphasis
You can add emphasis by making text bold or italic.

- ### *Italic*  
    To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

    HTML equivalent : `<i>`,`<em>`

- ### **Bold**  
    To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

    HTML equivalent : `<b>`,`<strong>`



- ### ***Bold and Italic***  
    To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

> ### Escaping Characters
>
>To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (\\) in front of the character.

<br>

## 5. Blockquotes
To create a blockquote, add a > in front of a paragraph.
>
> Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.
>
>>Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.
>
>Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

> [!NOTE]
> You can create a NOTE block by appending `[!NOTE]` as Header of the block.

> [!TIP]
> You can create a TIP block by appending `[!TIP]` as Header of the block.

> [!IMPORTANT]
> You can create a IMPORTANT block by appending `[!IMPORTANT]` as Header of the block.

> [!WARNING]
> You can create a WARNING block by appending `[!WARNING]` as Header of the block.


> [!CAUTION]
> You can create a CAUTION block by appending `[!CAUTION]` as Header of the block.

<br>

## 6. List
You can organize items into ordered and unordered lists.

1. ### Ordered List
    To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

    HTML equivalent : `<ol>`,`<li>`

2. ### Unorder List
    To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

    HTML equivalent : `<ul>`,`<li>`

If you need to start an unordered list item with a number followed by a period, you can use a backslash (\) to escape the period. You can nest an unordered list in an ordered list, or vice versa.

Example :  
- Preface
1. First Chapter
2. Second Chapter
3. Third Chapter
    1. First Section
    2. Second Section
- Apendix
    - Topic A  
        About Chapter
    - Topic B
    - Topic C
        - Topic C.1
        - Topic C.2
- Index

<br>

## 7. Images
To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

`![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")`

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

HTML equivalent : `<img>`

<br>

## 8. Code
To denote a word or phrase as code, enclose it in backticks (`).

If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (``).

HTML equivalent : `<code>`

<br>

## 9. Code Blocks
To create code blocks, indent every line of the block by at least four spaces or one tab. Or use triple qutoes.

    #include<stdio.h>

    int main()
    {
        printf("Hello World!");
        return 0;
    }

Or

```c
#include<stdio.h>

int main()
{
    printf("Hello World!");
    return 0;
}
```
write supported language names for syntax highlighting.
<br>

## 10. Horizontal Rules
To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

<br>

## 11. Links
To create a link, enclose the link text in brackets \[Link\] and then follow it immediately with the URL in parentheses. This guide is from [Mark Down Guide](https://www.markdownguide.org/basic-syntax/) website.


HTML equivalent : `<a>`

You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in quotation marks after the URL. [Mark Down Guide](https://www.markdownguide.org/basic-syntax/ "Link to the markdownguide.org website")

To quickly turn a URL or email address into a link, enclose it in angle brackets <>.
<https://www.markdownguide.org>  
<fake@example.com>

<br>
<br>
<br>

# Markdown Language - Extended

## 12. Table
To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. For compatibility, you should also add a pipe on either end of the row.

| Name        | Age  | Gender |
| :---------- | :--: |  ---:  |
| Ramesh      | 24   | Male   |
| Prem        | 32   | Male   |
| Payal       | 25   | Female |

Cell widths can vary. The rendered output will look the same.  Tip: Creating tables with hyphens and pipes can be tedious. To speed up the process, try using the Markdown Tables Generator or AnyWayData Markdown Export. Build a table using the graphical interface, and then copy the generated Markdown-formatted text into your file.

You can’t use headings, blockquotes, lists, horizontal rules, images, or most HTML tags.

>  **Tip:** Creating tables with hyphens and pipes can be tedious. To speed up the process, try using the Markdown Tables Generator or AnyWayData Markdown Export. Build a table using the graphical interface, and then copy the generated Markdown-formatted text into your file.
>
> **Tip:** You can use HTML to create line breaks and add lists within table cells. You can display a pipe (|) character in a table by using its HTML character code (\&#124;).

HTML equivalent : `<table>`,`<th>`,`<tr>`,`<td>`

<br>

## 13. Fenced Code Blocks
The basic Markdown syntax allows you to create code blocks by indenting lines by four spaces or one tab. If you find that inconvenient, try using fenced code blocks. Depending on your Markdown processor or editor, you’ll use three backticks (```) or three tildes (~~~) on the lines before and after the code block. The best part? You don’t have to indent any lines!

Many Markdown processors support syntax highlighting for fenced code blocks. This feature allows you to add color highlighting for whatever language your code was written in. To add syntax highlighting, specify a language next to the backticks before the fenced code block.

```C
#include<stdio.h>

int main()
{
    printf("Hello World!");
    return 0;
}
```

<br>

## 14. Text Formating
- ### <u>Underline</u>
    Use the html equivalent.
    
    HTML equivalent : `<u>` 
- ### <del>Strikethrough</del>
    You can strikethrough words by putting a horizontal line through the center of them. The result ~~looks like this~~. This feature allows you to indicate that certain words are a mistake not meant for inclusion in the document. To strikethrough words, use two tilde symbols (~~) before and after the words.

    HTML equivalent : `<del>`

- ### Sub<sub>script</sub> and Super<sup>script</sup>
    This isn’t common, but some Markdown processors allow you to use subscript to position one or more characters slightly below the normal line of type. To create a subscript, use one tilde symbol (~) before and after the characters. Example : H<sub>2</sub>O.

    HTML equivalent : `<sub>`

    This isn’t common, but some Markdown processors allow you to use superscript to position one or more characters slightly above the normal line of type. To create a superscript, use one caret symbol (^) before and after the characters. Example : ax<sup>2</sup>+bx+c=0

    HTML equivalent : `<sup>`

## 15. Equations
Write equations in LaTEX language inside `$ $` tag for inline and inside `$$ $$` for separate line. For example some $a^2+b^2=c^2$. Or $$ax^2+bx+c=0\implies\boxed{x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}}$$

Align equations using `\begin{align}` environment as in LaTEX
$$
\begin{align*}
    (a+b)^2 &=(a+b)(a+b) \\
            &=a^2+2ab+b^2
\end{align*}
$$

Form matrix (inside parenthesis) using `\begin{pmatrix}` environment

$$
R=
\begin{pmatrix}
    \cos\theta &-\sin\theta\\
    \sin\theta &\cos\theta
\end{pmatrix}
$$

## Task List

Create task list as

- [ ] Task 1
- [x] Task 2
- [ ] Task 3
