const n=`.classic-loader_21 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: linear-gradient(90deg, #000 50%, #0000 0) right/200% 100%;
  animation: classic-loader_21 2s infinite linear;
}

.classic-loader_21::before {
  content: "Loading...";
  color: #0000;
  padding: 0 5px;
  background: inherit;
  background-image: linear-gradient(90deg, #fff 50%, #000 0);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes classic-loader_21 {
  100% {
    background-position: left
  }
}
`;export{n as default};
