// import React, { useState } from "react";
// export const Todos = () => {
//   const [input, setInput] = useState("");
//   const [inputList, setInputList] = useState([]);
//   const addItem = () => {
//     setInputList([...inputList, input]);
//     console.log(inputList);
//     setInput("");
//   };
//   function Remove(i) {
//     const update = inputList.filter((elm, id) => {
//       return i !== id;
//     });
//     setInputList(update);
//   }
//   function removeAll() {
//     setInputList([]);
//   }
//   return (
//     <div className="container">
//       <div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={addItem}>Add</button>
//       </div>
//       <div>
//         <h1>Here is your list</h1>
//         {inputList !== [] &&
//           inputList.map((data, i) => {
//             return (
//               <>
//                 <p key={i}>
//                   <div className="data">
//                     {data}
//                     <div>
//                       <button onClick={() => Remove(i)}>X</button>
//                     </div>
//                   </div>
//                 </p>
//               </>
//             );
//           })}
//         <div className="container">
//           {inputList.length >= 1 && (
//             <button onClick={removeAll}>Remove All</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";

export const Todos = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  function add() {
    if(input===""){
      alert("please add item");
    }else{
      setList([...list, input]);
    }
    // setList([...list, input]);
    setInput("")
  }
  function remove(i) {
    const update = list.filter((elem, id) => {
      return i !== id;
    });
    setList(update);
  }
  function removeAll(i) {
   
    setList([]);
  }
  return (
    <>
     <div className="container">
      <h1>To-do List</h1>
      <div className="container">
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={add}>Add</button>
        </div>
      </div>
      <div>
        <h1>here is your list :{")"}</h1>
        <p>
          {list !== [] &&
            list.map((data, i) => {
              return (
                <>
                  <p key={i}>
                    {data}
                    <button onClick={() => remove(i)}>romove</button>
                  </p>
                </>
              );
            })}
        </p>
      </div>
      <div className="container">
        {list.length>=1 && <button onClick={removeAll}>remove all</button>}
      </div>
      </div>
    </>
  );
};
