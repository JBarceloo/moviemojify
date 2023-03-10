const COHERE_API_URL = "https://api.cohere.ai/generate";
const COHERE_API_KEY = "ZRq9z6l2hCRxxM7qlfpxwaCL73pVcvZSCk0tLeX2";

export const getMemojify = async (input: string) => {
  const data = {
    model: "command-xlarge-nightly",
    max_tokens: 5,
    prompt: `Convert movie titles into emoji. Returns just the emoji. Minimum two emojis.

Back to the Future: π¨π΄ππ
Batman: π€΅π¦
Transformers: ππ€
Star Wars: β­οΈππ
Clueless: π€ͺπΆπ³
Toy Story: π§Έπ€ 
Rocky: π₯πͺ
Jurassic Park: π¦π
The Terminator:  π€πͺ
Inception: π€―β°
E.T.: π½π
The Lion King: π¦π¦π€΄
The Goonies: π§β©π
The Matrix: π€π’
The Dark Knight: ππ¦
Jaws: π¦π€’
The Little Mermaid: π§π§ββοΈ
Matrix:  π€π’
Shrek: π΄π§
Finding Nemo: ππ
Avatar: π§π
Titanic: π’π
Alien: π½π½
The Hangover: π€ͺπ€’
Pirates of the Caribbean: βοΈπ΄ββ οΈ
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

  return response.generations[0].text.split("\n")[0].replace(/οΏ½/g, "");
};
