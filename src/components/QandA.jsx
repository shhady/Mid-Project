// import React, { useEffect, useState } from "react";
// import "./styleCryptoData.css";
// import axios from "axios";

// function QandA() {
//   const [data, setData] = useState();
//   const [newQuestion, setNewQuestion] = useState("");

//   useEffect(() => {
//     const search = async () => {
//       const response = await axios.get(
//         "https://629de115c6ef9335c0a8f53f.mockapi.io/questions"
//       );
//       setData(response.data);
//     };
//     search();
//   }, []);

//   const handleCreate = async () => {
//     const newquestion = {
//       question: newQuestion,
//     };
//     try {
//       const postedData = await axios.post(
//         "https://628e25fba339dfef87a87ada.mockapi.io/questions",
//         newquestion
//       );
//       setNewQuestion((prev) => {
//         return {
//           data: [...prev.data, postedData.data],
//           newQuestion: "",
//         };
//       });
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   console.log(data);
//   if (!data) return null;
//   const paintData = () => {
//     return data.map((question) => {
//       return (
//         <div
//           key={question.id}
//           style={{ border: "3px solid #333", width: "50vw", marginTop: "1rem" }}
//         >
//           <div>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <img
//                 src={question.img}
//                 alt="#"
//                 style={{ width: "50px", height: "50px", borderRadius: "50%" }}
//               />{" "}
//               <span>{question.name}</span>
//             </div>
//             <div style={{ fontSize: "24px", fontWeight: "bold" }}>
//               {question.Questions}
//             </div>
//           </div>
//           <div
//             style={{
//               border: "1px solid #333",
//               width: "50vw",
//               marginTop: "1rem",
//             }}
//           >
//             {question.Answers}
//           </div>
//           <div>{question.answer1}</div>
//           <input
//             type="text"
//             placeholder="reply"
//             style={{
//               height: "5vh",
//               width: "40vw",
//               marginTop: "1rem",
//             }}
//           ></input>
//           <button>Submit</button>
//         </div>
//       );
//     });
//   };
//   return (
//     <div className="MainContainer" style={{ display: "flex" }}>
//       <div className="ask" style={{ width: "30%" }}>
//         <h2>Ask a question:</h2>
//         <div>
//           <input
//             placeholder="Text"
//             type="area"
//             style={{ height: "30vh", marginTop: "1rem" }}
//             id="newQuestion"
//           />
//         </div>
//         <div>
//           <button onClick={handleCreate}>Submit</button>
//         </div>
//       </div>
//       <div style={{ width: "30%" }}>
//         <h2>Frequently asked questions:</h2>
//         <div>{paintData()}</div>
//       </div>
//       ;
//     </div>
//   );
// }

// export default QandA;

// import React from 'react'

// export default function QandA() {
//   return (
//     <div>QandA</div>
//   )
// }
