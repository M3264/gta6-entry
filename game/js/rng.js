export function rng(seed=7){return ()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}}
