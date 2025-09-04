const n=`.classic-loader_12 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
  overflow: hidden;
}

.classic-loader_12:before,
.classic-loader_12:after {
  content: "Loading...";
  grid-area: 1/1;
  clip-path: inset(0 -200% 50%);
  text-shadow: -10ch 0 0;
  animation: classic-loader_12 1s infinite;
}

.classic-loader_12:after {
  clip-path: inset(50% -200% 0%);
  text-shadow: 10ch 0 0;
  --s: -1;
}

@keyframes classic-loader_12 {
  50%, 100% {
    transform: translateX(calc(var(--s, 1) * 100%));
  }
}
`;export{n as default};
