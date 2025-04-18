import axios from "axios";

export const askChatGPT = async (prompt) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Sen yaratıcı bir aşçısın. Kullanıcı sana elindeki malzemeleri yazacak ve sen ona bu malzemelere göre:
          - Hızlı ve pratik bir tarif vereceksin
          - Gerekirse bazı malzemeleri dışarıda bırakabilirsin
          - Eksik gördüğün malzemeler varsa kullanıcıya tavsiyede bulunabilirsin
          - Tarifin sonunda, "Alternatif olarak şu tarifleri de deneyebilirsin" gibi birkaç öneri sunabilirsin
          - Eğer kullanıcı malzeme yazmazsa, "Malzemeleri biraz daha detaylı yazabilir misin?" şeklinde kibarca sor`,
        },
        { role: "user", content: prompt },
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
