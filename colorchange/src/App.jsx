import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [buttons, setButtons] = useState([]);

  const handleAddColor = () => {
    if (color ) {
      setButtons([...buttons, color]);
      setColor(""); 
    }
  };

  const handleRemoveColor = (colorToRemove) => {
    setButtons(buttons.filter(btnColor => btnColor !== colorToRemove));
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: color, minWidth: "100vw" }}>
      <div className="flex flex-col items-center justify-center h-full p-4 space-y-4">
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter a color"
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddColor}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded shadow-lg hover:bg-blue-700"
        >
          Change Background & Add Button
        </button>

        <div className="flex flex-col justify-center gap-3 mt-4">
          {buttons.map((btnColor, index) => (
            <div key={index} className="flex items-center  space-x-2">
              <button
                onClick={() => setColor(btnColor)}
                className="px-4 py-2 font-semibold text-white rounded shadow-lg"
                style={{ backgroundColor: btnColor }}
              >
                {btnColor}
              </button>
              
              <button
                onClick={() => handleRemoveColor(btnColor)}
                className="px-2 py-1 font-semibold text-white bg-red-500 rounded shadow-lg hover:bg-red-700"
              >
                X
              </button>

            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
