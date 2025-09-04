const n=`.classic-loader_24 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: radial-gradient(circle closest-side, #000 94%, #0000) right/calc(200% - 1em) 100%;
  animation: classic-loader_24 1s infinite alternate linear;
}

.classic-loader_24::before {
  content: "Loading...";
  line-height: 1em;
  color: #0000;
  background: inherit;
  background-image: radial-gradient(circle closest-side, #fff 94%, #000);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes classic-loader_24 {
  100% {
    background-position: left
  }
}
`;export{n as default};
