const n=`.classic-loader_6 {
  --c: #000;
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #0000;
  overflow: hidden;
  text-shadow: 0 0 var(--c), 11ch 0 var(--c);
  animation: classic-loader_6 2s infinite linear;
}

.classic-loader_6:before {
  content: "Loading..."
}

@keyframes classic-loader_6 {
  to {
    text-shadow: -11ch 0 var(--c), 0ch 0 var(--c)
  }
}
`;export{n as default};
