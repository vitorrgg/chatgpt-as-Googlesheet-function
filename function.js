function descricao(variavel) {
  // Substitua SUA_CHAVE_DE_ACESSO_AQUI pela sua chave de acesso à API do OpenAI
  var apiKey = 'sk-SUA_CHAVE_DE_ACESSO_AQUI';
  var model = 'text-davinci-003';
  // Entre abaixo com o texto que preferir também alterando o local da variável
  var prompt = `Crie uma descrição para um produto de nome ${nome_produto} pensando em SEO e em vendas :`;
  var temperature = 0.5;
  
  var response = UrlFetchApp.fetch(
    'https://api.openai.com/v1/completions',
    {
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      
      'method': 'post',
      'payload': JSON.stringify({
        'model': model,
        'prompt': prompt,
        'temperature': temperature,
        'max_tokens': 2000
      })
    }
  );
  
  var responseText = response.getContentText();
  var responseJson = JSON.parse(responseText);
  console.log(responseJson);
  
  return responseJson.choices[0].text;
}
