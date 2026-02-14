/*In this exercise, we will be given a url encoded string of key-value pairs, and we will have to turn it into a JavaScript object.

URL Encoded Strings
To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
So the following URL encoded string:

city=Vancouver&weather=lots%20of%20rain
Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
}

Instruction
Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.

*/

const urlDecode = function (text) {
  const result = {};
  
  // 1. & で分割して各ペアの配列にする
  // 例: ["city=Vancouver", "weather=lots%20of%20rain"]
  const pairs = text.split("&");

  for (const pair of pairs) {
    // 2. = で分割してキーと値に分ける
    const [key, value] = pair.split("=");

    // 3. %20 を正規表現を使ってすべてのスペース（" "）に置換する
    // /%20/g の 'g' は global フラグで、見つかったものすべてを置換します
    const decodedValue = value.replace(/%20/g, " ");

    // 4. 結果オブジェクトに格納
    result[key] = decodedValue;
  }

  return result;
};

module.exports = urlDecode;