import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  const handleTranslate = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8001/translate", { text });
      setTranslation(res.data.translated_text);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center font-[Poppins] bg-gradient-to-br from-[#6e8efb] to-[#a777e3] p-4">
      <div className="max-w-xl w-full p-8 text-center rounded-2xl bg-white/15 backdrop-blur-xl shadow-2xl text-white animate-fadeIn">
        <h1 className="text-4xl font-semibold tracking-wide mb-6">
          Language Translator
        </h1>

        <textarea
          className="w-full min-h-[120px] p-4 text-base rounded-xl border-none outline-none bg-white/10 text-white placeholder-white/60 resize-y mb-4 transition duration-300 focus:bg-white/20 focus:shadow-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate..."
        />

        <button
          className="bg-gradient-to-r from-[#61dafb] to-[#21a1f1] text-white px-8 py-3 rounded-full font-medium shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:from-[#21a1f1] hover:to-[#61dafb]"
          onClick={handleTranslate}
        >
          Translate
        </button>

        {translation && (
          <div className="mt-8 p-6 bg-white/15 rounded-xl shadow-xl animate-slideUp">
            <h2 className="mb-2 font-semibold">Translation:</h2>
            <p className="text-lg leading-relaxed break-words">{translation}</p>
          </div>
        )}
      </div>

      {/* Custom animations in Tailwind */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
          .animate-slideUp {
            animation: slideUp 0.6s ease-out;
          }
        `}
      </style>
    </div>
  );
}

export default App;
