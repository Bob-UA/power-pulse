import{e as i,r as c,v as x,b as o,j as s}from"./index-5ad4c2f9.js";import{B as m,E as n}from"./CtegoryItem.style-a0808079.js";import{e as a}from"./exercisesSelectors-80adadd9.js";import{L as p}from"./Loading-bba5fc7f.js";import"./Hourglass-1233b04e.js";const E=()=>{const e=i();c.useEffect(()=>{e(x.getExercisesByMuscles())},[e]);const t=o(a.getFilterMuscles),r=o(a.getIsLoading);return s.jsxs(m,{children:[r&&s.jsx(p,{}),!r&&t&&s.jsx(n,{exercises:t})]})};export{E as default};