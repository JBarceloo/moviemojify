const COHERE_API_URL = "https://api.cohere.ai/generate";
const COHERE_API_KEY = "ZRq9z6l2hCRxxM7qlfpxwaCL73pVcvZSCk0tLeX2";

export const getMemojify = async (input: string) => {
  const data = {
    model: "command-xlarge-nightly",
    max_tokens: 5,
    prompt: `Convert movie titles into emoji. Returns just the emoji. Minimum two emojis.

Back to the Future: 👨👴🚗🕒
Batman: 🤵🦇
Transformers: 🚗🤖
Star Wars: ⭐️🌟🚀
Clueless: 🤪😶😳
Toy Story: 🧸🤠
Rocky: 🥊💪
Jurassic Park: 🦖🏞
The Terminator:  🤖🔪
Inception: 🤯⏰
E.T.: 👽🌍
The Lion King: 🦁🦁🤴
The Goonies: 🧒⛩🔎
The Matrix: 🤖🔢
The Dark Knight: 🌃🦇
Jaws: 🦈🤢
The Little Mermaid: 🧜🧜‍♂️
Matrix:  🤖🔢
Shrek: 🐴🧝
Finding Nemo: 🐟🔎
Avatar: 🧙🌍
Titanic: 🚢💔
Alien: 👽👽
The Hangover: 🤪🤢
Pirates of the Caribbean: ⚓️🏴‍☠️
${input}: `,
  };

  const response = await fetch(COHERE_API_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return response.generations[0].text.split("\n")[0].replace(/�/g, "");
};
