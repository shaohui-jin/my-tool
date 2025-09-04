const n=`.classic-loader_30 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
}

.classic-loader_30:before,
.classic-loader_30:after {
  content: "Loading...";
  grid-area: 1/1;
  line-height: 1em;
  -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
  -webkit-mask-position: calc(var(--s, 0) * 1ch) 50%;
  animation: classic-loader_30 2s infinite;
}

.classic-loader_30:after {
  --s: -1;
}

@keyframes classic-loader_30 {
  33% {
    transform: translateY(calc(var(--s, 1) * 50%));
    -webkit-mask-position: calc(var(--s, 0) * 1ch) 50%
  }
  66% {
    transform: translateY(calc(var(--s, 1) * 50%));
    -webkit-mask-position: calc(var(--s, 0) * 1ch + 1ch) 50%
  }
  100% {
    transform: translateY(calc(var(--s, 1) * 0%));
    -webkit-mask-position: calc(var(--s, 0) * 1ch + 1ch) 50%
  }
}
`;export{n as default};
