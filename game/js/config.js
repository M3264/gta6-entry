export const WORLD=3200, BLOCK=400, ROAD=116; export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)); export const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
