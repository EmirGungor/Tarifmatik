import axios from "axios";

export const askChatGPT = async (prompt) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: prompt },
        {
          role: "system",
          content:"Sen bir şefsin ve insanların verdiği malzemeler ile onlara tarif hazırlayacaksın,tüm malzemeleri kullanmana gerek yok.Eğer daha mantıklı bir tarif düşünürsen ve onların verdiğinde bir iki malzeme eksikse belki onlara; bu malzemen de varsa tarifini daha da şekillendirebiliriz şeklinde direktif verirsen çok iyi olur . Onlara pratik ve lezzetli bir tarif önerisi ver beğenmeme ihtimallerine karşı tarifi bitirince bir kaç alfternatif başlık sun istlerlerse onun da tarfini verirsin",
        }
      ],
      temperature: 0.7,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response.data.choices[0].message.content;
};
