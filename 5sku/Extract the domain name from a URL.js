/*
title:Extract the domain name from a URL


Description: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:



Examples: For example (Input --> Output):

 url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
 url = "https://www.cnet.com"                -> domain name = cnet"

Parameters:a tsring containing a link of a website 

Return: aa string containing the domain name 


Pseudo Code: create a conditional to evaluate if digits > 1
if true, split digits into 2 
multiply the digits you get between each other 



*/ 

//solution 
function domainName(url){
    let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
      let domain = sourceString.split(".")[0];
      return domain;
  }
/*
alternative 

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
*/

