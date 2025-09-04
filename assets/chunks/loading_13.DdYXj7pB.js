const n=`.classic-loader_13 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
  overflow: hidden;
}

.classic-loader_13:before,
.classic-loader_13:after {
  content: "Loading...";
  grid-area: 1/1;
  clip-path: inset(0 -200% 50%);
  text-shadow: -10ch 0 0;
  animation: classic-loader_13 2s infinite;
}

.classic-loader_13:after {
  clip-path: inset(50% -200% 0%);
  text-shadow: 10ch 0 0;
  --s: -1;
  animation-delay: 1s;
}

@keyframes classic-loader_13 {
  25%, 100% {
    transform: translateX(calc(var(--s, 1) * 100%));
  }
}
`;export{n as default};
