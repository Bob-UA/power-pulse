import{d as c,r as i,l,u as e,j as r}from"./index-f44b395a.js";import{E as n}from"./ExercisesList-e59506c5.js";import{e as t}from"./exercisesSelectors-192ff74d.js";const p=()=>{const o=c();i.useEffect(()=>{o(l.getExercisesByMuscles())},[o]);const s=e(t.getExercisesData),a=e(t.getIsLoading);return e(t.getIsError),console.log("data",s),console.log("loading",a),r.jsx("div",{children:s&&r.jsx(n,{exercises:s})})};export{p as default};