const n=`.classic-loader_14 {
  width: fit-content;
  padding-bottom: 5px;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  overflow: hidden;
  color: #0000;
  text-shadow: 0 0 0 #000, 10ch 0 0 #000;
  background: linear-gradient(#000 0 0) bottom left/0% 3px no-repeat;
  animation: classic-loader_14 1.5s infinite;
}

.classic-loader_14:before {
  content: "Loading...";
}

@keyframes classic-loader_14 {
  80% {
    text-shadow: 0 0 0 #000, 10ch 0 0 #000;
    background-size: 100% 3px
  }
  100% {
    text-shadow: -10ch 0 0 #000, 0 0 0 #000
  }
}
`;export{n as default};
