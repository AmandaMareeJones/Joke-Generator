function showAnswer(response) {
  alert(response.data.answer);
}
let apiKey = "09te212a1c952dfb01916b44eoad6c23";
let context =
  "You are an intelligent AI Assistant, who provides clear and concise answers. Provide only one sentance";
let prompt = "Who was the first female president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
