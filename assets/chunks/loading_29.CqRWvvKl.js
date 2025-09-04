const n=`.classic-loader_29 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
}

.classic-loader_29:before,
.classic-loader_29:after {
  content: "Loading...";
  grid-area: 1/1;
  -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
  animation: classic-loader_29 2s infinite;
}

.classic-loader_29:after {
  -webkit-mask-position: 1ch 50%;
  --s: -1;
}

@keyframes classic-loader_29 {
  80%, 100% {
    transform: rotate(calc(var(--s, 1) * 1turn))
  }
}
`;export{n as default};
