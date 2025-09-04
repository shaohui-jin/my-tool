const a=`.dots-loader_4 {
  width: 60px;
  aspect-ratio: 4;
  --c: #000 90%, #0000;
  background: radial-gradient(circle closest-side at left 6px top 50%, var(--c)),
  radial-gradient(circle closest-side, var(--c)),
  radial-gradient(circle closest-side at right 6px top 50%, var(--c));
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: dots-loader_4 1s infinite alternate;
}

@keyframes dots-loader_4 {
  to {
    width: 25px;
    aspect-ratio: 1
  }
}
`;export{a as default};
