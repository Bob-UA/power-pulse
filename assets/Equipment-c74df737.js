import{d as a,r as o,l as c,u as s,j as i}from"./index-f44b395a.js";import{e}from"./exercisesSelectors-192ff74d.js";import{E as x}from"./ExercisesList-e59506c5.js";const m=()=>{const t=a();o.useEffect(()=>{t(c.getExercisesByEquipment())},[t]);const r=s(e.getExercisesData);return s(e.getIsLoading),s(e.getIsError),i.jsx("div",{children:r&&i.jsx(x,{exercises:r})})};export{m as default};