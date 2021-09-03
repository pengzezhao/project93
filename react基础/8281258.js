let reg = /^[abc]+$/
let reg1 = /\s+/g
let str = '  who   are   you  '
str1 = str.replace(reg1, '*')
console.log(str1)
// console.log(reg.test('abcabcabc'))
// console.log(reg.e)


// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
//     <script>
//     function loadXMLDoc()
//     {
//         var xmlhttp;
//         if (window.XMLHttpRequest)
//         {
//             //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//             xmlhttp=new XMLHttpRequest();
//         }
//         else
//         {
//             // IE6, IE5 浏览器执行代码
//             xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
//         xmlhttp.send();
//         xmlhttp.onreadystatechange=function()
//         {
//             if (xmlhttp.readyState==4 && xmlhttp.status==200)
//             {
//                 document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
//             }
//         }
//
//     }
// </script>
// </head>
// <body>
//
// <div id="myDiv"><h2>使用 AJAX 修改该文本内容</h2></div>
// <button type="button" onclick="loadXMLDoc()">修改内容</button>
//
// </body>
// </html>