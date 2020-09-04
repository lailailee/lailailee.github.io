(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{347:function(t,s,a){"use strict";a.r(s);var v=a(0),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("给定一个字符串 s，计算具有相同数量 0 和 1 的非空(连续)子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是组合在一起的。")]),t._v(" "),a("p",[t._v("重复出现的子串要计算它们出现的次数。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型：字符串类")])]),t._v(" "),a("li",[a("p",[t._v("难度: 简单")])])]),t._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("给定一个字符串 s，计算具有相同数量 0 和 1 的非空(连续)子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是组合在一起的。")]),t._v(" "),a("p",[t._v("重复出现的子串要计算它们出现的次数。")]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[a("strong",[t._v("示例一:")])]),t._v(" "),a("p",[t._v('输入: "00110011"')]),t._v(" "),a("p",[t._v("输出: 6")]),t._v(" "),a("p",[t._v("解释: 有 6 个子串具有相同数量的连续 1 和 0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。")]),t._v(" "),a("p",[t._v("请注意，一些重复出现的子串要计算它们出现的次数。")]),t._v(" "),a("p",[t._v("另外，“00110011”不是有效的子串，因为所有的 0（和 1）没有组合在一起。")]),t._v(" "),a("p",[a("strong",[t._v("示例二:")])]),t._v(" "),a("p",[t._v('输入: "10101"')]),t._v(" "),a("p",[t._v("输出: 4")]),t._v(" "),a("p",[t._v("解释: 有 4 个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续 1 和 0。")]),t._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("ul",[a("li",[t._v("观察得：每进一位最多只会有一个子串")]),t._v(" "),a("li",[t._v("current 当前字符个数，默认为 1，preview 前一个字符个数，默认为 0")]),t._v(" "),a("li",[t._v("如果当前字符与下一个字符相等，则 current+1")]),t._v(" "),a("li",[t._v("如果当前字符与下一个字符不等，则把当前字符个数赋给前一个字符的个数，再将当前字符个数清为 1")]),t._v(" "),a("li",[t._v("判断是否含有子串则是比较前一个字符个数大于等于当前字符个数,符合条件则肯定有一个子串，结合观察给与进位继续循环 (preview >= current) n++")])]),t._v(" "),a("h2",{attrs:{id:"表格示意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表格示意"}},[t._v("#")]),t._v(" 表格示意")]),t._v(" "),a("p",[t._v('输入: "00110011"')]),t._v(" "),a("p",[t._v("输出: 6")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("\\")]),t._v(" "),a("th",[t._v("0")]),t._v(" "),a("th",[t._v("0")]),t._v(" "),a("th",[t._v("1")]),t._v(" "),a("th",[t._v("1")]),t._v(" "),a("th",[t._v("0")]),t._v(" "),a("th",[t._v("0")]),t._v(" "),a("th",[t._v("1")]),t._v(" "),a("th",[t._v("1")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("pre")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("cur")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("n")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("6")])])])]),t._v(" "),a("p",[t._v('输入: "10101"')]),t._v(" "),a("p",[t._v("输出: 4")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("\\")]),t._v(" "),a("th",[t._v("1")]),t._v(" "),a("th",[t._v("0")]),t._v(" "),a("th",[t._v("1")]),t._v(" "),a("th",[t._v("0")]),t._v(" "),a("th",[t._v("1")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("pre")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("cur")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("n")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("4")])])])]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {string} s\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("countBinarySubstrings")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//current当前字符个数，默认为1，preview前一个字符个数，默认为0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    preview "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      current"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      preview "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current\n      current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preview "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h2",{attrs:{id:"结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[t._v("#")]),t._v(" 结果")]),t._v(" "),a("p",[t._v("Accepted")]),t._v(" "),a("p",[t._v("90/90 cases passed (76 ms)")]),t._v(" "),a("p",[t._v("Your runtime beats 99.68 % of javascript submissions")]),t._v(" "),a("p",[t._v("Your memory usage beats 55.2 % of javascript submissions (38.3 MB)")]),t._v(" "),a("h2",{attrs:{id:"复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[t._v("#")]),t._v(" 复杂度分析")]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：O(n)，")])]),t._v(" "),a("p",[t._v("只需要遍历一遍 s 字符串，所以时间复杂度是 O(n)")]),t._v(" "),a("ul",[a("li",[t._v("空间复杂度：O(1)。")])])])}),[],!1,null,null,null);s.default=_.exports}}]);