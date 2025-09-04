const n=`.classic-loader_15 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  line-height: 1.2em;
  display: inline-grid;
}

.classic-loader_15:before,
.classic-loader_15:after {
  content: "Loading...";
  grid-area: 1/1;
  -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
  color: #0000;
  text-shadow: 0 0 0 #000, 0 calc(var(--s, 1) * 1.2em) 0 #000;
  animation: classic-loader_15 1s infinite;
}

.classic-loader_15:after {
  -webkit-mask-position: 1ch 50%;
  --s: -1;
}

@keyframes classic-loader_15 {
  80%, 100% {
    text-shadow: 0 calc(var(--s, 1) * -1.2em) 0 #000, 0 0 0 #000
  }
}
`;export{n as default};
