import{d as o,r as c,l as i,u as s,j as a}from"./index-f44b395a.js";import{E as x}from"./ExercisesList-e59506c5.js";import{e}from"./exercisesSelectors-192ff74d.js";const E=({categoryName:d})=>{const r=o();c.useEffect(()=>{r(i.getExercisesByBodyParts())},[r]);const t=s(e.getExercisesData);return s(e.getIsLoading),s(e.getIsError),a.jsx("div",{children:t&&a.jsx(x,{exercises:t})})};export{E as default};