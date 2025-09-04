const n=`.classic-loader_32 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  text-shadow: 0 0 0 rgb(255 0 0),
  0 0 0 rgb(0 255 0),
  0 0 0 rgb(0 0 255);
  font-size: 30px;
  animation: classic-loader_32 1s infinite cubic-bezier(0.5, -2000, 0.5, 2000);
}

.classic-loader_32:before {
  content: "Loading...";
}

@keyframes classic-loader_32 {
  25%, 100% {
    text-shadow: 0.03px -0.01px 0.01px rgb(255 0 0),
    0.02px 0.02px 0 rgb(0 255 0),
    -0.02px 0.02px 0 rgb(0 0 255);
  }
}
`;export{n as default};
