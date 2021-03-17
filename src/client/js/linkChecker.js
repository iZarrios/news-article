function linkChecker(inputText) {
  console.log("::: Running checkURL :::", inputText);
  let urlPattern = new RegExp(
    /^((?:https?:\/\/)?[^.\/]+(?:\.[^.\/]+)+(?:\/.*)?)$/
  );
  console.log(urlPattern.test(inputText));
  return urlPattern.test(inputText);
}
export { linkChecker };
