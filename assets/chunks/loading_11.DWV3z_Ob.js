const n=`.classic-loader_11 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
}

.classic-loader_11:before,
.classic-loader_11:after {
  content: "Loading...";
  grid-area: 1/1;
  -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
  animation: classic-loader_11 1s infinite cubic-bezier(0.5, 220, 0.5, -220);
}

.classic-loader_11:after {
  -webkit-mask-position: 1ch 50%;
  --s: -1;
}

@keyframes classic-loader_11 {
  100% {
    transform: translateY(calc(var(--s, 1) * 0.1%));
  }
}
`;export{n as default};
